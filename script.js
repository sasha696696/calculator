let displayValue = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

const display = document.getElementById('display');

function updateDisplay() {
    display.textContent = displayValue;
}

function appendToDisplay(number) {
    if (displayValue === '0' || waitingForSecondOperand) {
        displayValue = number;
        waitingForSecondOperand = false;
    } else {
        displayValue += number;
    }
    updateDisplay();
}


function setOperation(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
        operator = op;
        waitingForSecondOperand = true;
    } else if (!waitingForSecondOperand) {
        calculate();
        operator = op
        waitingForSecondOperand = true;
        firstOperand = parseFloat(displayValue);
    } else {
        operator = op
    }
}


function calculate() {
    if (firstOperand === null || operator === null || waitingForSecondOperand) {
        return;
    }

    const secondOperand = parseFloat(displayValue);
    let result;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if(secondOperand === 0) {
                result = 'Error'
            } else {
                result = firstOperand / secondOperand;
            }
            break;
        default:
            return;
    }

    displayValue = String(result);
    firstOperand = result;
    operator = null;
    waitingForSecondOperand = true;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}


updateDisplay();