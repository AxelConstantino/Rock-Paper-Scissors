
// Función para obtener la elección aleatoria de la computadora
const getComputerChoice = (str1, str2, str3) => { 
    const weapons = [str1, str2, str3];
    const randomAnswer = Math.floor(Math.random() * weapons.length);
    return weapons[randomAnswer];
}

// Función para jugar una sola ronda de Piedra, Papel o Tijeras
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock") {
        return "Tie";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors") {
        return "Tie";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper") {
        return "Tie";
    } else {
        return "Please enter a correct weapon";
    }
}

// Función para jugar el juego completo de 5 rondas
const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Hi, choose your weapon: Rock, Paper, or Scissors");
        const computerSelection = getComputerChoice("rock", "paper", "scissors");
        const result = playRound(playerSelection, computerSelection);

        console.log(result);

        // Incrementar la puntuación según el resultado de la ronda
        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
    }

    // Mostrar el ganador del juego basado en la puntuación
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie! No one wins.");
    }
}

// Iniciar el juego
game();