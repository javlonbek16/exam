let modal = document.querySelector(".backdrop");
let showModalbtn = document.querySelector("#account");
let cancelbtn = document.querySelector("#sign-in");
let InputName = document.querySelector("#FullName");
let InputEmail = document.querySelector("#Email");
let InputPassword = document.querySelector("#Password");
let Userform = document.querySelector("#modal-form");

function showModal() {
  modal.classList.toggle("active");
}

showModalbtn.addEventListener("click", showModal);
// cancelbtn.addEventListener("submit", showModal);
