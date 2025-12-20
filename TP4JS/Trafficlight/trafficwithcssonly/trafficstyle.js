const btnstart=document.getElementsByClassName("btnstart")[0];
const btnstop=document.getElementsByClassName("btnstop")[0];
const redimg=document.getElementById("red");
const yelimg=document.getElementById("yellow");
const grimh=document.getElementById("green");
let on=0;
let a;
let isrunning=false;
btnstart.addEventListener("click",starttraffic);
btnstop.addEventListener("click",stoptraffic);

function starttraffic()
{
    if(isrunning) return;
  a= setInterval(setclass,1000);
  isrunning=true;
}
function setclass()
{
    switch(on)
    {
        case 0:
           changeclass("red");
            break;
        case 30: 
           changeclass("yellow");
            break;
        case 60:
           changeclass("green");
            break;
        case 90:
            on=-1
            break;
    }
    on++;
}
function changeclass(color)
{
    switch(color)
    {
        case "red":
            redimg.classList.toggle("red"); 
            yelimg.classList.remove("yellow");
            grimh.classList.remove("green");
            break;
        case "yellow":
            yelimg.classList.toggle("yellow");
            redimg.classList.remove("red");
            grimh.classList.remove("green");
            break;
        case "green":
            grimh.classList.toggle("green");
            redimg.classList.remove("red");
            yelimg.classList.remove("yellow");
            break;
    }
}
function stoptraffic()
{
    isrunning=false;
    clearInterval(a);
    on=0;
    redimg.classList.remove("red");
    yelimg.classList.remove("yellow");
    grimh.classList.remove("green");
}