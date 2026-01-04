import{verifyWalletBalance,getFundingSource,updateUser} from "../model/data.js";
import { currentdate } from "../controller/dasboard.js";

function getinfoFundingSource(user,sourceID)
{
    return new Promise((resolve, reject) => {
        const FundingS=getFundingSource(user,sourceID);
        if(FundingS)
        {
            resolve(FundingS);
        }
        else
        {
            reject("Card/payment unavailable");
        }
    })
}
function checkSolde(linkedcard, amount)
{
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            
            if(verifyWalletBalance(linkedcard,amount))
                {
                    resolve("amount verified");
                }
                else{
                    reject("Insufficient balance");
                }
            }, 4000);
        })
    }
    

function top_up(linkedcard,user,amount)
{

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(amount<=0)
            {
                reject("Invalid amount");
                return;
            }
            linkedcard.balance-=amount;
            user.solde+=amount;
            resolve("");
            
        }, 100);
    })

}

function addtransaction(linkedcard,user,amount)
{
    return new Promise((resolve, reject) => {
        
        const recharge= {
                type:"+",
                montant:amount,
                description:`TOP-UP from ${linkedcard.type}`,
                date: currentdate()
            }
        
            if(user.transactions.push(recharge))
            {
               updateUser(user);
                resolve(
                    {
                        message:"Account recharged",
                        userbalance:user.solde,
                        transaction:recharge
                    });

            }
            reject("Un-expected error has occured, Try again");
    })

}

async function rechargeSolde(user,amount,sourceID)
{
    
        try
        {
            let MONEY_source=await getinfoFundingSource(user,sourceID)
            await checkSolde( MONEY_source,amount);
            await top_up( MONEY_source,user,amount);
            const object=await addtransaction( MONEY_source,user,amount);
            return object;
        }
        catch(error)
        {
           throw error;
        }
    
}
export{rechargeSolde}