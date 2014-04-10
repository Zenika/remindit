package it.remind;

import java.nio.file.Paths;

import javax.inject.Named;

import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.transport.InetSocketTransportAddress;

import restx.factory.Module;
import restx.factory.Provides;
import restx.security.BCryptCredentialsStrategy;
import restx.security.BasicPrincipalAuthenticator;
import restx.security.CredentialsStrategy;
import restx.security.FileBasedUserRepository;
import restx.security.SecuritySettings;
import restx.security.SignatureKey;
import restx.security.StdBasicPrincipalAuthenticator;
import restx.security.StdUser;
import restx.security.StdUserService;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.base.Charsets;
import com.google.common.collect.ImmutableSet;

@Module
public class AppModule {
    @Provides
    public SignatureKey signatureKey() {
        return new SignatureKey("bb5c926b-58cb-449d-a1b4-4026bd02cf20 remindit -5553057365981469587 remind-it".getBytes(Charsets.UTF_8));
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

    @Provides
    public CredentialsStrategy credentialsStrategy() {
        return new BCryptCredentialsStrategy();
    }

    @Provides
    public BasicPrincipalAuthenticator basicPrincipalAuthenticator(final SecuritySettings securitySettings, final CredentialsStrategy credentialsStrategy,
            @Named("restx.admin.passwordHash") final String defaultAdminPasswordHash, final ObjectMapper mapper) {
        return new StdBasicPrincipalAuthenticator(new StdUserService<>(
        // use file based users repository.
        // Developer's note: prefer another storage mechanism for your users if
        // you need real user management
        // and better perf
                new FileBasedUserRepository<>(StdUser.class, // this is the
                                                             // class for the
                                                             // User objects,
                                                             // that you can get
                                                             // in your app code
                        // with RestxSession.current().getPrincipal().get()
                        // it can be a custom user class, it just need to be
                        // json deserializable
                        mapper,

                        // this is the default restx admin, useful to access the
                        // restx admin console.
                        // if one user with restx-admin role is defined in the
                        // repository, this default user won't be
                        // available anymore
                        new StdUser("admin", ImmutableSet.<String> of("*")),

                        // the path where users are stored
                        Paths.get("data/users.json"),

                        // the path where credentials are stored. isolating both
                        // is a good practice in terms of security
                        // it is strongly recommended to follow this approach
                        // even if you use your own repository
                        Paths.get("data/credentials.json"),

                        // tells that we want to reload the files dynamically if
                        // they are touched.
                        // this has a performance impact, if you know your users
                        // / credentials never change without a
                        // restart you can disable this to get better perfs

                        true), credentialsStrategy, defaultAdminPasswordHash), securitySettings);
    }

    @Provides
    public Client client() {
        return new TransportClient().addTransportAddress(new InetSocketTransportAddress("localhost", 9300));
    }
}
