package it.remind.rest;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.google.common.base.Optional;
import static com.google.common.base.Preconditions.checkNotNull;

import restx.common.Types;
import restx.*;
import restx.entity.*;
import restx.http.*;
import restx.factory.*;
import restx.security.*;
import static restx.security.Permissions.*;
import restx.description.*;
import restx.converters.MainStringConverter;
import static restx.common.MorePreconditions.checkPresent;

import javax.validation.Validator;
import static restx.validation.Validations.checkValid;

import java.io.IOException;
import java.io.PrintWriter;

@Component(priority = 0)

public class SearchBookmarkRouter extends RestxRouter {

    public SearchBookmarkRouter(
                    final SearchBookmark resource,
                    final EntityRequestBodyReaderRegistry readerRegistry,
                    final EntityResponseWriterRegistry writerRegistry,
                    final MainStringConverter converter,
                    final Validator validator,
                    final RestxSecurityManager securityManager) {
        super(
            "default", "SearchBookmarkRouter", new RestxRoute[] {
        new StdEntityRoute<Void, it.remind.domain.WebSite>("default#SearchBookmark#searchText",
                readerRegistry.<Void>build(Void.class, Optional.<String>absent()),
                writerRegistry.<it.remind.domain.WebSite>build(it.remind.domain.WebSite.class, Optional.<String>absent()),
                new StdRestxRequestMatcher("GET", "/search"),
                HttpStatus.OK, RestxLogLevel.DEFAULT) {
            @Override
            protected Optional<it.remind.domain.WebSite> doRoute(RestxRequest request, RestxRequestMatch match, Void body) throws IOException {
                securityManager.check(request, open());
                return Optional.of(resource.searchText(
                        /* [QUERY] text */ checkPresent(request.getQueryParam("text"), "query param text is required")
                ));
            }

            @Override
            protected void describeOperation(OperationDescription operation) {
                super.describeOperation(operation);
                                OperationParameterDescription text = new OperationParameterDescription();
                text.name = "text";
                text.paramType = OperationParameterDescription.ParamType.query;
                text.dataType = "string";
                text.schemaKey = "";
                text.required = true;
                operation.parameters.add(text);


                operation.responseClass = "WebSite";
                operation.inEntitySchemaKey = "";
                operation.outEntitySchemaKey = "it.remind.domain.WebSite";
                operation.sourceLocation = "it.remind.rest.SearchBookmark#searchText(java.lang.String)";
            }
        },
        });
    }

}
