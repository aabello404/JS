import { findbenif,updateSolde } from "../model/data.js";
function verifybenificary(receiverID,sender)
{
    return new Promise(
        (resolve,reject)=>
        {
           setTimeout(()=>
        {
             let Verified=findbenif(receiverID,sender.ID);
            if(Verified)
            {
                resolve(Verified);
            }
            else
            {
                reject("Invalid ID/DNE");
            }
        },5000)
        }
    )
}
function verifySolde(amnt,sender)
{
    return new Promise((resolve, reject) => {
        const minbalance=100;
        if(sender.solde - amnt > minbalance)
        {
            resolve({
                message:"balance sufficient"
            });
            
        }
        else{
            reject("Insufficient balance");
        }
    })
   
}
function updatebalance(sender,receiver,amount)
{
   
    return new Promise((resolve, reject) => {
        const transaction=updateSolde(sender,receiver,amount)
        if(transaction)
        {
            resolve({
                message:"✅ Transfer completed",
                transaction:transaction
            })
        }
        else{
            reject({
                message:"Unexpected error has occurred"
            })
        }
    })
    
}

async function make_transfer(sender,receiverID,amount) {


    try
    {
        let verifiedreceiver=await verifybenificary(receiverID,sender);
        await verifySolde(amount,sender);
        return await updatebalance(sender,verifiedreceiver,amount)
    }
    catch(error)
    {
        throw error;
    }
    
}
export {make_transfer}