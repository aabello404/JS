const recherger_action=document.querySelector(".actions-holder-recherger");
const rechergerbtn=document.getElementById("recharger");
const svg_cancel=document.getElementById("cancelsvg-on-recherger");
const btnRecharge=document.getElementById("make-recherge");
const svg_load=document.getElementById("load-recharger");
let is_rechergertab_open=false;
const Linked_account =document.getElementById("savedWallets");
const error_linked=document.getElementById("method-error-recherger");
const amount_error=document.getElementById("amt-error-recherger");
const amt_input=document.getElementById("amount-recherger");
const rechergedone_div=document.getElementById("recherger-done");
import { rechargeSolde } from "../services/rechercgerservise.js";
import {filltable,dispalyBalance } from "../controller/dasboard.js";
rechergerbtn.addEventListener("click",()=>
{
   if(!is_rechergertab_open && !btnRecharge.disabled)
   {
        recherger_action.classList.add("active");
        is_rechergertab_open=true;
        return;
   }
   closetab();

});

function closetab()
{
    if(!btnRecharge.disabled)
    {
        recherger_action.classList.remove("active");
        resetInputOnCancel();
        is_rechergertab_open=false; 

    }
}
svg_cancel.addEventListener("click",closetab);
document.addEventListener("click",
    (e)=>
    {
        if(!e.target.closest("#Recherger-pop-up, #recharger, #cancelsvg-on-recherger") && is_rechergertab_open)
        {
            closetab();
        }
    }
)

btnRecharge.addEventListener("click",async ()=>
{
   
    const activeuser=JSON.parse(sessionStorage.getItem("active_user"));
    const PaymentSource=Linked_account.value.trim();
    const Amount_to_TOP=parseFloat(amt_input.value.trim());
    const PoutPut=verifyPaymentSourceInput(PaymentSource);
    const Aoutput=verifyAmountInput(Amount_to_TOP);
    error_linked.innerText=PoutPut;
    amount_error.innerText=Aoutput;
    if(Aoutput || PoutPut) return;
    trigger_loading();
    btnRecharge.disabled=true;
    try
    {

        const result=await rechargeSolde(activeuser,Amount_to_TOP,PaymentSource); 
        displayMessage(result.message,"success");
        dispalyBalance(activeuser);
        filltable(result.transaction);
        cancel_loading()
    }
    catch(error)
    {
        if(error==="Card/payment unavailable")
            displayMessage(error,"error");
        if(error==="Insufficient balance")
            displayMessage(error,"error");
        if(error==="Invalid amount")
            AmountInputerror(error);
        if(error==="Un-expected error has occured, Try again")
            displayMessage(error,"error");
        cancel_loading();
    }
    finally
    {
        btnRecharge.disabled=false;
    }
    
    
})


function verifyPaymentSourceInput(input)
{
    if(input==="none")
    {
        Linked_account.classList.add("incorrect");
        return "Please select a valid funding source";
    }
    return "";
    
}
function verifyAmountInput(input)
{
    if(isNaN(input) || input<0)
    {
        amt_input.classList.add("incorrect");
        return "Enter a valid amount";
    }
    return "";

}
Linked_account.addEventListener("input",()=>
{
    if(Linked_account.classList.contains("incorrect"))
    {
        Linked_account.classList.remove("incorrect");
        error_linked.innerText="";

    }
})

amt_input.addEventListener("input",()=>
{
    if(amt_input.classList.contains("incorrect"))
    {
        amt_input.classList.remove("incorrect");
        amount_error.innerText="";
    }
})

function trigger_loading()
{
    svg_load.classList.add("active");
    btnRecharge.disabled=true;
}
function cancel_loading()
{
    if(svg_load.classList.contains("active"))
    svg_load.classList.remove("active");
    btnRecharge.disabled=false;
}

function displayMessage(output,messageType)
{
    rechergedone_div.innerText=output;
    let classtoadd=messageType==="error"? "error":"active";
    rechergedone_div.classList.add(classtoadd);
    setTimeout(() => {
       rechergedone_div.classList.remove(classtoadd);
        
    }, 5000);
    amt_input.value="";
    Linked_account.value="none";

}
function AmountInputerror(error)
{
    amt_input.classList.add("incorrect");
    amount_error.innerText=error;
}

function resetInputOnCancel()
{
    if(Linked_account.classList.contains("incorrect"))
    {
        Linked_account.classList.remove("incorrect");
    }
    error_linked.innerText="";
    if(amt_input.classList.contains("incorrect"))
    {
        amt_input.classList.remove("incorrect");
    }
    amount_error.innerText="";
}

