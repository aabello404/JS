const prenoms=["ali","sarah","mohammed","yassine"];
   function capitalise(item)
   {
      return str=item[0].toUpperCase() + item.slice(1);
   }

let newprenoms=prenoms.map(p=>capitalise(p));

const afficher=(item)=>console.log(item);

//newprenoms.forEach(p=>afficher(p));



