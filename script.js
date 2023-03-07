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
    if(b==0){
        return 'cant divide by 0';
    }
    let num = a/b;
    return Math.round(num * 100000) / 100000; //round to 5 decimals
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

let firstNum = true;

let numberButtons = document.querySelectorAll('.num');
numberButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(!firstNum) {
            display.textContent = ''; //clear the display from second number entered
        }
        display.textContent = display.textContent + btn.textContent;
    });
});

let currentOp, firstNumber, secondNumber;
let firstOp = true;

let opButtons = document.querySelectorAll('.op');
opButtons.forEach((op) => {
    op.addEventListener('click', () => {
        if(firstOp) {
            currentOp = op.textContent;
            firstNumber = display.textContent;
            display.textContent = '';
            firstOp = false;
        } else {
            secondNumber = display.textContent;
            let result = operate(currentOp, firstNumber, secondNumber);
            currentOp = op.textContent;
            display.textContent = result;
            firstNumber = result;
            firstNum = false;
        }
    });
});

let equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', () => {
    secondNumber = display.textContent;
    console.log(firstNumber);
    console.log(secondNumber);
    console.log(currentOp);
    if (currentOp == undefined || firstNumber == undefined || secondNumber == undefined || firstNumber == '' || secondNumber == ''
         || currentOp == null|| firstNumber == null || secondNumber == null) {
        display.textContent = 'error';
    } else {
        display.textContent = operate(currentOp, firstNumber, secondNumber);
    }
});

let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    display.textContent = null;
    currentOp = null;
    firstNumber = null;
    secondNumber = null;
    firstOp = true;
});