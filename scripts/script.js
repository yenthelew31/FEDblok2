// JavaScript Document
const deButton = document.querySelector("header section button");
const nav = document.querySelector("header nav");

deButton.onclick = () => {
  deButton.classList.toggle("is-open");
  nav.classList.toggle("open");
};