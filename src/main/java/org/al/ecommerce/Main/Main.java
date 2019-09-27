package org.al.ecommerce.Main;



import com.google.gson.Gson;
import org.al.ecommerce.entity.User;
import org.al.ecommerce.utilities.Paths;
import org.al.ecommerce.utilities.RemoteService;

public class Main {

    public static void main(String[] args)
    {
        User user = new User();
        user.setActivateCode("asdasX342Sda");
        user.setAdress("Tirane");
        user.setContactInfo("0684253235");
        user.setCreatedOn("25-04-2019");
        user.setFirstName("Albi");
        user.setLastName("Arapi");
        user.setPhoto("laki.png");
        user.setId(1);
        user.setRole(1);
        user.setResetCode("true");
        user.setEmail("admin@admin.com");
        user.setPassword("password");
        Gson gson = new Gson();

        RemoteService.call(Paths.ECCOMERCE_USER_SIGNUP, gson.toJson(user));
    }
}
