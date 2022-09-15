console.log("Welcome to Rock-Paper-Scissors. Let's start");

let options=['ROCK', 'PAPER', 'SCISSORS'];

function random_item(items)
{
    return items[Math.floor(Math.random()*items.length)];
}

function getComputerChoice() {
    let choice=random_item(options);
    return choice;
}

function playerChoice() {
    let playerChoice = prompt('Rock/Paper/Scissors?');
    playerChoice = playerChoice.toUpperCase();
    return playerChoice;
}

function validatePlayerChoice(choice) {
    return options.includes(choice) ? true : false;
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

function game(num_rounds){
    console.log("Number of Rounds: ", num_rounds);
    
    let p="";
    
    let computer_wins = 0;
    let player_wins = 0;
    let ties = 0;

    for(let i=0; i<num_rounds; i++){
        c=getComputerChoice();
        while(validatePlayerChoice(p) == false){
            p=playerChoice();
        }
        console.log("Computer's pick: ", c, "\nYour pick: ", p)
        win = playerWinCheck(c, p);
        console.log(win);
        if (win == "tie"){
            ties++;
        }
        else if (win == "win"){
            player_wins++;
        }
        else {
            computer_wins++;
        }
        p="";
    }

    console.log("Summary: \nRounds Computer Won: ", computer_wins, "\nRounds You Won: ", player_wins, "\nTies: ", ties);
    if (player_wins === computer_wins){
        console.log("It's a tie!");
    }
    else if(player_wins > computer_wins){
        console.log("You Won!"); 
    }
    else {
        console.log("You Lost!");
    }
}

game(10);