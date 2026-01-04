function currentdate()
{
const nowdate=new Date();
const day=nowdate.getUTCDate();
const month=nowdate.getUTCMonth()+1;
const year=nowdate.getUTCFullYear();
return `${day.toString().padStart("2","0")}/${month.toString().padStart("2","0")}/${year}`;
}
export{currentdate};