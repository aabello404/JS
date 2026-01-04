const username=document.getElementById("login");
const password = document.getElementById("password");
const btnlogin=document.getElementById("submit");
const user={
    username:"ILSI",
    password:1234
};



btnlogin.addEventListener("click",()=>{
   const userN=username.value.trim();
   const passW=password.value;
   location.assign("/Authentification/content.html");
})

/*
   if(userN===user.username && passW==user.password)
   {
      window.location.href="content.html";
   }
   else{
    alert("Username or password incorrect");
   }*/
   
   let t=[1,2,3];
   let x=null;
   x =t.find(n=>n===0);
   console.log(x);
