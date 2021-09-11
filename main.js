const login =document.querySelector("#login");
const register =document.querySelector("#Register");
const toggleBtn =document.querySelector(".btn");


const registerAccount = () =>{
  login.style.left= "-120%";
  register.style.left ="13%";
  toggleBtn.style.left="50%"

}



const loginAccount = () =>{
  login.style.left= "13%";
  register.style.left ="120%";
  toggleBtn.style.left="0"

}