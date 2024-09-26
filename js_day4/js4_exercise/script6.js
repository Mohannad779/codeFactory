let playerOneName;
let playerTwoName;
let playerOneRoll;
let playerTwoRoll;

// Get player names
playerOneName = prompt("Enter player one's name:");
playerTwoName = prompt("Enter player two's name:");

// Display player names
document.getElementById("header-title").innerHTML = `${playerOneName} vs. ${playerTwoName}`;
document.getElementById("player-one-name").innerHTML = playerOneName;
document.getElementById("player-two-name").innerHTML = playerTwoName;

// Add event listeners to roll buttons
document.getElementById("roll-btn-one").addEventListener("click", rollDiceOne);
document.getElementById("roll-btn-two").addEventListener("click", rollDiceTwo);

// Roll dice functions
function rollDiceOne() {
    playerOneRoll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("roll-result-one").innerHTML = `You rolled a ${playerOneRoll}!`;
    checkWinner();
}

function rollDiceTwo() {
    playerTwoRoll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("roll-result-two").innerHTML = `You rolled a ${playerTwoRoll}!`;
    checkWinner();
}

// Check winner function
function checkWinner() {
    if (playerOneRoll && playerTwoRoll) {
        if (playerOneRoll > playerTwoRoll) {
            document.getElementById("winner-announcement").innerHTML = `${playerOneName} wins!`;
        } else if (playerTwoRoll > playerOneRoll) {
            document.getElementById("winner-announcement").innerHTML = `${playerTwoName} wins!`;
        } else {
            document.getElementById("winner-announcement").innerHTML = "It's a tie!";
        }
    }
}