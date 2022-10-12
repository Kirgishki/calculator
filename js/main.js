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
        case "*":
            return multiply(firstNum, secNum);
        case "/":
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



Array.from(numbersCalc).forEach(num => {
    num.addEventListener('click', () => {
        displayClickedNumber(num.innerText);
    });
});



btnClearAll.addEventListener('click', clearDisplay);
btnDelete.addEventListener('click', deleteNum);

function displayClickedNumber(numValue){
    if(resultDisplay.textContent == "0" && numValue == 0){
        resultDisplay.textContent == 0;
        return;
    }else if(resultDisplay.innerText == "0" && numValue != "."){
        resultDisplay.textContent = "";
    }else if(resultDisplay.innerText.includes('.') && numValue == "."){
        return;
    }
    resultDisplay.textContent += numValue;
}

function clearDisplay(){
    resultDisplay.innerText = 0;
    inputDisplay.innerText = "";
}

function deleteNum(){
    let lastIndex = resultDisplay.innerText.length - 1;
    resultDisplay.innerText =  resultDisplay.innerText.slice(0, lastIndex); 
    if(lastIndex == 0){
        resultDisplay.innerText = 0;
    }
}



