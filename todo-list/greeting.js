const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.getElementById("greeting");
const HIDDEN = "hidden";
const USERNAME_KEY = "username"; 

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username){
    greeting.innerText = `Welcome, ${username}`;
    greeting.classList.remove(HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername=== null){
//show the form
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
//show the greetings
    paintGreetings(savedUsername);
}
