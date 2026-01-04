

import { dispalyBalance, filltable } from "./dasboard.js";
import { verifyconnection } from "./securesite.js";
import { make_transfer } from "../services/transferservice.js";
const pop_up_div=document.querySelector(".actions-holder");
const trnsferbtn=document.getElementById("transferer");
const svg_canc=document.getElementById("cancelsvg");
const loadinggif=document.getElementById("loading");
const make_transferbtn=document.getElementById("make-transfer");
const benfiinput=document.getElementById("Beneficiary");
const amtinput=document.getElementById("amount");
const ben_error=document.getElementById("ben-error");
const amt_error=document.getElementById("amt-error");
const divsent=document.querySelector(".actiondone");
const divload=document.querySelector(".load-trasferdiv");
let istransfertabopen=false;

trnsferbtn.addEventListener("click",()=>
{
    // transfer btn on dashbaord to unhide the transfer panel 
  
    //verifyconnection(activeuser); //verify if user is connected

        
    if(!istransfertabopen && !make_transferbtn.disabled)
    {
        pop_up_div.classList.add("active");
        istransfertabopen=true;
        return;
    }
    closetab();
    

})
svg_canc.addEventListener("click",closetab);
document.addEventListener("click",
    (event)=>
    {
        if(!event.target.closest("#transferer , .action-pop-up") && istransfertabopen)
        {
            closetab();
        }
    }
);
make_transferbtn.addEventListener("click",
    async ()=>
    {
        let activeuser=JSON.parse(sessionStorage.getItem("active_user"));
        let beneficiary=benfiinput.value.trim();
        let amount=parseFloat(amtinput.value.trim());
        if(beneficiary==="")
        {
            benfiinput.classList.add("incorrect");
            ben_error.innerText="Missed a spot, fill in the beneficiary";
        }
        if(isNaN(amount) || amount <=0)
        {
            amtinput.classList.add("incorrect");
            amtinput.value="";
            amt_error.innerText="Missed a spot, fill in the Amount";
        }
        if(isNaN(amount) || amount <=0 || beneficiary==="") return;
        console.log("hello my nigga");
        trigger_loading();
        make_transferbtn.disabled=true;
        try
        {
           const result= await make_transfer(activeuser,beneficiary,amount);
           filltable(result.transaction);
           informStatus(result.message,"success");
           dispalyBalance(activeuser);
           cancel_loading();
        }
        catch(error)
        {
            if(error==="Invalid ID/DNE")
                benificiarynotFound(error);
            if(error==="Insufficient balance")
                informStatus(error,"error");
            if(error==="Unexpected error has occurred")
                informStatus(error,"error");
            cancel_loading();
        }
        finally
        {
            make_transferbtn.disabled=false;
        }
    }
)





function closetab()
{
    if(!make_transferbtn.disabled && istransfertabopen)
    {
        pop_up_div.classList.remove("active");
        emptyinputs_oncancel();
        istransfertabopen=false;
    }
}





function trigger_loading()
{
    loadinggif.classList.add("active");
    benfiinput.style.pointerEvents="none";
    amtinput.style.pointerEvents="none";

}

function cancel_loading()
{
    loadinggif.classList.remove("active");
    benfiinput.style.pointerEvents="all";
    amtinput.style.pointerEvents="all";

}

function informStatus(data, type)
{
    divsent.innerText=data;
    const classtoadd=type==="success"?"active":"error";
    divsent.classList.add(classtoadd);
    setTimeout(()=>
    {
        divsent.classList.remove(classtoadd);
    },5000);
    emptyinputs();

}

function emptyinputs()
{
    benfiinput.value="";
    amtinput.value="";
}



benfiinput.addEventListener("input"
    ,()=>
    {
        if(benfiinput.classList.contains("incorrect"))
        {
            benfiinput.classList.remove("incorrect");
        }
        ben_error.innerText="";
    }
)
amtinput.addEventListener("input", ()=>
{
    if(amtinput.classList.contains("incorrect"))
    {
        amtinput.classList.remove("incorrect");
    }
    amt_error.innerText="";
})


function emptyinputs_oncancel()
{
    benfiinput.value="";
    amtinput.value="";
     if(benfiinput.classList.contains("incorrect"))
        {
            benfiinput.classList.remove("incorrect");
        }
        ben_error.innerText="";
    
    if(amtinput.classList.contains("incorrect"))
    {
        amtinput.classList.remove("incorrect");
    }
    amt_error.innerText="";
}

function benificiarynotFound(error)
{
    benfiinput.classList.add("incorrect");
    ben_error.innerText=error;
}