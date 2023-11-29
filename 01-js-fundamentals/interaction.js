'use strict'

let conf = confirm("Are you 18 years old or above?");
if(conf){
  let name = prompt("What is your name?", '');
  let age = prompt("How old are you?")
  let res = document.getElementById("pr").innerHTML = `Your name ${name}, your age ${age}`;
}