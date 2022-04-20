let submit = document.getElementById('submit');
let email = document.getElementById('email');
let text = document.getElementById('text');
let error = document.querySelector(".error");


let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let validation = () => {
    text.style.fontStyle = "italic";
  if(regex.test(email.value)){
    error.style.display = "block";
    text.innerHTML = "Your Email Address is Valid";
    text.style.color = "#00ff00";
    email.style.outline = "1px solid #00ff00";
  }else if (email.value === "") {
    error.style.display = "block";
    text.innerHTML = "Email should not be left empty";
    text.style.color = "gray";
    email.style.outline = "1px solid hsl(0, 0%, 59%)";
  }else{
    error.style.display = "block";
    text.innerHTML = "Your Email is not valid";
    text.style.color = "hsl(354, 100%, 66%)";
    email.style.outline = "1px solid hsl(354, 100%, 66%)";
  }
}

email.addEventListener("keyup", validation);

submit.addEventListener("click", (e)=>{
    e.preventDefault();
})