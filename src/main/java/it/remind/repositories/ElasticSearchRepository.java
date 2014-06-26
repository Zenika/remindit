package it.remind.repositories;

import static org.elasticsearch.common.xcontent.XContentFactory.jsonBuilder;
import it.remind.domain.ContentIndex;
import it.remind.domain.WebSite;

import java.io.IOException;
import java.io.InputStream;
import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.elasticsearch.ElasticsearchException;
import org.elasticsearch.action.get.GetResponse;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.action.search.SearchType;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.Base64;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.SearchHits;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import restx.factory.Component;

@Component
public class ElasticSearchRepository {

	private static final Logger LOGGER = LoggerFactory
			.getLogger(ElasticSearchRepository.class);

	private final Client client;

	public ElasticSearchRepository(final Client client) {
		this.client = client;
	}

	public void addUrlContentToIndex(ContentIndex contentIndex) {
		try {
			IndexResponse response = client
					.prepareIndex("blog", "site")
					.setSource(
							jsonBuilder().startObject()
									.field("file", contentIndex.getContent())
									.field("url", contentIndex.getUrl())
									.endObject()).execute().actionGet();
		} catch (ElasticsearchException | IOException e) {
			throw new RuntimeException("Erreur lors de l'ajout d'un index", e);
		}
	}

	public void addTagToResource(String resourceId, String tag) {
		List<String> tags = (List<String>) client
				.prepareGet("blog", "site", resourceId).execute().actionGet()
				.getSource().get("tags");
		// LOGGER.info(tags.toString());
		tags.add(tag);
		tags = new ArrayList<>(new HashSet<>(tags));

		client.prepareUpdate("blog", "site", resourceId)
				.setScript("ctx._source.tags=tag").addScriptParam("tag", tags)
				.execute();

	}

	public void removeTagToResource(String resourceId, String tag) {
		List<String> tags = (List<String>) client
				.prepareGet("blog", "site", resourceId).execute().actionGet()
				.getSource().get("tags");
		Set<String> tagsSet = new HashSet<>(tags);
		tagsSet.remove(tag);
		tags = new ArrayList<>(tagsSet);
		client.prepareUpdate("blog", "site", resourceId)
				.setScript("ctx._source.tags=tag").addScriptParam("tag", tags)
				.execute();
	}

	public void index() throws IOException {
		LOGGER.info("BEGIN");
		InputStream is = this.getClass().getClassLoader()
				.getResourceAsStream("/test.html");

		String content = readFile("src/main/resources/test.html",
				Charset.forName("UTF-8"));
		LOGGER.trace("content : {}", content);

		LOGGER.info("INDEX");
		IndexResponse response = client
				.prepareIndex("blog", "site")
				.setSource(
						jsonBuilder()
								.startObject()
								.field("url", "http://elasticsearch.org")
								.field("file",
										Base64.encodeBytes(content.getBytes()))
								.endObject()).execute().actionGet();

		LOGGER.info("SEARCH");
		SearchResponse searchResponse = client.prepareSearch("blog")
				.setTypes("site")
				.setSearchType(SearchType.DFS_QUERY_THEN_FETCH)
				.setQuery(QueryBuilders.matchQuery("file", "ElasticSearch")) // Query
				.setFrom(0).setSize(60).setExplain(true).execute().actionGet();

		LOGGER.info("response : {}", searchResponse);

	}

	public static void main(final String[] args) throws IOException {
		Client client = new TransportClient()
				.addTransportAddress(new InetSocketTransportAddress(
						"localhost", 9300));
		ElasticSearchRepository elasticSearchRepository = new ElasticSearchRepository(
				client);
		elasticSearchRepository.index();
	}

	static String readFile(final String path, final Charset encoding)
			throws IOException {
		byte[] encoded = Files.readAllBytes(Paths.get(path));
		return encoding.decode(ByteBuffer.wrap(encoded)).toString();
	}

	public List<WebSite> searchText(final String text) {
		List<WebSite> websites = new ArrayList<>();
		SearchResponse searchResponse = client.prepareSearch("blog")
				.setTypes("site")
				.setSearchType(SearchType.DFS_QUERY_THEN_FETCH)
				.setQuery(QueryBuilders.matchQuery("file", text)) // Query
				.setFrom(0).setSize(60).setExplain(true).execute().actionGet();
		LOGGER.debug("Getting {} results for the text {}", searchResponse
				.getHits().getTotalHits(), text);
		SearchHits hits = searchResponse.getHits();
		for (SearchHit hit : hits) {
			GetResponse getResponse = client
					.prepareGet("blog", "site", hit.getId()).execute()
					.actionGet();
			String url = (String) getResponse.getSource().get("url");
			WebSite webSite = new WebSite();
			webSite.setUrl(url);
			websites.add(webSite);
		}

		return websites;
	}

	public String getScreenshot(String resourceId) {
		return "data:image/png;base64,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";
	}
}
