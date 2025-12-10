//ex 2
const produits = [ { nom: "Pomme", prix: 3 },
{ nom:"Banane", prix: 2 },
{ nom:"Kiwi", prix: 5 },
{ nom:"Mangue", prix: 8 }];

function filterProducts(prod,Callback)
{
    let res=[];
    for(item of prod)
    {
        if(Callback(item))
        {
            res.push(item);
        }
    }
    return res;

}
const anon=function(item){  return item.prix<5
};

let ref=filterProducts(produits, anon);
const afficher1=(item)=>console.log("NOM produit: " + item.nom +" Prix:"+item.prix);

//ref.forEach(p=>afficher1(p));