// === Section: Computer’s random choice ===
function getComputerChoice() {
  // Generate a random integer 0, 1, or 2
  const num = Math.floor(Math.random() * 3);

  // Map 0 → rock, 1 → paper, 2 → scissors
  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// === Section: Human’s choice via prompt ===
function getHumanChoice() {
  // Ask the user for their choice
  const userChoice = prompt("Rock, Paper, or Scissors?");
  // Normalize to lowercase
  return userChoice.toLowerCase();
}

// === Section: Main game runner (5 rounds) ===
function playGame() {
  // Initialize scores for this session
  let humanScore = 0;
  let computerScore = 0;

  // === Section: Play a single round ===
  function playRound(humanChoice, computerChoice) {
    // Normalize inputs
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    // Tie
    if (humanChoice === computerChoice) {
      return "It's a tie! You both chose " + humanChoice;
    }
    // Human wins
    else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      return "You win! Rock beats Scissors";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      return "You win! Paper beats Rock";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      return "You win! Scissors beats Paper";
    }
    // Computer wins
    else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      return "You lose! Paper beats Rock";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      return "You lose! Scissors beats Paper";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      return "You lose! Rock beats Scissors";
    }
  }

  // Play 5 rounds
  for (let round = 1; round <= 5; round++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    console.log(`Round ${round}: ${result}`);
  }

  // Final scores and overall winner
  console.log(`Final Scores - You: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie game!");
  }
}

// === Section: Start the game ===
playGame();