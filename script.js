"use strict";

// variables needed for the future

let choice;
let playerSelection;
const result = document.querySelector(".result");
const winnerIs = document.querySelector(".winner");
let scorePlayer = 0;
let scoreComputer = 0;

// get random computer selection

const computerPlay = function () {
  let randomNum = Math.floor(Math.random() * 10);
  if (randomNum <= 3) {
    choice = "rock";
  } else if (randomNum > 3 && randomNum <= 6) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
};

// function to check the winner

const winner = function () {
  console.log(scorePlayer, scoreComputer);
  if (scorePlayer === 5) {
    console.log("Player wins");
    winnerIs.textContent = "Hooray! You win :) Computers suck!";
    backToZero();
  } else if (scoreComputer === 5) {
    console.log("Computer wins");
    winnerIs.textContent = "Computer wins... Maybe next time";
    backToZero();
  } else {
    console.log("Keep playing");
  }
};

// functions for DRY

const playerPlus = function () {
  scorePlayer += 1;
  winner();
};

const computerPlus = function () {
  scoreComputer += 1;
  winner();
};

const draw = function() {
  result.textContent += "Draw!";
  winner();
};

const backToZero = function () {
  scorePlayer = 0;
  scoreComputer = 0;
  result.textContent = "";
};

// function for playing a game

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    result.textContent += "You win! Rock beats Paper.";
    playerPlus()
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    result.textContent += "You lose! Rock beats Paper.";
    computerPlus()
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    result.textContent += "You lose! Scissors beat Paper.";
    computerPlus()
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    result.textContent += "You win! Scissors beat Paper.";
    playerPlus()
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    result.textContent += "You lose! Paper beats Rock.";
    computerPlus();
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    result.textContent += "You win! Paper beats Rock.";
    playerPlus()
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    draw();
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    draw();
  } else {
    draw();
  }
}

const buttonOne = document.querySelector("#rock");
buttonOne.addEventListener("click", () => {
  playerSelection = "rock";
  playRound(playerSelection, computerPlay());
});

const buttonTwo = document.querySelector("#paper");
buttonTwo.addEventListener("click", () => {
  playerSelection = "paper";
  playRound(playerSelection, computerPlay());
});

const buttonThree = document.querySelector("#scissors");
buttonThree.addEventListener("click", () => {
  playerSelection = "scissors";
  playRound(playerSelection, computerPlay());
});

// play a game 5x times

// function game() {
//   for (let i = 0; i < 5; i++) {
//     let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
//     let computerSelection = computerPlay();
//     console.log(playerSelection, computerSelection);
//     playRound(playerSelection, computerSelection);
//   }};
