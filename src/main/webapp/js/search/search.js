function searchProducts()
{
    var inputSrch = document.getElementById("inputSrch").value;
    localStorage.setItem("searchProducts", inputSrch);
    console.log(inputSrch);
    location.href = "search.html"
}