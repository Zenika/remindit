package it.remind.repositories;

import com.google.common.collect.ImmutableSet;
import restx.factory.*;
import it.remind.repositories.ElasticSearchRepository;

@Machine
public class ElasticSearchRepositoryFactoryMachine extends SingleNameFactoryMachine<ElasticSearchRepository> {
    public static final Name<ElasticSearchRepository> NAME = Name.of(ElasticSearchRepository.class, "ElasticSearchRepository");

    public ElasticSearchRepositoryFactoryMachine() {
        super(0, new StdMachineEngine<ElasticSearchRepository>(NAME, BoundlessComponentBox.FACTORY) {
private final Factory.Query<org.elasticsearch.client.Client> client = Factory.Query.byClass(org.elasticsearch.client.Client.class).mandatory();

            @Override
            public BillOfMaterials getBillOfMaterial() {
                return new BillOfMaterials(ImmutableSet.<Factory.Query<?>>of(
client
                ));
            }

            @Override
            protected ElasticSearchRepository doNewComponent(SatisfiedBOM satisfiedBOM) {
                return new ElasticSearchRepository(
satisfiedBOM.getOne(client).get().getComponent()
                );
            }
        });
    }

}
