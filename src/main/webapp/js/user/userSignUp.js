function userSignUp(){
    var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
    request.open('POST', 'ecomm/user/userRegister', true);
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirmpass");
    var firstNameInput = document.getElementById("name");
    var lastNameInput = document.getElementById("surname");
    var adressInput = document.getElementById("adress");
    var postalCodeInput = document.getElementById("postalcode");
    var email = emailInput.value;
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    var adress = adressInput.value;
    var postalCode = postalCodeInput.value;
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.onload = function() {
        // Begin accessing JSON data here
        var response = JSON.parse(this.responseText);
        if(response.responseCode == "0")
        {
            emailInput.value = "";
            passwordInput.value = "";
            confirmPasswordInput.value = "";
            emailInput.onfocus;

            document.getElementById("response").innerHTML = "<i  class='fas fa-info'></i>" + "   "+ response.responseMessage;
        }else{
            localStorage.setItem("RESPONSE_DATA_USER", response.responseData);
            location.href = "signIn.html";


        }

    }
 var date = new Date();
// Send request
    var data = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        adress: adress,
        postalCode: postalCode,
        createdOn: date.getDay() +"-"+ date.getMonth()+ "-"+ date.getFullYear()

    };

    if(password == confirmPassword) {
        request.send("REQUEST_DATA="+JSON.stringify(data));
    }else{

        passwordInput.value = "";
        confirmPasswordInput.value = "";
        passwordInput.focus();
        document.getElementById("response_data").innerHTML =  "<i  class='fas fa-info'></i> Fjalekalimet nuk perputhen!"
    }
}