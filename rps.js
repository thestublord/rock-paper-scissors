let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'tie';
  }

  if ((userChoice === 'Rock' && computerChoice === 'Scissors') ||
      (userChoice === 'Scissors' && computerChoice === 'Paper') ||
      (userChoice === 'Paper' && computerChoice === 'Rock')) {
    userScore++;
    return 'user';
  } else {
    computerScore++;
    return 'computer';
  }
}

function displayResult(message) {
  const resultDiv = document.querySelector('#result');
  resultDiv.textContent = message;
}

function displayScore() {
  const scoreDiv = document.querySelector('#score');
  scoreDiv.textContent = `User Score: ${userScore} - Computer Score: ${computerScore}`;
}

function checkGameEnd() {
  if (userScore === 5 || computerScore === 5) {
    let winnerMessage = userScore === 5 ? "You won the game!" : "Computer won the game!";
    alert(winnerMessage);
    userScore = 0;
    computerScore = 0;
    displayScore();
  }
}

function playRound(e) {
  userChoice = e.target.textContent;
  computerChoice = getComputerChoice();

  const winner = determineWinner(userChoice, computerChoice);

  let message;
  if (winner === 'user') {
    message = "You win this round!";
  } else if (winner === 'computer') {
    message = "Computer wins this round!";
  } else {
    message = "It's a tie this round!";
  }

  displayResult(message);
  displayScore();
  checkGameEnd();
}

document.querySelectorAll('.choice-button').forEach(button => {
  button.addEventListener('click', playRound);
});
