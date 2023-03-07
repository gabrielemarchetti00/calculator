function add(a,b){
    return +a + +b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(o,a,b){
    let result;
    switch(o){
        case '+':
            result = add(a,b);
            break;
        case '-':
            result = subtract(a,b);
            break;
        case '*':
            result = multiply(a,b);
            break;
        case '/':
            result = divide(a,b);    
    }
    return result;
}

let display = document.querySelector('.display');

let numberButtons = document.querySelectorAll('.num');
numberButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        display.textContent = display.textContent + btn.textContent;
    });
});

let currentOp, firstNumber, secondNumber;

let opButtons = document.querySelectorAll('.op');
let firstTime = true;
opButtons.forEach((op) => {
    op.addEventListener('click', () => {
        if(firstTime) {
            currentOp = op.textContent;
            firstNumber = display.textContent;
            display.textContent = '';
            firstTime = false;
        } else {
            secondNumber = display.textContent;
            display.textContent = operate(currentOp, firstNumber, secondNumber);
            firstTime = true;
        }
    });
});

let equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', () => {
    secondNumber = display.textContent;
    display.textContent = operate(currentOp, firstNumber, secondNumber);
});