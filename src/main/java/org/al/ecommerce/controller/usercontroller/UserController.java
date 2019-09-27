package org.al.ecommerce.controller.usercontroller;


import com.google.gson.Gson;
import org.al.ecommerce.entity.User;
import org.al.ecommerce.utilities.Paths;
import org.al.ecommerce.utilities.RemoteService;

import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("user")
public class UserController {
    @POST
    @Path("userLogIn")
    @Produces(MediaType.APPLICATION_JSON)
    public String userLoginControl(@FormParam("EMAIL") String email, @FormParam("PASSWORD") String password)
    {
        Gson gson = new Gson();
        User user = new User();
        String responseData = null;

        user.setEmail(email);
        user.setPassword(password);

        responseData = RemoteService.call(Paths.ECOMMERCE_USER_LOGIN_CONTROL, gson.toJson(user));


        return responseData;

    }

    @POST
    @Path("userRegister")
    public String userRegister(@FormParam("REQUEST_DATA") String requestData)
    {
        Gson gson = new Gson();
        User user = gson.fromJson(requestData, User.class);
        String responseData = RemoteService.call(Paths.ECCOMERCE_USER_SIGNUP, requestData);

        return responseData;
    }
}
