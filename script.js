function add() {
    let sum = 0;
    for(let i in arguments){
        sum += arguments[i];
    }
    return sum;
}

function subtract() {
    let diference = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        diference -= arguments[i];
    }
    return diference;
}

function multiply() {
    let product = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        product *= arguments[i];
    }
    return product;
}

function divide() {
    let quotient = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        quotient /= arguments[i];
    }
    return quotient;
}

function operate(operator, ...args) {
    
}