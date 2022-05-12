// List variable with choices
let choices = ["rock", "paper", "scissors"];

// Variable for computer that randomly chooses from choices list
let computerSelection = choices[Math.floor(Math.random() * choices.length)];

// Variable for human (playerSelection) with prompt
let playerSelection = prompt("Rock, Paper or Scissors?").trim().toLowerCase();
