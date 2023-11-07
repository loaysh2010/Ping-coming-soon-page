function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
}

/* =========================== */
const button = document.querySelector("button");
const emailInput = document.querySelector(".input-email");

button.onclick = function(){
    let email = emailInput.children[0].value;
    if(!validateEmail(email)){
        emailInput.classList.add("error");
    }
    else{
        emailInput.classList.remove("error");
    }
}

emailInput.children[0].onchange = ()=>{
    emailInput.classList.remove("error");
}