// GET ALL GAME ELEMENTS

const playerChoiceInput = document.querySelector(".player-choice");
const aiChoice = document.querySelector(".computer-choice");
const playerScore = document.querySelector(".current-player-score");
const aiScore = document.querySelector(".current-computer-score");
const roundResult = document.querySelector(".result");
const playGameBtn = document.querySelector(".play-game");
const playAgainBtn = document.querySelector(".play-again");
const gamePopup = document.querySelector(".game-popup");
const popupText = document.querySelector(".game-result");
const closePopupBtn = document.querySelector(".play-again");

let playerCurrentScore = 0;
let aiCurrentScore = 0;

// FUNCTIONS
const updateScore = () => {
  playerScore.textContent = playerCurrentScore;
  aiScore.textContent = aiCurrentScore;
};

// CHECKING SCORE FUNCTION
const checkScore = () => {
  if (playerCurrentScore === 3) {
    gamePopup.classList.add("active");
    popupText.textContent = "Congratulations! You won the game";
  } else if (aiCurrentScore === 3) {
    gamePopup.classList.add("active");
    popupText.textContent = "Meh, you lose. Maybe try again?!";
  }
};

//RESTART GAME FUNCTION
const playAgain = () => {
  gamePopup.classList.remove("active");
  location.reload();
};

// MAIN FUNCTION
const playRound = () => {
  // COMPUTER CHOICE

  const computerOptions = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * computerOptions.length);
  const computerSelection = computerOptions[randomChoice];
  aiChoice.textContent = computerSelection;

  // PLAYER CHOICE
  const playerSelection = playerChoiceInput.value;
  // CHECK IF PLAYER WIN STATEMENTS
  if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerCurrentScore++;
    updateScore();
    roundResult.textContent = "Player win this round!";
    checkScore();
    return;

    // CHECK IF COMPUTER WIN STATEMENTS
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    aiCurrentScore++;
    updateScore();
    roundResult.textContent = "Computer win this round!";
    checkScore();
    return;
  } else {
    roundResult.textContent = "We got a draw!";
  }
};

// ADD LISTENERS
closePopupBtn.addEventListener("click", playAgain);
playGameBtn.addEventListener("click", playRound);
