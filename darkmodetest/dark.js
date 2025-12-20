const black=document.querySelector("#imge");
const bod=document.querySelector("#bodi");
black.addEventListener("click",changemode);
if(localStorage.getItem("theme")==="dark")
{
        bod.classList.add("newbody");
     black.setAttribute("src","darkmode.PNG");
}
function changemode(){
     
    
  const isdark=  bod.classList.toggle("newbody");
const srci=isdark? "darkmode.PNG": "lightmode.PNG";
    black.setAttribute("src",srci);
    localStorage.setItem("theme",isdark? "dark":"light");
}
