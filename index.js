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

