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






