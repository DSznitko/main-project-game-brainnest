// GET ALL GAME ELEMENTS

const playerChoiceInput = document.querySelector(".player-choice");
const aiChoice = document.querySelector(".computer-choice");
const playerScore = document.querySelector(".current-player-score");
const aiScore = document.querySelector(".current-computer-score");
const roundResult = document.querySelector(".result");
const playGameBtn = document.querySelector(".play-game");
const playAgainBtn = document.querySelector(".play-again");

let playerCurrentScore = 0;
let aiCurrentScore = 0;

// FUNCTIONS

const playRound = () => {
  // COMPUTER CHOICE

  const computerOptions = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * computerOptions.length);
  const computerSelection = computerOptions[randomChoice];
  aiChoice.textContent = computerSelection;
  // ADDING SCORE VARIABLES
  playerScore.textContent = playerCurrentScore;
  aiScore.textContent = aiCurrentScore;

  // PLAYER CHOICE
  const playerSelection = playerChoiceInput.value;
  // CHECK IF PLAYER WIN STATEMENTS
  if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerCurrentScore++;
    roundResult.textContent = "Player win this round!";

    // CHECK IF COMPUTER WIN STATEMENTS
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    aiCurrentScore++;
    roundResult.textContent = "Computer win this round!";
  } else {
    roundResult.textContent = "We got a draw!";
  }
};

// ADD LISTENERS

playGameBtn.addEventListener("click", playRound);
