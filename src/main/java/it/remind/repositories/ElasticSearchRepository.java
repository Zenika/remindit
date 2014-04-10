package it.remind.repositories;

import static org.elasticsearch.common.xcontent.XContentFactory.jsonBuilder;
import it.remind.domain.ContentIndex;

import java.io.IOException;
import java.io.InputStream;
import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.elasticsearch.ElasticsearchException;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.action.search.SearchType;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.Base64;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.index.query.QueryBuilders;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import restx.factory.Component;

@Component
public class ElasticSearchRepository {

    private static final Logger LOGGER = LoggerFactory.getLogger(ElasticSearchRepository.class);

    private final Client client;

    public ElasticSearchRepository(Client client) {
        this.client = client;
    }
    
    public void addUrlContentToIndex(ContentIndex contentIndex) {
    	try {
			IndexResponse response = client.prepareIndex("blog", "site")
			        .setSource(jsonBuilder()
			                .startObject()
			                    .field("file", contentIndex.getContent())
			                    .field("url",contentIndex.getUrl())
			                .endObject())
			        .execute()
			        .actionGet();
		} catch (ElasticsearchException | IOException e) {
			throw new RuntimeException("Erreur lors de l'ajout d'un index",e);
		}
    }

    public void index() throws IOException {
        LOGGER.info("BEGIN");
        InputStream is = this.getClass().getClassLoader().getResourceAsStream("/test.html");

        String content = readFile("src/main/resources/test.html", Charset.forName("UTF-8"));
        LOGGER.trace("content : {}", content);


        LOGGER.info("INDEX");
        IndexResponse response = client.prepareIndex("blog", "site")
                .setSource(jsonBuilder()
                        .startObject()
                            .field("file", Base64.encodeBytes(content.getBytes()))
                        .endObject())
                .execute()
                .actionGet();

        LOGGER.info("SEARCH");
        SearchResponse searchResponse = client.prepareSearch("blog")
                .setTypes("site")
                .setSearchType(SearchType.DFS_QUERY_THEN_FETCH)
                .setQuery(QueryBuilders.matchQuery("file", "ElasticSearch"))             // Query
                .setFrom(0).setSize(60).setExplain(true)
                .execute()
                .actionGet();


        LOGGER.info("response : {}", searchResponse);

    }

    public static void main(String[] args) throws IOException {
        Client client = new TransportClient().addTransportAddress(new InetSocketTransportAddress("localhost", 9300));
        ElasticSearchRepository elasticSearchRepository = new ElasticSearchRepository(client);
        elasticSearchRepository.index();
    }

    static String readFile(String path, Charset encoding) throws IOException {
        byte[] encoded = Files.readAllBytes(Paths.get(path));
        return encoding.decode(ByteBuffer.wrap(encoded)).toString();
    }


}
