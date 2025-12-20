const pro=document.body.querySelector("#product");
const proamnt=document.body.querySelector("#productamount");
const btnaddcart=document.body.querySelector(".btnc");
const empmessage=document.body.querySelector("#para1");
const cartcount= document.querySelector("#cart-count");
btnaddcart.addEventListener("click",addcart);
let scqte=parseInt(localStorage.getItem("alqte"))||0;
let savedcart=JSON.parse(localStorage.getItem("panier")) || [];
rendercart();
function rendercart()
{ const savedpan=document.querySelector("#listn");
savedpan.innerHTML='';
 cartcount.textContent=scqte;
if(savedcart.length)
{
    savedcart.forEach((element) => {
        let newl=document.createElement("li");
        newl.textContent=element.name;
        savedpan.appendChild(newl);
        const mergediv=document.createElement("div");
        mergediv.classList.add("mrgdiv");
        mergediv.appendChild(div2(element));
        mergediv.appendChild(btndelete(newl));
        newl.appendChild(mergediv);
        empmessage.textContent="";
    });
    
}

}

function addcart()
{
    if(!proamnt.value && !pro.value.trim())return alert("To proceed fill the product name and amount");    
    if(!pro.value.trim() ) return alert("To proceed fill the product name");
    if(!proamnt.value)return alert("Fill the product amount to proceed"); 
    if(parseInt(proamnt.value)<1) return alert("Invalid quantity");
    let newelement={
        name:pro.value.toUpperCase(),
        amount: parseInt(proamnt.value)

    }
    const item = savedcart.find(n=>n.name===pro.value.toUpperCase())
   if(item)
   {
        item.amount+=parseInt(proamnt.value);
   }
   else{
    savedcart.push(newelement);
   }
   
    scqte+=parseInt(proamnt.value);
    pro.value='';
    proamnt.value='';
    saveandreload();
   

};

function createbutton(itsclass,itstype , innertext){
    const btn=document.createElement("button");
    btn.setAttribute("type",itstype);
    btn.classList.add(itsclass);
    btn.innerText=innertext;
    return btn;

}

function btndelete(newl)
{
    
    const btndelete=createbutton("btn","button","Delete");
    btndelete.addEventListener("click",()=>{
    const item= savedcart.find(n=>n.name===newl.firstChild.textContent);
    scqte-=item.amount;
    savedcart=savedcart.filter(function(n){
        return n.name!==newl.firstChild.textContent;   
        });
    if(savedcart.length===0) empmessage.textContent="Such an empty basket";
    saveandreload();  
    });
    return btndelete;
}

function div2(element)
{
    const div = document.createElement("div");
    div.style.display="flex";
    const amt=document.createElement("div");
    amt.classList.add("amt");
    amt.textContent=element.amount;
    const btnplus=createbutton("btnplusminus","button","+");
    btnplus.addEventListener("click",()=>{
        scqte++;
        (element.amount)++;
         amt.textContent = element.amount;
        saveandreload();                   
    })
    const btnminus=createbutton("btnplusminus","button","-");
     btnminus.addEventListener("click",()=>{
            if((element.amount)>1) {
                scqte--;
                (element.amount)--;
                 amt.textContent = element.amount;
                saveandreload();
            };
    })
    div.append(btnminus);
    div.appendChild(amt);
    div.appendChild(btnplus);
    return div;

}
function saveandreload(){
    localStorage.setItem("alqte",scqte);
    localStorage.setItem("panier",JSON.stringify(savedcart)); 
    rendercart();
    
}
/*
function verifychamps()
{
    if(!proamnt.value && !pro.value)return alert("To proceed fill the product name and amount");    
    if(!pro.value) return alert("To proceed fill the product name");
    if(!proamnt.value)return alert("Fill the product amount to proceed");        
}*/