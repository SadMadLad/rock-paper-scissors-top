console.log("Welcome to Rock-Paper-Scissors. Let's start");

let options=['ROCK', 'PAPER', 'SCISSORS'];

function askRounds() {
    const rounds = prompt("Number of rounds?");
    let r = parseInt(rounds);

    if (isNaN(r)) r = 5;

    return r;
}

function random_item(items)
{
    return items[Math.floor(Math.random()*items.length)];
}

function getComputerChoice() {
    let choice=random_item(options);
    return choice;
}

function playerChoice() {
    let playerChoice = 'Rock';
    playerChoice = playerChoice.toUpperCase();
    return playerChoice;
}

function playerWinCheck(computer_choice, player_choice){
    if (computer_choice === player_choice)
        return "tie";
    if (
        (computer_choice === "ROCK" && player_choice === "PAPER") ||
        (computer_choice === "SCISSORS" && player_choice === "ROCK") ||
        (computer_choice === "PAPER" && player_choice === "SCISSORS")
    ) {
        return "win";
    }
    else {
        return "lose";
    }
}

function getPlayerChoice(e) {
    const currentRounds = document.querySelector('.round');
    const totalRounds = document.querySelector('.total-rounds');

    const ties = document.querySelector('.ties');
    const playerScore = document.querySelector('.player-score');
    const computerScore = document.querySelector('.computer-score');

    tS = parseInt(ties.textContent);
    pS = parseInt(playerScore.textContent);
    cS = parseInt(computerScore.textContent);

    let cR = parseInt(currentRounds.textContent);
    let tR = parseInt(totalRounds.textContent);


    if(cR >= tR) {
        return;
    };

    cR++;

    const playerPick = document.querySelector('.player-pick');
    const computerPick = document.querySelector('.computer-pick');

    const pP = e.target.getAttribute('choice');
    const cP = getComputerChoice();

    //Updating picks
    playerPick.textContent = pP;
    computerPick.textContent = cP;

    //Updating currentRounds
    currentRounds.textContent = cR; 
    console.log(currentRounds)

    //Who won the round
    const roundResult = document.querySelector('.round-result');
    score = playerWinCheck(cP, pP);
    roundResult.textContent = score;
    
    //Updating scores
    if (score === 'tie') {tS++}
    else if (score === 'lose') {cS++}
    else {pS++};

    currentRounds.textContent = cR;
    playerScore.textContent = pS;
    computerScore.textContent = cS;
    ties.textContent = tS;
    
    //Printing summary when game finishes
    if (cR >= tR){
        const summary = document.querySelector('.game-summary');
        if (pS == cS) {summary.textContent="It's a tie!"}
        else if (pS > cS) {summary.textContent="You won!"}
        else {summary.textContent="You Lost!"}
    }
}

function game(){

    const totalRounds = askRounds();
    //Setting Total Rounds
    const totalRoundsSpan = document.querySelector('.total-rounds');
    totalRoundsSpan.textContent = totalRounds;
    //Setting Up Listener for Choices
    const choiceButtons = document.querySelectorAll('.choice');
    choiceButtons.forEach(
        button => button.addEventListener('click', getPlayerChoice)
    );
}

game();