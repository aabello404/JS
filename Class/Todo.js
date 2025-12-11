
const ipt=document.body.querySelector("#REt")
const btnadd=document.body.querySelector("#add");


btnadd.addEventListener("click",addtodo);
let task=[];
function addtodo(){
    if(ipt.value===""){
        alert("list should'nt be empty");
     return;}
    
    const listtache= document.body.querySelector("#listn");
    const newdiv=document.createElement("div");
   
    const newli=document.createElement("li");
    newli.innerText=ipt.value;
    ipt.value="";
    task.push(newli.textContent);
    listtache.appendChild(newli);
    newdiv.append(addbtndelete(listtache,newli));
    newdiv.append(addbtndone(newli));
    newli.append(newdiv);
    
    
    if(task.length===1){
    const par=document.getElementById("para1");
     par.innerText="";
     }
    
};

function addbtndone(newli){
 const btndone=document.createElement("button");
btndone.innerText="Done";
btndone.setAttribute("type","button");
btndone.classList.add("btn");
btndone.addEventListener("click",()=>{
            newli.classList.toggle("done");
    });


return btndone;

};



function addbtndelete(l , newl){
 const btndelete=document.createElement("button");
btndelete.innerText="Delete";
btndelete.setAttribute("type","button");
btndelete.classList.add("btn");

btndelete.addEventListener("click",()=>{
       l.removeChild(newl);
    });


return btndelete;

}