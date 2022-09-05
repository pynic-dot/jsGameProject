"user strict";

let pointHave = 20;
let highestScore = 0;
let scoreQ = document.querySelector(".scoreQ");
let randomNumber = Math.trunc(Math.random() * 20) + 1;
// scoreQ.textContent = randomNumber;

let displayMessage = function (message) {
  document.querySelector(".stateOfGuess").textContent = message;
};

// check button evenlistener
document.querySelector(".checkBttn").addEventListener("click", () => {
  let numInput = Number(document.querySelector(".numInput").value);
  if (!numInput) {
    displayMessage("No Number!");
  } else if (numInput > randomNumber && pointHave > 0) {
    pointHave--;
    displayMessage("Too High");
    document.querySelector(".pointHave").textContent = pointHave;
  } else if (numInput < randomNumber && pointHave > 0) {
    pointHave--;
    displayMessage("Too Low");
    document.querySelector(".pointHave").textContent = pointHave;
  } else if (numInput === randomNumber && pointHave > 0) {
    document.querySelector("body").style.backgroundColor = "green";
    displayMessage("You Won!");
    scoreQ.textContent = randomNumber;
    document.querySelector(".highestScore").textContent = pointHave;
  } else {
    displayMessage("Game Over! You Lost");
    scoreQ.textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "red";
  }
});

// Again button eventlistener

document.querySelector(".againbttn").addEventListener("click", () => {
  pointHave = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  scoreQ.textContent = "?";
  document.querySelector(".pointHave").textContent = pointHave;
  displayMessage("Start Guessing....");
  document.querySelector(".numInput").value = "";
  document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0.589)";
});
