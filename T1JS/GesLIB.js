
let Books=[
    {id:1,titre:"Clean Code", auteur:"R. Martin", prix: 0,stock:12},
    {id:2,titre:"You Don't know JS", auteur:"Kyle Simpson", prix:180,stock:5},
    {id:3, titre:"Eloquent JavaScript", auteur:"Martin Haverbeke",prix:150,stock:0}
];
function checkmax(){
    let maxid=0;
    for(let i=0;i<Books.length;i++)
    {
        if(Books[i].id>maxid)
        {
            maxid=Books[i].id;
        }
    }
    return maxid;
};

function addbook(t,a,p,s)
{
    let c=checkmax()+1;
    let newb={
        id:c,
        titre:t,
        auteur:a,
        prix:p,
        stock:s

    };
    Books.push(newb);

};

function getbooksbyAuthur(Ath)
{
    return Books.filter(t=>t.auteur===Ath);

};

function ValeurStock(){
    let somme=0;
    for(let i=0; i<Books.length;i++)
    {
       somme+=(Books[i].prix*Books[i].stock)
        
    }
    return somme;
};

function updateStock(ir,newStock)
{
     for(let i=0; i<Books.length;i++)
    {
        if(Books[i].id===ir)
         Books[i].stock+=newStock;
        
    }

};


function sortbyPrice()
{
   return  Books.sort(function(a,b){return a.prix-b.prix});     
}
console.log(sortbyPrice());
addbook("JS by ABBAS","R. Martin",345,5);