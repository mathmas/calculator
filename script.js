// Var Declarations
let firstNumber;
let secondNumber;
let operator;

// Tests
console.log("Testing operate, operate(1,2,\"+\") => " , operate(1,2,"+")); // Test



function operate(x, y, operator){
    switch (operator) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(x, y);
        case "/":
            return divide(x, y);
        default:
            return "Error! Operator type";
    }
}

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    if(y == 0) return "ERROR!";
    return x / y;
}