const choices = ["rock", "paper", "scissors"];

function computerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game(playerChoice) {
    const computer = computerChoice();
    const result = playRound(playerChoice, computer);
    const resultElement = document.querySelector(".result");
    resultElement.textContent = result;
}

const choiceButtons = document.querySelectorAll(".choice");
choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.id;
        game(playerChoice);
    });
});
