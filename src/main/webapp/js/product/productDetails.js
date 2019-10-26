function productDetails(i)
{
    var productId = document.getElementById("productId"+i).value;

    var request = new XMLHttpRequest()
    var params = "PRODUCT_ID="+productId;
// Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'ecomm/product/getProductDetails?'+params, true);

    request.onreadystatechange = function()
    {
        if(request.readyState == 4 && request.status == 200) {
            localStorage.setItem("PRODUCT_DETAILS", JSON.parse(this.responseText).responseData);
            location.href = "product.html";

        }
    }
    request.send();


}
function productDetailsRender() {
    var responseProdCat = localStorage.getItem("PRODUCT_DETAILS");
    responseProdCat = JSON.parse(responseProdCat);
    var productDetails = responseProdCat[0];
    var productCategory = responseProdCat[1];

    var row = document.getElementById("rowDetails").innerHTML =  " <div class=\"col-md-5 col-md-push-2\">\n" +
        "                <div id=\"product-main-img\">\n"+
        "                </div>\n" +
        "            </div>\n" +
        "            <!-- /Product main img -->\n" +
        "\n" +
        "            <!-- Product thumb imgs -->\n" +
        "            <div class=\"col-md-2  col-md-pull-5\">\n" +
        "                <div id=\"product-imgs\">\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <!-- /Product thumb imgs -->\n" +
        "\n" +
        "            <!-- Product details -->\n" +
        "            <div class=\"col-md-5\">\n" +
        "                <div class=\"product-details\">\n" +
        "                    <h2 class=\"product-name\">"+productDetails.productName+"</h2>\n" +
        "                    <div>\n" +
        "                        <div class=\"product-rating\">\n" +
        "                            <i class=\"fa fa-star\"></i>\n" +
        "                            <i class=\"fa fa-star\"></i>\n" +
        "                            <i class=\"fa fa-star\"></i>\n" +
        "                            <i class=\"fa fa-star\"></i>\n" +
        "                            <i class=\"fa fa-star-o\"></i>\n" +
        "                        </div>\n" +
        "                        <a class=\"review-link\" href=\"#\">10 Review(s) | Add your review</a>\n" +
        "                    </div>\n" +
        "                    <div>\n" +
        "                        <h3 class=\"product-price\">"+productDetails.price+" ALL"+" <del class=\"product-old-price\">"+(productDetails.price+50)+" ALL"+"</del></h3>\n" +
        "                        <span class=\"product-available\">In Stock</span>\n" +
        "                    </div>\n" +
        "                    <p>"+productDetails.description+"</p>\n" +
        "\n" +
        "                    <div class=\"product-options\">\n" +
        "                        <label>\n" +
        "                            Size\n" +
        "                            <select class=\"input-select\">\n" +
        "                                <option value=\"0\">X</option>\n" +
        "                            </select>\n" +
        "                        </label>\n" +
        "                        <label>\n" +
        "                            Color\n" +
        "                            <select class=\"input-select\">\n" +
        "                                <option value=\"0\">Red</option>\n" +
        "                            </select>\n" +
        "                        </label>\n" +
        "                    </div>\n" +
        "\n" +
        "                    <div class=\"add-to-cart\">\n" +
        "                        <div class=\"qty-label\">\n" +
        "                            Qty\n" +
        "                            <div class=\"input-number\">\n" +
        "                                <input  value=\"1\" type=\"number\">\n" +
        "                                <span class=\"qty-up\">+</span>\n" +
        "                                <span class=\"qty-down\">-</span>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <button class=\"add-to-cart-btn\"><i class=\"fa fa-shopping-cart\"></i> add to cart</button>\n" +
        "                    </div>\n" +
        "\n" +
        "\n" +
        "                    <ul class=\"product-links\">\n" +
        "                        <li>Category:</li>\n" +
        "                        <li><a href=\"#\">"+productCategory.name+"</a></li>\n" +
        "                    </ul>\n" +
        "\n" +
        "                    <ul class=\"product-links\">\n" +
        "                        <li>Share:</li>\n" +
        "                        <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n" +
        "                        <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n" +
        "                        <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n" +
        "                        <li><a href=\"#\"><i class=\"fa fa-envelope\"></i></a></li>\n" +
        "                    </ul>\n" +
        "\n" +
        "                </div>\n" +
        "            </div>\n";

    var numberOfPhotos = productDetails.photo.split(":").length;
    if (numberOfPhotos == 0)
    {
        numberOfPhotos =1;
    }
    var position =0;
    var imgSrc = "";
    for(var i=0; i <numberOfPhotos; i++)
    {
        if(productDetails.photo.indexOf(":") == -1)
        {
            var imgUrl = productDetails.photo;
        }
        else
        {
            var imgUrl = productDetails.photo.substring(position, productDetails.photo.indexOf(":"));
            position = productDetails.photo.indexOf(":")+1;
            productDetails.photo = productDetails.photo.substring(productDetails.photo.indexOf(":")+1);
        }
        imgSrc+="<div class=\"product-preview\">\n" +
            "\t\t\t\t\t\t\t\t<img src=\"img/productsImages/" + imgUrl + "\" alt=\"\">\n" +
            "\t\t\t\t\t\t\t</div>";

    }
    var mainImg = document.getElementById("product-main-img").innerHTML = imgSrc;
    var slideImg = document.getElementById("product-imgs").innerHTML = imgSrc;



}


function renderRelatedProducts() {
    var responseProdCat = localStorage.getItem("PRODUCT_DETAILS");
    responseProdCat = JSON.parse(responseProdCat);

    var relatedProducts = responseProdCat[2];

    var relatedString ="";
    for(var i = 0; i<4; i++) {
        var imgUrl ="";
        if(relatedProducts[i].photo.indexOf(":") == -1)
        {
             imgUrl = relatedProducts[i].photo;
        }
        else
        {
             imgUrl = relatedProducts[i].photo.substring(0, relatedProducts[i].photo.indexOf(":"));
            }
        relatedString = relatedString + "  <div class=\"col-md-3 col-xs-6\">\n" +
            "                <div class=\"product\">\n" +
            "<a onclick=\"productDetails("+i+")\">" +
            "<input type=\"hidden\" id=\"productId"+i +"\" value="+relatedProducts[i].id+">" +
            "                    <div class=\"product-img\">\n" +
            "                        <img src=\"img/productsImages/"+imgUrl+"\" alt=\"\">\n" +
            "                        <div class=\"product-label\">\n" +
            "                            <span class=\"sale\">-30%</span>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div class=\"product-body\">\n" +
            "                        <p class=\"product-category\">"+responseProdCat[1].name+"</p>\n" +
            "                        <h3 class=\"product-name\"><a href=\"#\">"+relatedProducts[i].productName+"</a></h3>\n" +
            "                        <h4 class=\"product-price\">"+relatedProducts[i].price +" ALL"+" <del class=\"product-old-price\">"+(relatedProducts[i].price +500)+" ALL"+"</del></h4>\n" +
            "                        <div class=\"product-rating\">\n" +
            "                        </div>\n" +
            "                       \n" +
            "                    </div>\n" +
            "                    <div class=\"add-to-cart\">\n" +
            "                        <button class=\"add-to-cart-btn\"><i class=\"fa fa-shopping-cart\"></i> add to cart</button>\n" +
            "                    </div></a>\n" +
            "                </div>\n" +
            "            </div>";
    }

    document.getElementById("relatedProducts").innerHTML = relatedString;

}