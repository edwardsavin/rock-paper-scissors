// List variable with choices
let choices = ["Rock", "Paper", "Scissors"];

// Variable for computer that randomly chooses from choices list
let computerSelection = choices[Math.floor(Math.random() * choices.length)];

// Variable for human (playerSelection) with prompt
let playerSelection = upperCaseFirstChar(
    prompt("Rock, Paper or Scissors?").trim().toLowerCase()
);

let playerScore = 0;
let computerScore = 0;

// Function (playRound()) that declares the comparison of the strings (Rock > Scissors, etc.),
// compares playerSelection with computerSelection, prints the winner and returns it
function playRound() {
    "Rock" > "Scissors";
    "Rock" < "Paper";
    "Paper" < "Scissors";

    if (
        playerSelection === "Rock" ||
        playerSelection === "Paper" ||
        playerSelection === "Scissors"
    ) {
        if (playerSelection > computerSelection) {
            console.log(
                `You Win! ${playerSelection} beats ${computerSelection}`
            );
            return (playerScore += 1);
        } else if (playerSelection < computerSelection) {
            console.log(
                `You Lose! ${computerSelection} beats ${playerSelection}`
            );
            return (computerScore += 1);
        } else if (playerSelection === computerSelection) {
            console.log(`It's a tie! You both chose ${playerSelection}`);
        } else {
            console.log("Something went wrong...");
        }
    } else {
        console.log(`You cannot choose ${playerSelection}`);
    }
}

function upperCaseFirstChar(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

playRound();

console.log(`The score is Player: ${playerScore} | Computer: ${computerScore}`);
// TODO: Function (game()) that replays the game for 5 times (recalls playRound() for 5 times)
