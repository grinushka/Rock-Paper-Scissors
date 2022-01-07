"use strict";

// // get random computer selection

// let choice;
// const computerPlay = function () {
//   let randomNum = Math.floor(Math.random() * 10);
//   if (randomNum <= 3) {
//     choice = "rock";
//   } else if (randomNum > 3 && randomNum <= 6) {
//     choice = "paper";
//   } else {
//     choice = "scissors";
//   }
//   return choice;
// };

// // function for playing a game

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection == "rock" && computerSelection == "scissors") {
//     console.log("You win! Rock beats Paper");
//   } else if (playerSelection == "scissors" && computerSelection == "rock") {
//     console.log("You lose! Rock beats Paper");
//   } else if (playerSelection == "paper" && computerSelection == "scissors") {
//     console.log("You lose! Scissors beat Paper");
//   } else if (playerSelection == "scissors" && computerSelection == "paper") {
//     console.log("You win! Scissors beat Paper");
//   } else if (playerSelection == "rock" && computerSelection == "paper") {
//     console.log("You lose! Paper beats Rock");
//   } else if (playerSelection == "paper" && computerSelection == "rock") {
//     console.log("You win! Paper beats Rock");
//   } else if (playerSelection == "paper" && computerSelection == "paper") {
//     console.log("Draw!");
//   } else if (playerSelection == "scissors" && computerSelection == "scissors") {
//     console.log("Draw!");
//   } else {
//     console.log("Draw!");
//   }
// }

// // play a game 5x times

// function game() {
//   for (let i = 0; i < 5; i++) {
//     let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
//     let computerSelection = computerPlay();
//     console.log(playerSelection, computerSelection);
//     playRound(playerSelection, computerSelection);
//   }
// }

// // call the function
// game();

for (const person of people) {
  if (person === "Phil") {
    refused.textContent += person;
  } else if (person === "Lola") {
    refused.textContent += person;
  } else {
    admitted.textContent += person;
  }
}
