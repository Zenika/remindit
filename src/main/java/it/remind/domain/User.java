package it.remind.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.google.common.collect.ImmutableSet;
import org.jongo.marshall.jackson.oid.Id;
import org.jongo.marshall.jackson.oid.ObjectId;
import restx.exceptions.ErrorCode;
import restx.exceptions.ErrorField;
import restx.security.RestxPrincipal;

import java.util.Collection;

/**
 */
public class User implements RestxPrincipal {
    @Id @ObjectId
    private String key;

    private String name;
    private String email;
    private Collection<String> roles;


    public String getKey() {
        return key;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public Collection<String> getRoles() {
        return roles;
    }


    @Override @JsonIgnore
    public ImmutableSet<String> getPrincipalRoles() {
        return ImmutableSet.copyOf(roles);
    }

    public User setKey(final String key) {
        this.key = key;
        return this;
    }

    public User setName(final String name) {
        this.name = name;
        return this;
    }

    public User setEmail(final String email) {
        this.email = email;
        return this;
    }

    public User setRoles(final Collection<String> roles) {
        this.roles = roles;
        return this;
    }


    @Override
    public String toString() {
        return "User{" +
                "key='" + key + '\'' +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", roles=" + roles +
                '}';
    }

    public static class Rules {
        @ErrorCode(code = "USER-001", description = "must have a company")
        public static enum CompanyRef {
            @ErrorField("user key") KEY
        }
        @ErrorCode(code = "USER-002", description = "must have valid company - provided company key not found")
        public static enum ValidCompanyRef {
            @ErrorField("user key") KEY,
            @ErrorField("company ref") COMPANY_REF
        }
    }
}