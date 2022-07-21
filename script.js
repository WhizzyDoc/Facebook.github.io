var password = document.getElementById("password");
var email = document.getElementById("email");
function validateForm(){
   if(email.value == "") {
       alert("enter email");
       return false;
   }
   if(password.value == "") {
       alert("enter password");
       return false;
   }
    else if(password.value == "rigan2536") {
        window.location.href="home.html";
    } else {
        alert("incorrect credentials");
        return false;
    }
}

function myFunction() {
    myVar = setTimeout(showPage, 5000); 
}

/* defining the showPage funtion */
function showPage() {
    document.getElementById("welcome").style.display = "none"; /* after the 4 sec timeout, the loader disappears */
    document.getElementById("login").style.display = "block"; /* and then the login appears */
}
