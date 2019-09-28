
function logOut()
{
    console.log(localStorage.getItem("RESPONSE_DATA_USER"));
    localStorage.removeItem("RESPONSE_DATA_USER");
    location.href = "index.html";
}