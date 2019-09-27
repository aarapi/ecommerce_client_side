<html>
<body>
<script type="text/javascript">
    function signControl()
    {
        var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
        request.open('POST', 'ecomm/user/userRegister', true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.onload = function() {
            // Begin accessing JSON data here
            document.getElementById("response").innerHTML = this.responseText;
        }

// Send request
        var data = {
            email: "albi@gmail.com",
            password: "passs",
            role: 1,
            firstName: "Albi",
            lastName: "Arapi",
            adress: "Tirane",
            contactInfo: "0698563212",
            photo: "laki.png",
            activateCode: "asdsdX3wdA",
            resetCode: "asd3dasda",
            createdOn: "29-20-1213",
            status: 1
        };

        request.send("REQUEST_DATA="+JSON.stringify(data));
    }
</script>
<h2>Jersey RESTful Web Application!</h2>

<p>Visit <a href="http://jersey.java.net">Project Jersey website</a>
    <button onclick="signControl()">Sign In</button>
<p id="response"></p>

</body>
</html>
