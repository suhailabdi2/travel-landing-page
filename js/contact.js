const form = document.querySelector("form");
function validateEmail(mail){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}
function errorMessage(input){
    let error=input.parentElement.querySelector('.error');
    error.style.display="block";
}
function removeError(input){
    let error = input.parentElement.querySelector(".error");
    if(error){
        error.style.display="none";
    }

}
document.querySelectorAll("input, textarea").forEach(function(input){
    input.addEventListener("keyup",function(e){
        removeError(input);
    })}
)





form.addEventListener("submit",function(e){
    e.preventDefault();
    const fname= document.querySelector("#fname");
    const lname =document.querySelector("#lname");
    const email= document.querySelector("#email");
    const message = document.querySelector("#message");
    const toast = document.querySelector(".toast_succesful");
    const error = document.querySelector(".error");
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
        toast.classList.add("show");
        console.log("works");
        setTimeout(()=>{
            toast.classList.remove("show");
        },3000)
    }
})

document.querySelector(".dp").addEventListener("click",function(e){
    document.querySelector("#profile-picture").click();
})