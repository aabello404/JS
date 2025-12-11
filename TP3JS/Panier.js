const pro=document.body.querySelector("#product");
const proamnt=document.body.querySelector("#productamount");
const btnaddcart=document.body.querySelector(".btnc");
const empmessage=document.body.querySelector("#para1");
var allqte=0;
const cartcount= document.querySelector("#cart-count");
btnaddcart.addEventListener("click",addcart);
let panier=[];

function addcart()
{
    if(!proamnt.value && !pro.value)return alert("To proceed fill the product name and amount");    
    if(!pro.value) return alert("To proceed fill the product name");
    if(!proamnt.value)return alert("Fill the product amount to proceed"); 
    if(proamnt.value<1) return alert("Invalid quantity");
    const pan=document.body.querySelector("#listn");
    const newli=document.createElement("li");
    for(item of panier)
    {
        if(item.firstChild.textContent===pro.value.toUpperCase())
            {
                let newval=item.querySelector(".amt");
                let newqte=parseInt(newval.innerText);
                newqte+=parseInt(proamnt.value);
                newval.textContent=newqte;
                pro.value="";
                allqte+=parseInt(proamnt.value);
                cartcount.textContent=allqte;
                proamnt.value ="";
                return;
            };
    }
    const mergediv=document.createElement("div");
    mergediv.classList.add("mrgdiv");
    newli.textContent=pro.value.toUpperCase();
    allqte+=parseInt(proamnt.value);
    cartcount.textContent=allqte;
    pro.value="";
    pan.appendChild(newli);
    mergediv.appendChild(adddiv1());
    mergediv.appendChild(btndelete(newli));
    newli.appendChild(mergediv);
    panier.push(newli);
    if(panier.length===1){
        empmessage.textContent="";
    };
    
};


function adddiv1()
{ 
    let strqte=parseInt(proamnt.value);
    const sp=document.createElement("div");
    sp.textContent=strqte;
    sp.classList.add("amt");
    const dv=document.createElement("div");
    dv.style.display="flex";

    const btnplus=createbutton("btnplusminus","button","+");
    btnplus.addEventListener("click",()=>{
            let qte=parseInt(sp.textContent);
            qte++;
            allqte++;
            cartcount.textContent=allqte;
            sp.textContent=qte;
                
    })
    const btnminus=createbutton("btnplusminus","button","-");
     btnminus.addEventListener("click",()=>{
        let qte=parseInt(sp.textContent);
            if(qte>1) {qte--;
                    allqte--;
                    cartcount.textContent=allqte;
                 }
            sp.textContent=qte;
    })
   proamnt.value="";
     
    dv.appendChild(btnminus);
    dv.appendChild(sp);
    dv.appendChild(btnplus);
    return dv;  
}

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
        for (item of panier)
        {
            if(item === newl){
                const getamt=item.querySelector(".amt");
                 allqte-=parseInt(getamt.textContent);
                 cartcount.textContent=allqte;
            }
                 
        }
       panier=panier.filter(n=>n!==newl);
       newl.remove();
       if(panier.length===0) empmessage.textContent="Such an empty basket";
      
    });
    return btndelete;
}

/*
function verifychamps()
{
    if(!proamnt.value && !pro.value)return alert("To proceed fill the product name and amount");    
    if(!pro.value) return alert("To proceed fill the product name");
    if(!proamnt.value)return alert("Fill the product amount to proceed");        
}*/