
import { currentdate } from "../../assets/utilities/time.js";
const users=[
    {
        name:"ILSI FSTM",
        email:"ILSI@gmail.com",
        password:"1234",
        solde:248,
        ID:"007 003",
        savedWallets:[
    {
        email:"FSTM@gmail.com",
        balance:5000,
        type:"PAYPAL",
    },
    {
        email:"ILSI@gmail.com",
        balance:6000,
        type:"CARD",
    }
],
        transactions:[
            {
                type:"-",
                montant:"12345",
                description:"achat en-ligne",
                date:   "20/05/2026"
            }
            ,
              {
                type:"+",
                montant:1345,
                description:"depot en-ligne",
                date:   "20/05/2025"
            }
            ,  {
                type:"-",
                montant:345,
                description:"retrait",
                date:   "20/05/2024"
            }
            
        ]
    },
      {
        name:"ALI FSTM",
        email:"ALI@gmail.com",
        password:"1234",
        solde:248,
        ID:"007 001",
        savedWallets:[
    {
        email:"FSTM@gmail.com",
        balance:5000,
        type:"CARD",
    },
    {
        email:"ILSI@gmail.com",
        balance:6000,
        type:"PAYPAL",
    }
],
        transactions:[
            {
                type:"-",
                montant:125,
                description:"achat en-ligne",
                date:   "20/05/2026"
            }
            ,
              {
                type:"+",
                montant:1345,
                description:"depot en-ligne",
                date:   "20/05/2025"
            }
            ,  {
                type:"-",
                montant:3450,
                description:"retrait",
                date:   "20/05/2024"
            }
            
        ]
    },
      {
        name:"ACHRAF FSTM",
        email:"ACHRAF@gmail.com",
        password:"1234",
        solde:248,
        ID:"007 002",
          savedWallets:[
    {
        email:"FSTM@gmail.com",
        balance:5000,
        type:"PAYPAL",
    },
    {
        email:"ILSI@gmail.com",
        balance:6000,
        type:"CARD",
    }
],
        transactions:[
            {
                type:"-",
                montant:1345,
                description:"achat en-ligne",
                date:   "20/05/2026"
            }
            ,
              {
                type:"+",
                montant:6445,
                description:"depot en-ligne",
                date:   "20/05/2025"
            }
            ,  {
                type:"-",
                montant:3235,
                description:"retrait",
                date:   "20/05/2024"
            }
            
        ]
    }
]


function finduser(email,password){
    let user= null;
    user=users.find(n=>n.email===email && n.password===password);
    return user;
}
function updateSolde(sender,receiver,amount)
{
    sender.solde-=amount;
    receiver.solde+=amount;
    let debit={
                type:"-",
                montant:amount,
                description:`Transfer to ${receiver.name}`,
                date:currentdate()
            };
    sender.transactions.push(debit);
    updateUser(sender);
    return debit;
}
function findbenif(ID,active)
{
    let user=null;
    user=users.find(n=> n.ID===ID && n.ID!==active);
    return user;
}
function verifyWalletBalance(linkedmethod,amount)
{
   
    return linkedmethod.balance>amount ;
}
function getFundingSource(user,type)
{
    return user.savedWallets.find(w=>w.type===type);
}
function updateUser(user)
{
    sessionStorage.setItem("active_user",JSON.stringify(user));
}
export{finduser , updateSolde, findbenif,verifyWalletBalance,getFundingSource,updateUser };