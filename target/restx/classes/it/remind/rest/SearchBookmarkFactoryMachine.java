package it.remind.rest;

import com.google.common.collect.ImmutableSet;
import restx.factory.*;
import it.remind.rest.SearchBookmark;

@Machine
public class SearchBookmarkFactoryMachine extends SingleNameFactoryMachine<SearchBookmark> {
    public static final Name<SearchBookmark> NAME = Name.of(SearchBookmark.class, "SearchBookmark");

    public SearchBookmarkFactoryMachine() {
        super(0, new StdMachineEngine<SearchBookmark>(NAME, BoundlessComponentBox.FACTORY) {
private final Factory.Query<it.remind.repositories.ElasticSearchRepository> elasticSearchRepository = Factory.Query.byClass(it.remind.repositories.ElasticSearchRepository.class).mandatory();

            @Override
            public BillOfMaterials getBillOfMaterial() {
                return new BillOfMaterials(ImmutableSet.<Factory.Query<?>>of(
elasticSearchRepository
                ));
            }

            @Override
            protected SearchBookmark doNewComponent(SatisfiedBOM satisfiedBOM) {
                return new SearchBookmark(
satisfiedBOM.getOne(elasticSearchRepository).get().getComponent()
                );
            }
        });
    }

}
