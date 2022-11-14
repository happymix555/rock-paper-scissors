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
    for (let i = 0; i < 3; i++) {
        // console.log(currentWinnerAndLoser[i]);
        // console.log(i);
        if (currentWinnerAndLoser[i][0] === _playerSelection) {
            for (let j = 1; j < 3; j++) {
                if (currentWinnerAndLoser[i][j] === _computerSelection && j === 1){
                    // return('computer won');
                    return('You Lose! ' + _computerSelection.toUpperCase() + ' beats ' + _playerSelection.toUpperCase());
                }
                else {
                    return('You Win! ' + _playerSelection.toUpperCase() + ' beats ' + _computerSelection.toUpperCase());
                }
            }
        }
    }
}
let item = getComputerChoice();
// console.log(item);
// console.log(getComputerChoice());
console.log(playRound('scissors', 'paper'));