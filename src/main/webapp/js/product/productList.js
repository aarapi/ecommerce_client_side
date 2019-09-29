
function productList(i){
    var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
    request.open('POST', 'ecomm/product/productList', true);

    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.onload = function() {
        // Begin accessing JSON data here
        var response = JSON.parse(this.responseText);
        if(response.responseCode == "0")
        {
           }else{

            //console.log(response.responseData);
            var products = JSON.parse(response.responseData);
            console.log(response.responseData);
            var rowsDatabase = response.responseCode;
            var row = document.getElementById("productsRow");
            row.innerHTML = "";
            for( var i=0; i<products.length; i++){

                var div = document.createElement("span");
                div.innerHTML = "<div class=\"col-md-4 col-xs-6\">\n" +
                    "\t\t\t\t\t\t\t\t<div class=\"product\">\n" +
                    "\t\t\t\t\t\t\t\t\t<div class=\"product-img\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t<a onclick=\"productDetails("+i+")\"> <img width=\"100%\" height=\"230px\" src=\"img/productsImages/"+products[i].photo+"\" alt=\"\">\n" +
                    "\t\t\t\t\t\t\t\t\t</div><input type=\"hidden\" id=\"productId"+i +"\" value="+products[i].id+">\n" +
                    "\t\t\t\t\t\t\t\t\t<div class=\"product-body\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t<h3 class=\"product-name\"><a href=\"#\">"+ products[i].productName.substring(0, 25)+"</a></h3>\n" +
                    "\t\t\t\t\t\t\t\t\t\t<h4 class=\"product-price\">"+products[i].price +" ALL <del class=\"product-old-price\">$990.00</del></h4>\n" +
                    "\t\t\t\t\t\t\t\t\t\t<div class=\"product-rating\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n" +
                    "\t\t\t\t\t\t\t\t\t\t</div></a>\n" +
                    "\t\t\t\t\t\t\t\t\t\t<div class=\"product-btns\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t<button class=\"add-to-wishlist\"><i class=\"fa fa-heart-o\"></i><span class=\"tooltipp\">add to wishlist</span></button>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t<button class=\"add-to-compare\"><i class=\"fa fa-exchange\"></i><span class=\"tooltipp\">add to compare</span></button>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t<button class=\"quick-view\"><i class=\"fa fa-eye\"></i><span class=\"tooltipp\">quick view</span></button>\n" +
                    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
                    "\t\t\t\t\t\t\t\t\t</div>\n" +
                    "\t\t\t\t\t\t\t\t\t<div class=\"add-to-cart\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t<button class=\"add-to-cart-btn\"><i class=\"fa fa-shopping-cart\"></i> add to cart</button>\n" +
                    "\t\t\t\t\t\t\t\t\t</div>\n" +
                    "\t\t\t\t\t\t\t\t</div>\n" +
                    "\t\t\t\t\t\t\t</div>"


                row.appendChild(div);
            }
            var ul = document.getElementById("pageNumber");
            ul.innerHTML = "";
            var pageNumber = rowsDatabase/12;
            if(pageNumber - parseInt(pageNumber) > 0)
            {
                pageNumber +=1;
            }

            for (var i=1; i<=pageNumber;i++)
            {
                var li = document.createElement("span");
                li.innerHTML = "<li><a onclick=\"return productList("+(i-1)+");\">"+i+"</a></li>\n";
                ul.appendChild(li);
            }
            var li = document.createElement("span");
            li.innerHTML = " <li><a href=\"#\"><i class=\"fa fa-angle-right\"></i></a></li>";
            ul.appendChild(li);



        }

    }

    request.send("PAGE_NUMBER="+i);
}







function productListFiltered(){
    var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
    request.open('POST', 'ecomm/product/productList', true);

    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.onload = function() {
        // Begin accessing JSON data here
        var response = JSON.parse(this.responseText);
        if(response.responseCode == "0")
        {
        }else{

            //console.log(response.responseData);
            var products = JSON.parse(response.responseData);
            console.log(response.responseData);

            var row = document.getElementById("productsRow");
            row.innerHTML = "";
            for( var i=0; i<products.length; i++){

                var div = document.createElement("span");
                div.innerHTML = "<div class=\"col-md-4 col-xs-6\">\n" +
                    "\t\t\t\t\t\t\t\t<div class=\"product\">\n" +
                    "\t\t\t\t\t\t\t\t\t<div class=\"product-img\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t<a onclick=\"productDetails("+i+")\"> <img width=\"100%\" height=\"230px\" src=\"img/productsImages/"+products[i].photo+"\" alt=\"\">\n" +
                    "\t\t\t\t\t\t\t\t\t</div><input type=\"hidden\" id=\"productId"+i +"\" value="+products[i].id+">\n" +
                    "\t\t\t\t\t\t\t\t\t<div class=\"product-body\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t<h3 class=\"product-name\"><a href=\"#\">"+ products[i].productName.substring(0, 25)+"</a></h3>\n" +
                    "\t\t\t\t\t\t\t\t\t\t<h4 class=\"product-price\">"+products[i].price +" ALL <del class=\"product-old-price\">$990.00</del></h4>\n" +
                    "\t\t\t\t\t\t\t\t\t\t<div class=\"product-rating\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n" +
                    "\t\t\t\t\t\t\t\t\t\t</div></a>\n" +
                    "\t\t\t\t\t\t\t\t\t\t<div class=\"product-btns\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t<button class=\"add-to-wishlist\"><i class=\"fa fa-heart-o\"></i><span class=\"tooltipp\">add to wishlist</span></button>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t<button class=\"add-to-compare\"><i class=\"fa fa-exchange\"></i><span class=\"tooltipp\">add to compare</span></button>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t<button class=\"quick-view\"><i class=\"fa fa-eye\"></i><span class=\"tooltipp\">quick view</span></button>\n" +
                    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
                    "\t\t\t\t\t\t\t\t\t</div>\n" +
                    "\t\t\t\t\t\t\t\t\t<div class=\"add-to-cart\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t<button class=\"add-to-cart-btn\"><i class=\"fa fa-shopping-cart\"></i> add to cart</button>\n" +
                    "\t\t\t\t\t\t\t\t\t</div>\n" +
                    "\t\t\t\t\t\t\t\t</div>\n" +
                    "\t\t\t\t\t\t\t</div>"


                row.appendChild(div);
            }


        }

    }


    request.send("PAGE_NUMBER="+2);
}



