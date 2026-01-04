const payer_action=document.querySelector(".actions-holder-payer");
const payerbtn=document.getElementById("payer");
const svg_cancel=document.getElementById("cancelsvg-on-payer");
let is_payertab_open=false;
let istransction_running=false;

payerbtn.addEventListener("click",()=>
{
   if(!is_payertab_open && !istransction_running)
   {
       payer_action.classList.add("active");
        is_payertab_open=true;
        return;
   }
   closetab();

});

function closetab()
{
    if(!istransction_running)
    {
        payer_action.classList.remove("active");
        is_payertab_open=false; 

    }
}
svg_cancel.addEventListener("click",closetab);
document.addEventListener("click",
    (e)=>
    {
        if(!e.target.closest("#payer-pop-up, #payer, #cancelsvg-on-payer") && is_payertab_open)
        {
            console.log("svg")
            closetab();
        }
    }
)