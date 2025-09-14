// Var Declarations
const ERROR_STRING = "Error!";

let firstNumber = 0;
let secondNumber;
let operator;

// Tests

const buttons = document.getElementById("buttons");
const screen = document.getElementById("screen")

buttons.addEventListener("click", e => {
    if(e.target.nodeName == "BUTTON"){
        checkButtonType(e.target);
        updateScreen();
    }
})

// Functions

function updateScreen(){
    screen.textContent = firstNumber;
    if(operator != undefined){
        screen.textContent += operator;
        if(secondNumber != undefined){
            screen.textContent += secondNumber;
        }
    } 
}

function checkButtonType(eventTarget){
    let buttonClicked = eventTarget.id;
    if(firstNumber == ERROR_STRING) {
        firstNumber = 0;
    }

    if(eventTarget.classList.contains("operator")) 
    {
        if(secondNumber == undefined)
        {
            operator = buttonClicked;
        }else{
            console.log("firstNumber: ", firstNumber, " secondNumber: ", secondNumber, " operator: ", operator);
            const calcul = operate(firstNumber, secondNumber, operator);

            operator = buttonClicked;

            secondNumber = undefined;

            firstNumber = calcul;
        }
    }
    if(eventTarget.classList.contains("number")) 
    {
        buttonClicked = parseInt(buttonClicked);

        if(operator == undefined) firstNumber = firstNumber * 10 + buttonClicked;
        else {
            if(secondNumber == undefined) secondNumber = buttonClicked;
            else secondNumber = secondNumber * 10 + buttonClicked;
        }
    }

    if(eventTarget.classList.contains("special")){
        switch (buttonClicked) {
            case "=":
                if(secondNumber != undefined){
                    firstNumber = operate(firstNumber, secondNumber, operator);
                    secondNumber = undefined;
                }
                operator = undefined;
                break;
            case "clear":
                firstNumber = 0;
                secondNumber, operator = undefined;
            case "back":
                if(secondNumber != undefined){
                    if(secondNumber < 10) secondNumber = undefined;
                    else secondNumber = (secondNumber - secondNumber % 10) / 10;
                }
                else if(operator != undefined) operator = undefined;
                else firstNumber = (firstNumber - firstNumber % 10) / 10;
                break;
            default:
                break;
        }
    }
}

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
        case "%":
            return modulo(x, y);
        case undefined:
            return x;
        default:
            console.error("Operator type is not defined in operate()!")
            return ERROR_STRING;
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
    if(y == 0) return ERROR_STRING;
    return x / y;
}

function modulo(x, y){
    return x % y;
}