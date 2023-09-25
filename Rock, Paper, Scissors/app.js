// users choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase(); 

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Wrong input was typed in or check for spelling erros');
    }
}
// computers random choice
const getComputerChoice = () => {
   const randomNumber = Math.floor(Math.random() * 3);
   switch(randomNumber) {
    case 0: 
        return'rock';
    case 1: 
        return'paper';
    case 2: 
        return 'scissors';
   }
};

// compare choices
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'This game is a tie!';
    } 
    
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer has won!';
        } else {
            return 'The player has won';
        }
    } 

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors' ) {
            return 'The computer has won!';
        } else {
            return 'The player has won';
        }
    } 

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock' ) {
            return 'The computer has won!';
        } else {
            return 'The player has won';
        }
    } 
};

// start program and see who won
const playGame = () => {
   const userChoice = getUserChoice('Rock');
   const computerChoice = getComputerChoice('scissors');

   console.log('You threw: ' + userChoice);
   console.log('The computer threw: ' + computerChoice);

   console.log(determineWinner(userChoice, computerChoice));

};
playGame();