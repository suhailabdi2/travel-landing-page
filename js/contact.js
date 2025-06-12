const form = document.querySelector("form");
function validateEmail(mail){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}
function errorMessage(input){
    let error=input.parentElement.querySelector('.error');
    error.style.display="block";
}
function validatename(input){
    if(input.value.trim()===""){
        errorMessage(input);
        return false;
    }
    
}
form.addEventListener("submit",function(e){
    e.preventDefault();
    const fname= document.querySelector("#fname");
    const lname =document.querySelector("#lname");
    const email= document.querySelector("#email");
    const message = document.querySelector("#message");
    const toast = document.querySelector(".toast_succesful");
    let valid = true;
    if(fname.value.trim()===""){
        errorMessage(fname);
        valid=false;
    }
    if(lname.value.trim()===""){
        errorMessage(lname);
        valid=false;
    }
    if(email.value.trim()===""){
        errorMessage(email);
        valid=false;
    }
    if(message.value.trim()===""){
        errorMessage(message);
        valid=false;
    }
    if(valid){
        toast.className="show";
    }
   

})

