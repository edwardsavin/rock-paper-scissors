let playerScore = 0;
let computerScore = 0;

// Play one round of the game and return the winner
function playRound() {
    let choices = ["Rock", "Paper", "Scissors"];

    // Make computer select randomly from choices and prompt user for selection
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    let playerSelection = upperCaseFirstChar(
        prompt("Rock, Paper or Scissors?").trim().toLowerCase()
    );

    // Declare the comparison between the strings
    "Rock" > "Scissors";
    "Rock" < "Paper";
    "Paper" < "Scissors";

    // Compare playerSelection with computerSelection, print winner and return it
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

// Upper case only the first character in string
function upperCaseFirstChar(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

// Play the game for five rounds and at the end declare the winner
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore) {
        console.log("Game won!");
        console.log(
            `Match score is: [ Player: ${playerScore} | Computer: ${computerScore} ]`
        );
    } else if (playerScore < computerScore) {
        console.log("Game lost!");
        console.log(
            `Match score is: [ Player: ${playerScore} | Computer: ${computerScore} ]`
        );
    } else {
        console.log("The game ended in a draw!");
        console.log(
            `Match score is: [ Player: ${playerScore} | Computer: ${computerScore} ]`
        );
    }
}

game();
