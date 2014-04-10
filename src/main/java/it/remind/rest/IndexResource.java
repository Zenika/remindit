package it.remind.rest;

import it.remind.Roles;
import it.remind.domain.ContentIndex;
import it.remind.repositories.ElasticSearchRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import restx.annotations.DELETE;
import restx.annotations.PUT;
import restx.annotations.RestxResource;
import restx.factory.Component;
import restx.security.RolesAllowed;

@Component
@RestxResource
public class IndexResource {

	private static final Logger LOGGER = LoggerFactory
			.getLogger(IndexResource.class);

	private final ElasticSearchRepository elasticSearchRepository;

	public IndexResource(ElasticSearchRepository elasticSearchRepository) {
		super();
		this.elasticSearchRepository = elasticSearchRepository;
	}

	@PUT("/index")
	@RolesAllowed(Roles.HELLO_ROLE)
	public String indexUrl(ContentIndex index) {
		LOGGER.debug(index.getUrl());
		LOGGER.debug(index.getContent());
		elasticSearchRepository.addUrlContentToIndex(index);
		return "test";
	}

	@PUT("/index/{resourceId}/tag/{tag}")
	@RolesAllowed(Roles.HELLO_ROLE)
	public Boolean addTag(String resourceId, String tag) {
		elasticSearchRepository.addTagToResource(resourceId, tag);
		return true;
	}

	@DELETE("/index/{resourceId}/tag/{tag}")
	@RolesAllowed(Roles.HELLO_ROLE)
	public Boolean removeTag(String resourceId, String tag) {
		elasticSearchRepository.removeTagToResource(resourceId, tag);
		return true;
	}

}
