'use strict';

// console.log(document.querySelector('.guess-message').textContent);

// document.querySelector('.guess-message').textContent = 'Правильно!';

// document.querySelector('.question').textContent = 7;

// document.querySelector('.score').textContent = 11;

// document.querySelector('.number-input').value = 13;

//76. Event listener -слушатель событий

// const eventHandlers = function () {
//    console.log(document.querySelector('.number-input').value);
//  }

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
let guessMessageEl = document.querySelector('.guess-message');
let questionEl = document.querySelector('.question');

const displayGuessMessage = function (messange) {
  document.querySelector('.guess-message').textContent = messange;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);

  //No input
  if (!guessingNumber) {
    // guessMessageEl.textContent = 'Введите число!';
    displayGuessMessage('Введите число!');

    //Player won
  } else if (guessingNumber === secretNumber) {
    // guessMessageEl.textContent = 'Правильно!';
    displayGuessMessage('Правильно!');
    questionEl.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    questionEl.style.width = '50rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Number from input is wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      // guessMessageEl.textContent =
      //   guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!';
      displayGuessMessage(
        guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      guessMessageEl.textContent = 'Game over!';
      displayGuessMessage('Game over!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //To high
  //  else if (guessingNumber > secretNumber) {
  //   if (score > 1) {
  //     guessMessageEl.textContent = 'Слишком много!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     guessMessageEl.textContent = 'Game over!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //To low
  // } else if (guessingNumber < secretNumber) {
  //   if (score > 1) {
  //     guessMessageEl.textContent = 'Слишком мало!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     guessMessageEl.textContent = 'Game over!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  // guessMessageEl.textContent = 'Начни угадывать!';
  displayGuessMessage('Начни угадывать!');
  document.querySelector('body').style.backgroundColor = 'black';
  questionEl.style.width = '25rem';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  questionEl.textContent = '???';
  document.querySelector('.number-input').value = '';
});
