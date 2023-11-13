function getComputerChoice() {
  const random = Math.random();

  if (random < 0.33) {
    return "Rock";
  } else if (random > 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
let W = "win";
let L = "lose";
let D = "Draw";
function playerRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (computerSelection === playerSelection) {
    return D;
  } else if (
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "rock" && playerSelection === "scissors")
  ) {
    return W;
  } else {
    return L;
  }
}
const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playerRound(playerSelection, computerSelection));

function game() {
  var player_score = 0;
  var computer_score = 0;
  for (let index = 0; index < 5; index++) {
    const m = playerRound(playerSelection, getComputerChoice());
    if (m == W) {
      player_score++;
      console.log("you win this round!");
    } else if (m == L) {
      computer_score++;
      console.log("computer wins this round!");
    } else {
      console.log("draw");
    }
  }

  console.log(player_score);
  console.log(computer_score);

  if (player_score > computer_score) {
    prompt("you win!");
  } else if (player_score < computer_score) {
    prompt("computer wins!");
  } else {
    prompt("draw");
  }
}

game();
