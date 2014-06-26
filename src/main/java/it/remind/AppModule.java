package it.remind;

import java.nio.file.Paths;

import javax.inject.Named;

import it.remind.rest.AppUserRepository;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.transport.InetSocketTransportAddress;

import restx.factory.Module;
import restx.factory.Provides;
import restx.mongo.MongoModule;
import restx.security.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.base.Charsets;
import com.google.common.collect.ImmutableSet;
import it.remind.domain.User;


@Module
public class AppModule {

    public static User currentUser() {
        return (User) RestxSession.current().getPrincipal().get();
    }


    @Provides
    public SignatureKey signatureKey() {
        return new SignatureKey("bb5c926b-58cb-449d-a1b4-4026bd02cf20 remindit -5553057365981469587 remind-it".getBytes(Charsets.UTF_8));
    }

    public static final class Roles {
        // we don't use an enum here because roles in @RolesAllowed have to be constant strings
        public static final String ADMIN = "admin";
        public static final String USER = "user";
    }


    @Provides
    @Named("restx.admin.password")
    public String restxAdminPassword() {
        return "admin";
    }

    @Provides
    @Named("app.name")
    public String appName() {
        return "remindit";
    }

    @Provides @Named(MongoModule.MONGO_DB_NAME)
    public String dbName() {
        return "remindit";
    }

    @Provides
    public CredentialsStrategy credentialsStrategy() {
        return new BCryptCredentialsStrategy();
    }


    @Provides
    public Client client() {
        return new TransportClient().addTransportAddress(new InetSocketTransportAddress("localhost", 9300));
    }


    @Provides
    public BasicPrincipalAuthenticator basicPrincipalAuthenticator(
            AppUserRepository userRepository, SecuritySettings securitySettings,
            CredentialsStrategy credentialsStrategy,
            @Named("restx.admin.passwordHash") String adminPasswordHash) {
        return new StdBasicPrincipalAuthenticator(
                new StdUserService<>(userRepository, credentialsStrategy, adminPasswordHash), securitySettings);
    }
}
