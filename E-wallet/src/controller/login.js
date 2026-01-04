const email_input=document.getElementById("mail");
const pass_input=document.getElementById("password");
const para_result=document.getElementById("result");
const email_error=document.getElementById("error_mail");
const pass_error=document.getElementById("password_error");
const form=document.getElementsByClassName("login-form")[0];
import { finduser } from "../model/data.js";
form.addEventListener("submit",
    (e)=>{

        
      
        
        let email=email_input.value.trim();
        let password=pass_input.value.trim();
        const VEoutput=verifyEmail(email);
        const VPoutput=verifPassword(password);
        email_error.innerText=VEoutput;
        pass_error.innerText=VPoutput;
        if(VEoutput==="" && VPoutput==="")
        {
            para_result.innerText="Verifiaction...";
            para_result.style.color="green";
            setTimeout( ()=>
        {
            verifyuser(email,password);
        }
        ,1000)
        }
        e.preventDefault();
       
    }
)

 email_input.addEventListener("input",()=>{
    if( email_input.classList.contains("ipt"))
    {
        email_input.classList.remove("ipt");
        email_error.innerText="";
    }
    para_result.innerText="";
    
})
pass_input.addEventListener("input",()=>
    {
        if(pass_input.classList.contains("ipt"))
        {
            pass_input.classList.remove("ipt");
            pass_error.innerText="";
        }
        para_result.innerText="";
    });


function verifyuser(email,password)
{
    let activeuser=finduser(email,password);
    if(activeuser)
    {
        sessionStorage.setItem("active_user",JSON.stringify(activeuser));
        window.location.href="/E-wallet/src/view/dashboard.html";
    }
    else{
        para_result.innerText="Incorrect email or password!";
        para_result.style.color="red";
    }
}

function verifyEmail(email)
{
     if(email==="")
    {
        email_input.classList.add("ipt"); 
        return "Enter your mail address";
    }
    return "";

}
function verifPassword(password)
{
    if(password==="")
       {
           pass_input.classList.add("ipt");
          return "Enter your password";
       }
       if(password.length < 4)
       {
        pass_input.classList.add("ipt");
        return "password must contain minimum 4 chrarcters";

       }
       return "";
}
console.log("hello");