var c4 = document.getElementById("container4");
var c5 = document.getElementById("container5");
var c6 = document.getElementById("container6");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var like1 = document.getElementById("like1");
var like2 = document.getElementById("like2");
var like3 = document.getElementById("like3");

flag = 1;
like1.onclick = function() {
    if(flag == 1){
        like1.style.color = "blue";
        num1.innerHTML = Number(num1.innerHTML) + 1;
        flag = 0;
    } else if(flag == "0") {
        like1.style.color = "white";
        num1.innerHTML = Number(num1.innerHTML) - 1;
        flag = 1;
    }
}

like2.onclick = function() {
    if(flag == 1){
        like2.style.color = "blue";
        num2.innerHTML = Number(num2.innerHTML) + 1;
        flag = 0;
    } else if(flag == "0") {
        like2.style.color = "white";
        num2.innerHTML = Number(num2.innerHTML) - 1;
        flag = 1;
    }
}

like3.onclick = function() {
    if(flag == 1){
        like3.style.color = "blue";
        num3.innerHTML = Number(num3.innerHTML) + 1;
        flag = 0;
    } else if(flag == "0") {
        like3.style.color = "white";
        num3.innerHTML = Number(num3.innerHTML) - 1;
        flag = 1;
    }
}

function exit4() {
    c4.style.display = "none";
}
function exit5() {
    c5.style.display = "none";
}
function exit6() {
    c6.style.display = "none";
}
function showPost() {
    c4.style.display = "flex";
    c5.style.display = "flex";
    c6.style.display = "flex";
}
function profile() {
    window.location.href="profile.html";
}
