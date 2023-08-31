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

function game() {
    for (let i = 0; i < 5; i++) {
        userChoice = prompt("Do you choose Rock, Paper or Scissors?");
        if (!['Rock', 'Paper', 'Scissors'].includes(userChoice)) {
            alert("Invalid choice! Choose either Rock, Paper, or Scissors.");
            i--;  // Invalid choice shouldn't count as a round.
            continue;
        }
        
        computerChoice = getComputerChoice();
        alert("Computer chose: " + computerChoice);
        
        const winner = determineWinner(userChoice, computerChoice);

        if (winner === 'user') {
            alert("You win this round!");
        } else if (winner === 'computer') {
            alert("Computer wins this round!");
        } else {
            alert("It's a tie this round!");
        }
    }

    if (userScore > computerScore) {
        alert("You win the game with a score of " + userScore + " to " + computerScore + "!");
    } else if (userScore < computerScore) {
        alert("Computer wins the game with a score of " + computerScore + " to " + userScore + "!");
    } else {
        alert("The game is a tie with both scores at " + userScore + "!");
    }
    
    // Reset scores for next game
    userScore = 0;
    computerScore = 0;
}



game();

