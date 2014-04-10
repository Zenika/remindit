package it.remind.rest;

import it.remind.Roles;
import it.remind.domain.Message;
import org.joda.time.DateTime;
import restx.annotations.GET;
import restx.annotations.RestxResource;
import restx.factory.Component;
import restx.security.RolesAllowed;

@Component @RestxResource
public class HelloResource {
    @GET("/message")
    @RolesAllowed(Roles.HELLO_ROLE)
    public Message sayHello(String who) {
        return new Message().setMessage(String.format(
                "hello %s, it's %s",
                who, DateTime.now().toString("HH:mm:ss")));
    }
}
