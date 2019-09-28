function signInControl(){
    var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
    request.open('POST', 'ecomm/user/userLogIn', true);
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    var email = emailInput.value;
    var password = passwordInput.value;
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.onload = function() {
        // Begin accessing JSON data here
        var response = JSON.parse(this.responseText);
        if(response.responseCode == "0")
        {
            emailInput.value = "";
            emailInput.onfocus;
            passwordInput.value = "";
            document.getElementById("response").innerHTML = "<i  class='fas fa-info'></i>" + "   "+ response.responseMessage;
        }else{
            localStorage.setItem("RESPONSE_DATA_USER", response.responseData);

            location.href = "store.html";
        }

    }

// Send request
    var data = {
        email: "albi@gmail.com",
        password: "passs"
    };

    request.send("EMAIL="+ email +"&PASSWORD="+password);
}