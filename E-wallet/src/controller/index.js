const login =document.getElementById("Loginbtn");

login.addEventListener("click",(e)=>
{
    console.log(e.target)
    window.location.assign("/E-wallet/src/view/login.html");
})