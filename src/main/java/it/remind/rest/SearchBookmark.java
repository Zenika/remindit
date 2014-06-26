package it.remind.rest;

import it.remind.domain.WebSite;
import it.remind.repositories.ElasticSearchRepository;

import java.util.List;

import restx.annotations.GET;
import restx.annotations.RestxResource;
import restx.factory.Component;
import restx.security.PermitAll;

@Component
@RestxResource
@PermitAll
public class SearchBookmark {

	private final ElasticSearchRepository elasticSearchRepository;

	public SearchBookmark(final ElasticSearchRepository elasticSearchRepository) {
		this.elasticSearchRepository = elasticSearchRepository;
	}

	@GET("/search")
	public List<WebSite> searchText(final String text) {
		List<WebSite> sites = elasticSearchRepository.searchText(text);
		return sites;
	}

	@GET("/screenshot/{resourceId}")
	public String getScreenshot(final String resourceId) {
		String image = elasticSearchRepository.getScreenshot(resourceId);
		return image;
	}

}
