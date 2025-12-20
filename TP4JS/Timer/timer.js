const inputtimer=document.getElementById("time-counter");
const btnstrt=document.getElementById("strtbtn");
const spanval= document.getElementById("counter");
const btnpause=document.getElementById("psebtn");
const btnreset=document.getElementById("rstbtn");
const parag=document.querySelector(".para");
let iptvalue;
let timer;
let isrunning=false;
let current=0;

btnstrt.addEventListener("click", count);
btnpause.addEventListener("click",pausecount);
btnreset.addEventListener("click",resetcounter);
let timei=0;


function count()
{

    if(inputtimer.value.trim()!=="")
    {
        iptvalue=parseInt(inputtimer.value);
    }
    if(iptvalue<=0 || isNaN(iptvalue)) return;
    inputtimer.value='';
   if(!isrunning)
   {
    parag.style.display="none";
    timer= setInterval(ftimer,1000);
    isrunning=true;
    
   }
 function ftimer()
{     
    if(iptvalue===0){
        resetcounter();
         parag.style.display="block";
        return;
    } 
    let gethours= Math.floor(iptvalue/(60*60))%24;
    let getminute= Math.floor(iptvalue/60)%60;
    let getseconds=Math.floor(iptvalue)%60;
    iptvalue--;
    gethours=String(gethours).padStart(2,"0");
    getminute=String(getminute).padStart(2,"0");
    getseconds=String(getseconds).padStart(2,"0");
    spanval.textContent=`${gethours}:${getminute}:${getseconds}`;
    console.log(getseconds);

}
}


function pausecount()
{
    clearInterval(timer);
    isrunning=false;

}
function resetcounter()
{
    clearInterval(timer);
    isrunning=false;
    iptvalue=0;
    spanval.textContent="00:00:00";
    parag.style.display="none";
}





