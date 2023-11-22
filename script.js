// script.js

let currentValue = '';
let currentOperator = '';
let display = document.getElementById('display');
let operationDisplay = document.getElementById('operation-display'); // Nueva variable para mostrar la operación

function appendValue(value) {
    currentValue += value;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentValue !== '') {
        currentValue += ' ' + operator + ' ';
        currentOperator = operator;
        updateDisplay();
    }
}

function clearScreen() {
    currentValue = '';
    currentOperator = '';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(currentValue);
        operationDisplay.innerHTML = currentValue + ' = '; // Mostrar la operación antes del resultado
        currentValue = result.toString();
        updateDisplay();
    } catch (error) {
        display.value = 'Error';
    }
}

function updateDisplay() {
    display.value = currentValue;
}
