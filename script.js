function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if (b === 0) return "Error, division by zero."
    return a / b;
}

function typeCharacters(e) {
    const screen = document.getElementById('screen');

    let screenContent = screen.textContent.split("");
    let lastDigit = screenContent[screenContent.length - 1]
    let actualDigit = this.textContent;

    if (
        (
            lastDigit === '+' ||
            lastDigit === '−' ||
            lastDigit === '×' ||
            lastDigit === '÷' ||
            lastDigit === '.'
        ) && 
        (
            actualDigit === '+' ||
            actualDigit === '−' ||
            actualDigit === '×' ||
            actualDigit === '÷' ||
            actualDigit === '.'
        )
        )
    {
        screenContent.pop();
        screen.textContent = screenContent.join("") + actualDigit;
    } else if (
        (
        actualDigit === '+' ||
        actualDigit === '−' ||
        actualDigit === '×' ||
        actualDigit === '÷'
        ) && (
        screenContent.includes('+') ||
        screenContent.includes('−') ||
        screenContent.includes('×') ||
        screenContent.includes('÷')
        )
    ) {
        operate();
        screen.textContent = screen.textContent + actualDigit; 
    } else {
        screen.textContent = screenContent.join("") + actualDigit;
    }



    console.log(screenContent);
}

function erase() {
    const screen = document.getElementById('screen');
    let screenContent = screen.textContent.split("");
    screenContent.pop();
    screen.textContent = screenContent.join("");
}

function clearAll() {
    document.getElementById('screen').textContent = "";
}

function operate() {
    const screen = document.getElementById('screen');
    let screenContent = screen.textContent;

    if (screenContent.includes('+')){
        let operationArray = screenContent.split('+');
        let result = add(+operationArray[0], +operationArray[1]);
        screen.textContent = result;
    } else if (screenContent.includes('−')){
        let operationArray = screenContent.split('−');
        let result = subtract(+operationArray[0], +operationArray[1]);
        screen.textContent = result;
    } else if (screenContent.includes('×')){
        let operationArray = screenContent.split('×');
        let result = multiply(+operationArray[0], +operationArray[1]);
        screen.textContent = result;
    } else if (screenContent.includes('÷')){
        let operationArray = screenContent.split('÷');
        let result = divide(+operationArray[0], +operationArray[1]);
        screen.textContent = result;
    }


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

const keyDot = document.getElementById("kdot");

const keySum = document.getElementById("k+");
const keySubtrac = document.getElementById("k-");
const keyMulti = document.getElementById("kx");
const keyDivision = document.getElementById("k/");

const keyErase = document.getElementById("kback");
const keyClear = document.getElementById("kclear");
const keyEqual = document.getElementById("k=");


keyZero.addEventListener('click', typeCharacters);
keyOne.addEventListener('click', typeCharacters);
keyTwo.addEventListener('click', typeCharacters);
keyThree.addEventListener('click', typeCharacters);
keyFour.addEventListener('click', typeCharacters);
keyFive.addEventListener('click', typeCharacters);
keySix.addEventListener('click', typeCharacters);
keySeven.addEventListener('click', typeCharacters);
keyEight.addEventListener('click', typeCharacters);
keyNine.addEventListener('click', typeCharacters);

keyDot.addEventListener('click', typeCharacters);

keySum.addEventListener('click', typeCharacters);
keySubtrac.addEventListener('click', typeCharacters);
keyMulti.addEventListener('click', typeCharacters);
keyDivision.addEventListener('click', typeCharacters);

keyErase.addEventListener('click', erase);
keyClear.addEventListener('click', clearAll);
keyEqual.addEventListener('click', operate);



