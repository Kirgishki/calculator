function add(firstNum, secNum){
    return Number(firstNum) + Number(secNum);
}

function subtract(firstNum, secNum){
    return Number(firstNum) - Number(secNum);
}

function multiply(firstNum, secNum){
    return Number(firstNum) * Number(secNum);
}

function divide(firstNum, secNum){
    return Number(firstNum) / Number(secNum);
}

function operate(operator, firstNum, secNum){
    switch (operator) {
        case "+":
            return add(firstNum, secNum);
        case "-":
            return subtract(firstNum, secNum);
        case "x":
            return multiply(firstNum, secNum);
        case "÷":
            return divide(firstNum, secNum);
        default:
            break;
    }
}

const resultDisplay = document.querySelector("#result");
const inputDisplay = document.querySelector("#userInput");
const numbersCalc = document.querySelectorAll(".number");
const btnClearAll = document.querySelector("#btnAllClear");
const btnDelete = document.querySelector("#btnDelete");
const operators = document.querySelectorAll(".operand");
const btnEqual = document.querySelector("#btnEqual");

var resetScreen = false;
var resetAllScreens = false;
var firstValue = 0;
var secondValue = 0;
var operandValue = "";

Array.from(numbersCalc).forEach(num => {
    num.addEventListener('click', () => {
        displayClickedNumber(num.innerText);
    });
});

Array.from(operators).forEach(operand => {
    operand.addEventListener('click', () => {
        if(inputDisplay.innerText == ""){
            operandValue = operand.innerText;
            firstValue = resultDisplay.innerText;
            secondValue = resultDisplay.innerText;
            inputDisplay.innerText = firstValue + " " + operandValue;
        }else if(inputDisplay.textContent.split(" ").length == 2){
            if(!resetScreen){
                secondValue = resultDisplay.innerText;
                firstValue = displayResult();
                operandValue = operand.innerText;
                inputDisplay.innerText = firstValue + " " + operandValue;
            }else{
                operandValue = operand.innerText;
                inputDisplay.innerText = firstValue + " " + operandValue;
                secondValue = resultDisplay.innerText;
            }
            
        }else if(inputDisplay.innerText.split(" ").length > 2){
            operandValue = operand.innerText;
            inputDisplay.innerText = firstValue + " " + operandValue;
        }
        resetScreen = true;
    });
});

btnEqual.addEventListener('click', () => {
    if(inputDisplay.textContent.split(" ").length == 2){
        secondValue = resultDisplay.innerText;
        inputDisplay.innerText = firstValue + " " + operandValue + " " + secondValue + " =";
        firstValue = displayResult();
    }
});

btnClearAll.addEventListener('click', clearDisplay);
btnDelete.addEventListener('click', deleteNum);

function displayResult(){
    if(secondValue == 0 && operandValue == "÷"){
        clearDisplay();
        alert("Cannot divide by zero");
    }
    let result = operate(operandValue, firstValue, secondValue);
    if(result.toString().includes(".") && result.toString().split(".")[1].length > 2){
        result = result.toFixed(2);
    }
    resultDisplay.innerText = result;
    return result;
}

function displayClickedNumber(numValue){
    if(resetScreen){
        resultDisplay.innerText = '0';
        resetScreen = false;
    }else if(resetAllScreens){
        clearDisplay();
        resetAllScreens = false;
    }
    if(resultDisplay.innerText == "0" && numValue == 0){
        resultDisplay.innerText == 0;
        return;
    }else if(resultDisplay.innerText == "0" && numValue != "."){
        resultDisplay.innerText = "";
    }else if(resultDisplay.innerText.includes('.') && numValue == "."){
        return;
    }
    resultDisplay.innerText += numValue;
}

function clearDisplay(){
    firstValue = 0;
    secondValue = 0;
    operandValue = "";
    resultDisplay.innerText = 0;
    inputDisplay.innerText = "";
}

function deleteNum(){
    resetScreen = false;
    resetAllScreens = false;
    let lastIndex = resultDisplay.innerText.length - 1;
    resultDisplay.innerText =  resultDisplay.innerText.slice(0, lastIndex); 
    if(lastIndex == 0){
        resultDisplay.innerText = 0;
    }
}



