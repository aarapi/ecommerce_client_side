package org.al.ecommerce.controller.productcontroller;


import com.google.gson.Gson;
import org.al.ecommerce.utilities.Paths;
import org.al.ecommerce.utilities.RemoteService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("product")
public class ProductPageController {


    @GET
    @Path("getProductDetails")
    @Produces({ MediaType.APPLICATION_JSON, MediaType.TEXT_PLAIN,
            MediaType.TEXT_HTML, MediaType.TEXT_XML })
    @Consumes({ MediaType.TEXT_PLAIN, MediaType.TEXT_PLAIN,
            MediaType.TEXT_PLAIN })
    public String getProductDetails(@QueryParam("PRODUCT_ID") String id)
    {
        Gson gson = new Gson();
        String responseData = RemoteService.call(Paths.ECOMMERCE_PRODUCT_DETAILS, gson.toJson(id));

        return responseData;
    }
}
