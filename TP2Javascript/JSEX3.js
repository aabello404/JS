const notes = [{n:12 , p:8},{n:8} ];


let rf=notes.reduce(function(acc,valeur){
    
    return acc+(valeur);
},0);

let obj1={
    n1: 4,
    n3: 6
};

let objet={
    n1:5,
    N2:4
};

let dates=["2025-02-03", "2026-01-12","2026-05-10"];
function convert(element , index, array)
{
    let nex=element.split("-")
    array[index]= `${nex[2]}/${nex[1]}/${nex[0]}`;    
}

dates.forEach((a,b,c)=>convert(a,b,c));
dates.forEach(a=>console.log(a));