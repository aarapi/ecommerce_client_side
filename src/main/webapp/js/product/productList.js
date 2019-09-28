


function productList(){
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
            localStorage.setItem("RESPONSE_DATA_PRODUCTS", response.responseData);

            location.href = "store.html";
        }

    }

    request.send("OFFSET="+ 10+"&PAGE_NUMBER="+2);
}
