let panier=[];
function additem(n,p){
      let obj={
     nom:n,
     prix:p
    };
    panier.push(obj);
}
function remove(n){

    panier=panier.filter(panier=> panier.nom!=n);
}

function total(){
    var somme=0;
    for(let index=0; index<panier.length;index++)
    {
            somme+=panier[index].prix;
    }
    return somme;
}
function list()
{
    for(let i=0;i<panier.length;i++)
    {
        console.log(panier[i].nom +" "+ panier[i].prix +"\n");
    }
}

additem("PHONE",244);
additem("PC",500);
additem("PEN",100);
remove("PHONE");
console.log(panier);
a=total(panier);