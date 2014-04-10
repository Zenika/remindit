package it.remind.rest;

import it.remind.domain.WebSite;
import it.remind.repositories.ElasticSearchRepository;
import restx.annotations.GET;
import restx.annotations.RestxResource;
import restx.factory.Component;
import restx.security.PermitAll;

@Component
@RestxResource
@PermitAll
public class SearchBookmark {

    private ElasticSearchRepository elasticSearchRepository;

    public SearchBookmark(final ElasticSearchRepository elasticSearchRepository) {
        this.elasticSearchRepository = elasticSearchRepository;
    }

    @GET("/search")
    public WebSite searchText(final String text) {
        return elasticSearchRepository.searchText(text);
    }

}
