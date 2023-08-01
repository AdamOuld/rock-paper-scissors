const result = document.getElementById("prompt");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const compScore = document.getElementById("compScore");
const playerScore = document.getElementById("playerScore");
const btnList = document.querySelectorAll(".button")
const reset = document.getElementById("reset")
let pScore = 0;
let cScore = 0;

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random() * 3)]
}

function disableButtons() {
    btnList.forEach(btn => {
        btn.disabled = true;
    })
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
       (playerSelection == "Paper" && computerSelection == "Rock") ||
       (playerSelection == "Scissors" && computerSelection == "Paper")) {
        pScore++;
        if (pScore == 5) {
            result.textContent = "You won the game!"
            playerScore.textContent = "Player: " + pScore;
            disableButtons()
            return
        }
        result.textContent = "You won this round";
        playerScore.textContent = "Player: " + pScore;
    }
    else if (playerSelection == computerSelection) {
        result.textContent = "You tied this round";
    }
    else {
        cScore++;
        if (cScore == 5) {
            result.textContent = "You lost the game."
            compScore.textContent = "Computer: " + cScore;
            disableButtons()
            return
        }
        result.textContent = "You lost this round";
        compScore.textContent = "Computer: " + cScore;
    }
    console.log(playerSelection)
    console.log(computerSelection)
}

btnList.forEach(btn => {
    btn.addEventListener("click", () => {
        playRound(btn.textContent);
    })
})

reset.addEventListener("click", () => {
    window.location.reload();
})






