const choices = document.querySelectorAll('.choice');
const scoreValue = document.querySelector('#scoreValue');
let currentScore = 0;

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    choices.forEach(choice => {
      choice.classList.remove('selected');
    });
    e.target.classList.add('selected');

    if (e.target.id === 'A') {
      currentScore += 1;
    }
    scoreValue.textContent = currentScore;
  });
});
