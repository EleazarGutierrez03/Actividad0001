let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = undefined;

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
    display.style.backgroundColor = '#222';  // Restablece el color de fondo al borrar la pantalla
}

function deleteLastDigit() {
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay();
}

function appendNumber(number) {
    if (number === '0' && currentOperand === '0') return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplayColor(op);  // Cambia el color según la operación seleccionada
}

function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = math.add(prev, current);
            break;
        case '-':
            result = math.subtract(prev, current);
            break;
        case '*':
            result = math.multiply(prev, current);
            break;
        case '/':
            result = math.divide(prev, current);
            break;
        default:
            return;
    }
    currentOperand = result;
    operation = undefined;
    previousOperand = '';
    updateDisplay();
    updateDisplayColor();  // Cambia el color al realizar el cálculo
}

function updateDisplay() {
    display.innerText = currentOperand;
}

function updateDisplayColor(op = null) {
    let color;
    switch (op) {
        case '+':
            color = 'red';
            break;
        case '-':
            color = 'yellow';
            break;
        case '*':
            color = 'blue';
            break;
        case '/':
            color = 'green';
            break;
        default:
            color = '#222';  // Restablece el color después de calcular
    }
    display.style.backgroundColor = color;
}

clearDisplay();
