'use strict';
const player1EL = document.querySelector('.player--1');
const player0EL = document.querySelector('.player--0');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
let currentScore, activePlayer, scores, play;
//using arrow function
const initialize = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  play = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
}
//using arrow function
const switchPlayer = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
}

initialize();

btnNew.addEventListener('click', initialize);

btnRoll.addEventListener('click', function () {
  if (play) {
    diceEl.classList.remove('hidden');
    let roll = Math.trunc(Math.random() * 6 + 1);
    diceEl.src = `dice-${roll}.png`;

    if (roll !== 1) {
      currentScore += roll;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      console.log(roll, currentScore);
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (play) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      play = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('.player--active');
      console.log("Winner");
    } else {
      switchPlayer();
    }
  }
});
