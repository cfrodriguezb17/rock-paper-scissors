let options = ['rock', 'paper', 'scissor'];
let computerWins = 0;
let userWins = 0;
let h2 = document.querySelector('h2.subtitle');
let res = document.querySelector('h2.result');
let getRandomInt = max => {
  let number = Math.floor(Math.random() * max);
  return number
} 
let option = document.addEventListener('click', (e) => {
  let userOption = e.target.getAttribute('alt');
  if (!userOption) return;
  let computerOption =  options[getRandomInt(3)];
  playRound(userOption, computerOption);
})
let playRound = (playerSelection, computerSelection) => {
  let result;
  if (playerSelection == computerSelection) {
    result = `Tie!`;
  } else if (playerSelection == 'rock' && computerSelection == 'scissor'){
    result = `Player Wins!`;
  } else if (playerSelection == 'paper' && computerSelection == 'rock'){
    result = 'Player Wins!';
  } else if (playerSelection == 'scissor' && computerSelection == 'paper'){
    result = 'Player Wins!';
  } else {
    result = 'Computer Wins!';
  }
  h2.textContent = `Player ${playerSelection} vs Computer ${computerSelection}`;
  res.textContent = result;
  if (result == 'Player Wins!'){
    userWins++;
  }else if(result == 'Computer Wins!'){
    computerWins++;
  }
  winGame();
}
let winGame = () => {
  if(userWins >= 5){
    h2.textContent = 'PLAYER WIN THE GAME!';
    res.textContent = 'PLAYER WIN THE GAME!';
    computerWins = 0;
    userWins = 0;
  }else if(computerWins >= 5){
    h2.textContent = 'COMPUTER WIN THE GAME!';
    res.textContent = 'COMPUTER WIN THE GAME!';
    computerWins = 0;
    userWins = 0;
  }
}
