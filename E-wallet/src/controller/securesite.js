let activeuser=JSON.parse(sessionStorage.getItem("active_user"));



verifyconnection(activeuser);

function verifyconnection(user)
{
    if(user==null)
    {
        window.location.href="/E-wallet/src/view/login.html";
    };

};

export{verifyconnection};