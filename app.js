console.log('hello world!');
let inputValue = 0;
let people = 0;
let tipPercent = 0;

const inputAmount = document.querySelector('#inputamount');
const tipAmount = document.querySelector('#tipAmount');
const total = document.querySelector('#total');
const peopleNumber = document.querySelector('#people');
const reset = document.querySelector('#reset');


peopleNumber.addEventListener('input', function () {
    render();
});

inputAmount.addEventListener('input', function () {
    render();
});

// Need to add tip as parameter here
function generateTip(total, people) {
    return parseFloat(Number(total / people).toFixed(2));
};

function render() {
    inputValue = inputAmount.value;
    people = peopleNumber.value;
    if (peopleNumber.value === '') {
        total.textContent = `$${inputValue}`;
    } else {
        total.textContent = `$${generateTip(inputValue, people)}`;
    }
};

reset.addEventListener('click', () => {
    inputAmount.value = '';
    peopleNumber.value = '';
    total.textContent = '$0.00';
});
