// List variable with choices
let choices = ["rock", "paper", "scissors"];

// Variable for computer that randomly chooses from choices list
let computerSelection = choices[Math.floor(Math.random() * choices.length)];
console.log(computerSelection);

// Variable for human (playerSelection) with prompt
let human = prompt("Rock, Paper or Scissors?").trim().toLowerCase();
console.log(human);

