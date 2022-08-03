let options = ['rock', 'paper', 'scissors'];
let getComputerChoice = () => {
  let getRandomOption = limit => Math.floor(Math.random() * limit);
  return options[getRandomOption(3)];
};
let playRound = (playerSelection, computerSelection) => {
  let player = playerSelection.toLowerCase();
  let compu = computerSelection.toLowerCase();
  let message = `Player: ${player}, Computer: ${compu} = `
  if (player == 'rock' && compu == 'rock')
    return message + 'Tie'
  else if (player == 'rock' && compu == 'paper')
    return message + 'Computer Win!'
  else if (player == 'rock' && compu == 'scissors')
    return message + 'Player Win!'
  else if (player == 'paper' && compu == 'rock')
    return message + 'Player Win!'
  else if (player == 'paper' && compu == 'paper')
    return message + 'Tie'
  else if (player == 'paper' && compu == 'scissors')
    return message + 'Computer Win!'
  else if (player == 'scissors' && compu == 'rock')
    return message + 'Computer Win!'
  else if (player == 'scissors' && compu == 'paper')
    return message + 'Player Win!'
  else if (player == 'scissors' && compu == 'scissors')
    return message + 'Tie!'
}
let game = () => {
  let roundPlayer = 0;
  let roundComputer = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Rock, Paper or Scissors');
    let winner = playRound(playerSelection, getComputerChoice());
    console.log(winner);
    let lastLetters = winner.slice(-8);
    if (lastLetters == 'yer Win!')
      roundPlayer++
    else if (lastLetters == 'ter Win!')
      roundComputer++
  }
  if (roundPlayer > roundComputer)
    return 'Player Win The Game'
  else
    return  'Computer Win The Game'
}
