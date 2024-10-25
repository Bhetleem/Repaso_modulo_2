"use strict";

const userNumber = document.querySelector(".js-input");
const button = document.querySelector(".js-button");
const clue = document.querySelector(".js-clue");
const attempt = document.querySelector(".js-try");
const max = 100;

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
}

let randomNumber = getRandomNumber(max);
console.log(randomNumber);

function checkUserNumber(event){

    let userNumberValue = parseInt(userNumber.value);

    console.log(userNumberValue);

    event.preventDefault();

    if (userNumberValue === randomNumber){
        clue.innerHTML = "Has ganado campeona";
        console.log("has ganado");
    } else if (userNumberValue < randomNumber){
        clue.innerHTML = "Demasiado bajo";
    } else if (userNumberValue > randomNumber){
        clue.innerHTML = "Demasiado alto";
    } else if (userNumberValue > max){
        clue.innerHTML = "El número debe estar entre 0 y 100";
    }
}

let numberOfClicks = 0;

function numberOfAttemps(numberOfClicks){
    numberOfClicks++;
   
    attempt.innerHTML = `Número de intentos:  + ${numberOfClicks}`;
    console.log(numberOfAttemps)
}





button.addEventListener("click",numberOfAttemps);
console.log("pista");

