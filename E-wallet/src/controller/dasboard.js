const activeuser=JSON.parse(sessionStorage.getItem("active_user"));
const balancedisplay=document.getElementById("balance");
const tablebody=document.getElementById("tbody");
const savedcards=document.getElementById("savedWallets");
setwelcomemessage();

function currentdate()
{
const nowdate=new Date();
const day=nowdate.getUTCDate();
const month=nowdate.getUTCMonth()+1;
const year=nowdate.getUTCFullYear();
return `${day.toString().padStart("2","0")}/${month.toString().padStart("2","0")}/${year}`;
}
function filltable(obj)
{
    const tr=document.createElement("tr");
    const td1=document.createElement("td");
    const td2=document.createElement("td");
    const td3=document.createElement("td");
    const td4=document.createElement("td");
    td1.innerText=obj.date;
    td2.innerText=obj.description;
    td3.innerText=obj.type;
    if(obj.type==="-")
    {
        td3.style.color="red";
        td4.style.color="red";
    }
    else{
        td3.style.color="green";
        td4.style.color="green";
    }
   
    td3.style.textAlign="center";
    td4.innerText=obj.montant +" DH";
    tr.append(td1,td2,td3,td4);
    tablebody.append(tr);
}
function setwelcomemessage()
{
const welcomeDisplay=document.getElementById("welcome_message");
const date=document.getElementById("date");
date.innerText=currentdate();
welcomeDisplay.innerText=`WELCOME ${activeuser.name}`;
dispalyBalance(activeuser);
activeuser.transactions.forEach(obj=>filltable(obj));
activeuser.savedWallets.forEach(obj=>fillLinkedSelectbox(obj));
}

function fillLinkedSelectbox(obj)
{
    const opt =document.createElement("option");
    opt.value=obj.type;
    opt.innerText=obj.type;
    savedcards.append(opt);
}
function dispalyBalance(user)
{
    let balance=Number(user.solde).toFixed(2);
    balancedisplay.innerText=balance + " DH";
}
export{filltable , currentdate,dispalyBalance};