let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = (target) => {
    target = Math.floor(Math.random()*10)
    return target;
}


const compareGuesses = (currentHumanGuess, computerGuess, targetGuess) => {
    let humanDifference = Math.abs(currentHumanGuess - targetGuess);
    let computerDifference = Math.abs(computerGuess - targetGuess);
    return humanDifference <= computerDifference
}


const updateScore = winner => {
    if (winner === 'human') {
        humanScore++
    } else if (winner === 'computer') {
        computerScore++
    }
}


const advanceRound = () => currentRoundNumber++