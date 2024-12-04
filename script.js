//todo
// Add and implement the following functionalities on our existing Guessing Game.

// Challenges:
// Create a setGameOver() that will run once the player runs out of guesses. The following function will do the following:
// disable input and prevent submission of new guesses :  ✅
// generate a button “Start New Game” :  ✅
// Create a resetGame() which will perform the following:
// generate a new random number :  ✅
// restore initial guess input fields and messages :  ✅
// enables input to accept new guesses :  ✅
// Additional points:
// Add styling by manipulating CSS DOM properties. :  ✅

let randomNumber = Math.floor(Math.random() * 20) + 1;

//insert values into paragraphs
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

//used to control the input from forms
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

//reset game button
const resetGameBtn = document.querySelector(".resetGame__button");

//hidden class
const winnerResultContainer = document.querySelector(
  ".winnerResult__container"
);
const loserResultContainer = document.querySelector(".loserResult__container");

let guessCount = 1;

function checkGuess() {
  let userGuess = Number(guessField.value);
  guessCount === 1 ? (guesses.textContent = "Previous guesses: ") : "";

  //appends current userGuess to existing guesses
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    winnerMessage();
    setGameOver();
  } else if (guessCount === 10) {
    loserMessage();
    setGameOver();
  } else {
    lastResult.textContent = "Wrong! ";
    lastResult.style.backgroundColor = "red";

    userGuess < randomNumber
      ? (lowOrHi.textContent = "Your previous guess was Too low!")
      : (lowOrHi.textContent = "Your previous guess was Too high!");
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);
guessField.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkGuess();
  }
});

window.addEventListener("click", function () {
  winnerResultContainer.classList.add("hidden");
  loserResultContainer.classList.add("hidden");
});

function winnerMessage() {
  lastResult.textContent = "Congratulations, you won!";
  lastResult.style.backgroundColor = "green";
  lowOrHi.textContent = "";
  winnerResultContainer.classList.remove("hidden");
}

function loserMessage() {
  lastResult.textContent = "Game Over, you lost!";
  lastResult.style.backgroundColor = "red";
  loserResultContainer.classList.remove("hidden");
}
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
}

function resetGame() {
  guessCount = 1;
  lastResult.textContent = "";
  lowOrHi.textContent = "";
  guesses.textContent = "";
  guessField.value = "";
  guessField.disabled = false;
  guessSubmit.disabled = false;
  randomNumber = Math.floor(Math.random() * 20) + 1;
}

resetGameBtn.addEventListener("click", resetGame);
