package it.remind.rest;

import it.remind.Roles;
import it.remind.domain.Message;
import org.joda.time.DateTime;
import restx.annotations.GET;
import restx.security.RolesAllowed;

import com.google.common.base.Optional;
import restx.exceptions.RestxErrors;
import restx.http.HttpStatus;
import restx.Status;
import restx.WebException;
import restx.annotations.*;
import restx.factory.Component;
import restx.security.RolesAllowed;
import it.remind.AppModule;
import it.remind.domain.User;

import java.util.Map;

import static com.google.common.base.Preconditions.checkNotNull;
import static restx.common.MorePreconditions.checkEquals;
import static it.remind.AppModule.Roles.*;

/**
 */
@Component @RestxResource
public class UserResource {
    private final AppUserRepository appUserRepository;
    private final RestxErrors errors;

    public UserResource(AppUserRepository appUserRepository, RestxErrors errors) {
        this.appUserRepository = appUserRepository;
        this.errors = errors;
    }

    @RolesAllowed(ADMIN)
    @POST("/users")
    public User createUser(User user) {
        checkUserRules(user);
        return appUserRepository.createUser(user);
    }

    @PUT("/users/{key}")
    public User updateUser(String key, User user) {
        checkEquals("key", key, "user.key", user.getKey());
        checkSelfOrAdmin(key);
        checkUserRules(user);
        return appUserRepository.updateUser(user);
    }

    @RolesAllowed(ADMIN)
    @GET("/users")
    public Iterable<User> findUsers() {
        return appUserRepository.findAllUsers();
    }

    @GET("/users/{key}")
    public Optional<User> findUserByKey(String key) {
        checkSelfOrAdmin(key);
        return appUserRepository.findUserByKey(key);
    }

    @RolesAllowed(ADMIN)
    @DELETE("/users/{key}")
    public void deleteUser(String key) {
        appUserRepository.deleteUser(key);
    }

    @PUT("/users/{userKey}/credentials")
    public Status setCredentials(String userKey, Map newCredentials) {
        checkSelfOrAdmin(userKey);

        String passwordHash = (String) newCredentials.get("passwordHash");
        checkNotNull(passwordHash, "new credentials must have a passwordHash property");
        appUserRepository.setCredentials(userKey, passwordHash);

        return Status.of("updated");
    }


    private void checkUserRules(User user) {

    }

    public static void checkSelfOrAdmin(String userKey) {
        User user = AppModule.currentUser();
        if (!user.getPrincipalRoles().contains(ADMIN)
                && !user.getKey().equals(userKey)) {
            throw new WebException(HttpStatus.FORBIDDEN);
        }
    }
}