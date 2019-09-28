
var responseData = localStorage.getItem("RESPONSE_DATA_USER");
console.log(responseData);

var accountName = document.getElementById("accountName");
var userDetails  = responseData.split("[").join("");
userDetails  = userDetails.split("]").join("");
userDetails =JSON.parse(userDetails);
accountName.innerHTML = "<i class=\"fa fa-user-o\"></i>" +userDetails.firstName + " "+ userDetails.lastName ;
