const btnstart=document.getElementsByClassName("btnstart")[0];
const btnstop=document.getElementsByClassName("btnstop")[0];
const redimg=document.getElementById("red");
const yelimg=document.getElementById("yellow");
const grimh=document.getElementById("green");

btnstart.addEventListener("click",starttraffic);
btnstop.addEventListener("click",stoptraffic);
let a;
let isrunning=false;
let on =0;



function starttraffic()
{
    if(isrunning) return;
    redimg.src="redlight.png";
    yelimg.src="yellowlight.png";
    grimh.src="greenlight.png";
    isrunning=true;
    a = setInterval(changelight, 1000);
    
    
    
}

function changelight()
{
    if(on===0) changesrc("red");
    if(on===30) changesrc("yellow");
    if(on===60) changesrc("green");
    if(on>=90) on=-1;
    on++;
}
function changesrc(color)
{
    redimg.src=(color==="red") ? "redlight.png":"emptylight.png";
    yelimg.src=(color==="yellow") ? "yellowlight.png" : "emptylight.png";
    grimh.src=(color==="green") ? "greenlight.png" : "emptylight.png";
}
function stoptraffic()
{
    isrunning=false;
    clearInterval(a);
    on=0;
    redimg.src="emptylight.png";
    yelimg.src="emptylight.png";
    grimh.src="emptylight.png";
    
}