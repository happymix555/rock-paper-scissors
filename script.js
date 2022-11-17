let thisRoundInnerText = document.getElementById('roundCount').innerText;
let thisPlayerSelectedInnerText = document.getElementById('playerChoice').innerText;
let computerChoiceInnerText = document.getElementById('computerChoice').innerText;
let roundCount = 0;
let resetFlag = 0;
let computerChoice = '';
let buttonContainer = document.getElementById('btn-container');

let resetButton = document.createElement("button");
resetButton.setAttribute("id", "reset-btn");
resetButton.innerHTML = "Play Again!";
let resetButtonContainer = document.createElement('div');
resetButtonContainer.setAttribute("id", "reset-btn-container");
resetButtonContainer.appendChild(resetButton);

let bodyContainer = document.getElementsByTagName("BODY")[0];

let thisResultInnerText = document.getElementById('thisResult').innerText;

let thisResult = '';

let computerScore = 0;
let playerScore = 0;
let finalResultInnerText = document.getElementById('finalResult').innerText;

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

function showThisResult(thisResult){
    if(thisResult === 0){
        document.getElementById('thisResult').innerText = thisResultInnerText + 'Computer Win!';
    } else if(thisResult === 1){
        document.getElementById('thisResult').innerText = thisResultInnerText + 'Player Win!';
    } else {
        document.getElementById('thisResult').innerText = thisResultInnerText + 'Draw!';
    }
}

function countRound (){
    console.log('counting')
    if (resetFlag === 1){
        roundCount = 0;
        document.getElementById('roundCount').innerText = thisRoundInnerText;
        document.getElementById('playerChoice').innerText = thisPlayerSelectedInnerText;
        document.getElementById('computerChoice').innerText = computerChoiceInnerText;
        document.getElementById('finalResult').innerText = finalResultInnerText
        computerScore = 0;
        playerScore = 0;
        bodyContainer.removeChild(resetButtonContainer);
        bodyContainer.appendChild(buttonContainer);
        resetFlag = 0;
        return
    }
    if(roundCount === 4){
        // buttonContainer.appendChild(resetButton);
        bodyContainer.removeChild(buttonContainer);
        bodyContainer.appendChild(resetButtonContainer);
        if(computerScore > playerScore){
            document.getElementById('finalResult').innerText = finalResultInnerText + ' Computer Win!';
        } else if(computerScore < playerScore){
            document.getElementById('finalResult').innerText = finalResultInnerText + ' Player Win!';
        } else {
            document.getElementById('finalResult').innerText = finalResultInnerText + ' Draw!';
        }
    }
    roundCount += 1;
    document.getElementById('roundCount').innerText = thisRoundInnerText + ' ' + roundCount;
    // computerChoice = getComputerChoice();
    document.getElementById('computerChoice').innerText = computerChoiceInnerText + ' ' + computerChoice;
    console.log(thisResult);
    if(thisResult[1] === 0){
        computerScore += 1;
    } else if(thisResult[1] === 1){
        playerScore += 1;
    } else {
        //pass
    }
    const resetBtn = document.getElementById("reset-btn");
    try {
        // const resetBtn = document.getElementById("reset-btn");
        resetBtn.addEventListener('click',() => {   
            resetFlag = 1;
            countRound();
        });
    } catch (error) {
        console.log('error');
    }
    
}

const rockBtn = document.getElementById("rock-btn");
// rockBtn.addEventListener("click", rockBtnFunction, countRound);
rockBtn.addEventListener('click',() => {   
    rockBtnFunction();
    countRound();
    showThisResult(thisResult[1]);
    // rockBtnFunction();
});

function rockBtnFunction() {
    computerChoice = getComputerChoice();
    // document.getElementById("demo").innerHTML = "Hello World";
    // console.log('player select rock');
    thisResult = playRound('rock', computerChoice);
    // console.log(thisResult[1]);
    // console.log(roundCount);
    // console.log(computerChoice);
    // playRound('rock', );
    document.getElementById('playerChoice').innerText = thisPlayerSelectedInnerText + ' Rock';
}


const paperBtn = document.getElementById("paper-btn");
// rockBtn.addEventListener("click", rockBtnFunction, countRound);
paperBtn.addEventListener('click',() => {   
    paperBtnFunction();
    countRound();
    showThisResult(thisResult[1]);
    // rockBtnFunction();
});

function paperBtnFunction() {
    computerChoice = getComputerChoice();
    // document.getElementById("demo").innerHTML = "Hello World";
    // console.log('player select rock');
    thisResult = playRound('paper', computerChoice);
    // console.log(thisResult[1]);
    // console.log(roundCount);
    // console.log(computerChoice);
    // playRound('rock', );
    document.getElementById('playerChoice').innerText = thisPlayerSelectedInnerText + ' Paper';
}

const scissorsBtn = document.getElementById("scissors-btn");
// rockBtn.addEventListener("click", rockBtnFunction, countRound);
scissorsBtn.addEventListener('click',() => {   
    scissorsBtnFunction();
    countRound();
    showThisResult(thisResult[1]);
    // rockBtnFunction();
});

function scissorsBtnFunction() {
    computerChoice = getComputerChoice();
    // document.getElementById("demo").innerHTML = "Hello World";
    // console.log('player select rock');
    thisResult = playRound('scissors', computerChoice);
    // console.log(thisResult[1]);
    // console.log(roundCount);
    // console.log(computerChoice);
    // playRound('rock', );
    document.getElementById('playerChoice').innerText = thisPlayerSelectedInnerText + ' Scissors';
}

// const resetBtn = document.getElementById("reset-btn");
// try {
//     const resetBtn = document.getElementById("reset-btn");
//     resetBtn.addEventListener('click',() => {   
//         countRound();
//     });
// } catch (error) {
//     console.log('error');
// }
