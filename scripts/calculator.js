let calculation = '';

function updateCalculation(character) {
  calculation += character;
  document.querySelector('.js-show-result').innerHTML = calculation;
}