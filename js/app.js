let playerScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const score = document.getElementById("match-score");
const roundResult = document.getElementById("round-result");
const gameResult = document.getElementById("game-winner");

rock.addEventListener("click", selectRock);
paper.addEventListener("click", selectPaper);
scissors.addEventListener("click", selectScissors);

function selectRock() {
  playRound("Rock");
}

function selectPaper() {
  playRound("Paper");
}

function selectScissors() {
  playRound("Scissors");
}

function playRound(buttonSelected) {
  const choices = ["Rock", "Paper", "Scissors"];

  let computerSelection = choices[Math.floor(Math.random() * choices.length)];
  let playerSelection = buttonSelected;

  // Compare playerSelection with computerSelection, show the score and display round result
  // Execute only if the player or computer score is < 5
  if (playerScore < 5 && computerScore < 5) {
    if (
      (playerSelection === "Rock" && computerSelection === "Scissors") ||
      (playerSelection === "Paper" && computerSelection === "Rock") ||
      (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
      playerScore += 1;
      roundResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (
      (playerSelection === "Rock" && computerSelection === "Paper") ||
      (playerSelection === "Paper" && computerSelection === "Scissors") ||
      (playerSelection === "Scissors" && computerSelection === "Rock")
    ) {
      computerScore += 1;
      roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === computerSelection) {
      roundResult.textContent = `It's a tie! You both chose ${playerSelection}`;
    } else {
      roundResult.textContent = "Something went wrong...";
    }

    announceWinner();
  }

  score.textContent = `Match score is: [ Player: ${playerScore} | Computer: ${computerScore} ]`;
}

function announceWinner() {
  if (playerScore === 5) {
    gameResult.textContent = "You won the game!";
  } else if (computerScore === 5) {
    gameResult.textContent = "You lost the game!";
  }
}
