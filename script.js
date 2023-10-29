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

function operate(e) {
    const screen2 = document.getElementById('screen');
    screen2.textContent += this.textContent;
}


//Get key elements
const keyZero = document.getElementById("k0");
const keyOne = document.getElementById("k1");
const keyTwo = document.getElementById("k2");
const keyThree = document.getElementById("k3");
const keyFour = document.getElementById("k4");
const keyFive = document.getElementById("k5");
const keySix = document.getElementById("k6");
const keySeven = document.getElementById("k7");
const keyEight = document.getElementById("k8");
const keyNine = document.getElementById("k9");
const keySum = document.getElementById("k+");
const keySubtrac = document.getElementById("k-");
const keyMulti = document.getElementById("kx");
const keyDivision = document.getElementById("k/");
const keyEqual = document.getElementById("k=");


keyZero.addEventListener('click', operate);
keyOne.addEventListener('click', operate);
keyTwo.addEventListener('click', operate);
keyThree.addEventListener('click', operate);
keyFour.addEventListener('click', operate);
keyFive.addEventListener('click', operate);
keySix.addEventListener('click', operate);
keySeven.addEventListener('click', operate);
keyEight.addEventListener('click', operate);
keyNine.addEventListener('click', operate);
keySum.addEventListener('click', operate);
keySubtrac.addEventListener('click', operate);
keyMulti.addEventListener('click', operate);
keyDivision.addEventListener('click', operate);
keyEqual.addEventListener('click', operate);



