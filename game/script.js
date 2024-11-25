document.addEventListener('DOMContentLoaded', function () {
  let level = document.getElementById('level').value;

  if (level == 'easy') {
    let machineNumber = Math.floor(Math.random() * 10) + 1;
    let userGuess = null;
    let gameCount = 0;

    do {
      userGuess = parseInt(prompt('Enter a number between 1 and 10'));

      if (isNaN(userGuess) || userGuess > 10 || userGuess < 1) {
        alert('Please enter a number between 1 and 10');
        continue;
      }

      gameCount++;
      if (userGuess > machineNumber) {
        alert(`${userGuess} is too high!`);
      } else if (userGuess < machineNumber) {
        alert(`${userGuess} is too low!`);
      } else if (userGuess === machineNumber) {
        alert(`Congratulations! You guessed my number!`);
        alert(`you guessed on ${gameCount} try`);
      }

      if (gameCount === 10) {
        alert(`Game over! The number was ${machineNumber}`);
        break;
      }
    } while (userGuess !== machineNumber);
  } else if (level == 'normal') {
    let machineNumber = Math.floor(Math.random() * 50) + 1;
    let userGuess = null;
    let gameCount = 0;

    do {
      userGuess = parseInt(prompt('Enter a number between 1 and 50'));

      if (isNaN(userGuess) || userGuess > 50 || userGuess < 1) {
        alert('Please enter a number between 1 and 50');
        continue;
      }

      gameCount++;
      if (userGuess > machineNumber) {
        alert(`${userGuess} is too high!`);
      } else if (userGuess < machineNumber) {
        alert(`${userGuess} is too low!`);
      } else if (userGuess === machineNumber) {
        alert(`Congratulations! You guessed my number!`);
        alert(`you guessed on ${gameCount} try`);
      }

      if (gameCount === 10) {
        alert(`Game over! The number was ${machineNumber}`);
        break;
      }
    } while (userGuess !== machineNumber);
  } else if (level == 'hard') {
    let machineNumber = Math.floor(Math.random() * 100) + 1;
    let userGuess = null;
    let gameCount = 0;

    do {
      userGuess = parseInt(prompt('Enter a number between 1 and 100'));

      if (isNaN(userGuess) || userGuess > 100 || userGuess < 1) {
        alert('Please enter a number between 1 and 100');
        continue;
      }

      gameCount++;
      if (userGuess > machineNumber) {
        alert(`${userGuess} is too high!`);
      } else if (userGuess < machineNumber) {
        alert(`${userGuess} is too low!`);
      } else if (userGuess === machineNumber) {
        alert(`Congratulations! You guessed my number!`);
        alert(`you guessed on ${gameCount} try`);
      }

      if (gameCount === 10) {
        alert(`Game over! The number was ${machineNumber}`);
        break;
      }
    } while (userGuess !== machineNumber);
  }
});
