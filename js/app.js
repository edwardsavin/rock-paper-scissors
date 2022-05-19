let playerScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

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

  "Rock" > "Scissors";
  "Rock" < "Paper";
  "Paper" < "Scissors";

  // Compare playerSelection with computerSelection, show the score and display round result
  // Execute only if the player or computer score is < 5
  if (playerScore < 5 && computerScore < 5) {
    if (playerSelection > computerSelection) {
      playerScore += 1;
      document.getElementById(
        "round-result"
      ).textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection < computerSelection) {
      computerScore += 1;
      document.getElementById(
        "round-result"
      ).textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === computerSelection) {
      document.getElementById(
        "round-result"
      ).textContent = `It's a tie! You both chose ${playerSelection}`;
    } else {
      document.getElementById("round-result").textContent =
        "Something went wrong...";
    }

    announceWinner();
  }

  document.getElementById(
    "match-score"
  ).textContent = `Match score is: [ Player: ${playerScore} | Computer: ${computerScore} ]`;
}

function announceWinner() {
  if (playerScore === 5) {
    document.getElementById("game-winner").textContent = "You won the game!";
  } else if (computerScore === 5) {
    document.getElementById("game-winner").textContent = "You lost the game!";
  }
}
