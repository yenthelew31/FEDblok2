// JavaScript Document

const deButton = document.querySelector("header button");
const nav = document.querySelector("header nav ul");


deButton.onclick = toggleMenu;


function toggleMenu(){
  deButton.classList.toggle("is-open");
  nav.classList.toggle("open");
}
