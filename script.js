// console.log('Hello stranger!');

function getComputerChoice() {
    const items = ['Rock', 'Paper', 'Scissors'];
    var item = items[Math.floor(Math.random()*items.length)];
    return item
}

function playRound(playerSelection, computerSelection){
    // console.log(playerSelection.toLowerCase());
    let _playerSelection = playerSelection.toLowerCase();
    let _computerSelection = computerSelection.toLowerCase();
    // console.log(_playerSelection);
    // console.log(_computerSelection);
    const currentWinnerAndLoser = [
        ['rock', 'paper', 'scissors'],
        ['paper', 'scissors', 'rock'],
        ['scissors', 'rock', 'paper']
    ];
    if (_computerSelection === _playerSelection){
        return(['Draw!', 2]);
    }
    for (let i = 0; i < 3; i++) {
        // console.log(currentWinnerAndLoser[i]);
        // console.log(i);
        if (currentWinnerAndLoser[i][0] === _playerSelection) {
            for (let j = 1; j < 3; j++) {
                if (currentWinnerAndLoser[i][j] === _computerSelection && j === 1){
                    // return('computer won');
                    return(['You Lose! ' + _computerSelection.toUpperCase() + ' beats ' + _playerSelection.toUpperCase(), 0]);
                }
                else {
                    return(['You Win! ' + _playerSelection.toUpperCase() + ' beats ' + _computerSelection.toUpperCase(), 1]);
                }
            }
        }
    }
}

function game(){
    let computerScore = 0;
    let playerScore = 0;
    //loop 5 times
    for (let round = 0; round < 5; round++){
        //take user input
        let playerChoice = prompt("What's your choice?");
        //take computer input
        let computerChoice = getComputerChoice();
        //find winner
        let results = playRound(playerChoice, computerChoice);
        //console.log the winner
        console.log(results[0]);
        //plus one count to the winner
        if (results[1] === 0){
            computerScore += 1;
        } else if (results[1] === 1){
            playerScore += 1;
        } else {
            //pass
        }
    }
    //return the most win count
    if (computerScore > playerScore) {
        console.log('Cat will conquer the world!');
    } else if (playerScore > computerScore){
        console.log('Too soon kitty!');
    } else {
        console.log('Let cuddle meow meow.');
    }

}
// let item = getComputerChoice();
// console.log(item);
// console.log(getComputerChoice());
// console.log(playRound('scissors', 'paper'));
game();