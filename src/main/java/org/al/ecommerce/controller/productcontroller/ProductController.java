package org.al.ecommerce.controller.productcontroller;

import com.google.gson.Gson;
import org.al.ecommerce.entity.ProductList;
import org.al.ecommerce.utilities.Paths;
import org.al.ecommerce.utilities.RemoteService;

import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("product")
public class ProductController {

    @POST
    @Path("productList")
    @Produces(MediaType.APPLICATION_JSON)
    public String getProductList(@FormParam("PAGE_NUMBER") int pageNumber)
    {
        Gson gson = new Gson();
        String responseData = RemoteService.call(Paths.ECOMMERCE_PRODUCTS, gson.toJson(pageNumber, Integer.class));

        return responseData;
    }

}
