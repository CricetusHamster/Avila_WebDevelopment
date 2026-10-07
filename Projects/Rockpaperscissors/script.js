let choices = ["Rock", "Paper", "Scissors"];
let playerDisplay = document.getElementById("playerDisplay");
let computerDisplay = document.getElementById("computerDisplay");
let resultDisplay = document.getElementById("resultDisplay");
let playerCounter = 0;
let computerCounter = 0;
function startGame(playerChoice){
    let computerChoice = choices [Math.floor(Math.random()*3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "Tie";
    }
    else{
        switch(playerChoice){
            case "Rock":
                result = (computerChoice === "Scissors")? "You Win": "You Lose";
                break;
            case "Paper":
                result = (computerChoice === "Rock")? "You Win": "You Lose";
                break;
            case "Scissors":
                result = (computerChoice === "Paper")? "You Win": "You Lose";
                break;
        }
    }
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = `Result: ${result}`;

    switch(result){
        case "You Win":
            playerCounter++;
            document.getElementById("playerScore").innerHTML = "Player Score: " + playerCounter;
            break;
        case "You Lose":
            computerCounter++
            document.getElementById("computerScore").innerHTML = "Computer Score: " + computerCounter
    }
    
    if(playerCounter === 5) {
        window.alert("Player Wins!");
        restartGame();
    }
    else if(computerCounter === 5) {
        window.alert("Computer Wins!");
        restartGame();
    }
}

function restartGame(){
    playerCounter = 0;
    computerCounter = 0;
    document.getElementById("playerScore").innerHTML = "Player Score: " + playerCounter;
    document.getElementById("computerScore").innerHTML = "Computer Score: " + computerCounter;
    playerDisplay.textContent = "Player:";
    computerDisplay.textContent = "Computer:";
    resultDisplay.textContent = "Result:";
}