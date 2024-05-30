const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');

function checkUserInput() {
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert('Please provide a decimal number');
    return;
  }

  decimalToBinary(parseInt(numberInput.value));

  numberInput.value = '';
}

convertBtn.addEventListener('click', checkUserInput);

numberInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkUserInput();
  }
});

function decimalToBinary(input) {
  const inputs = [];
  const quotients = [];
  const remainders = [];

  if (input === 0) {
    result.innerText = '0';
    return;
  }

  while (input > 0) {
    const quotient = Math.floor(input / 2);
    const remainder = input % 2;

    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);

    input = quotient;
  }

  result.innerText = remainders.reverse().join('');
}
