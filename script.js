//operations 
//This section is responsible for carrying out the operations

function add(a,b) {
    return Math.round((a + b) * 10000)/10000;
}

function subtract(a,b) {
    return Math.round((a - b) * 10000)/10000;
}

function multiply(a,b) {
    return Math.round((a * b) * 10000)/10000;
}

function divide(a,b) {
    if (b === 0) return "Error, division by zero."
    return Math.round((a / b) * 10000)/10000;
}


//This function is responsible for placing the numbers and operands on the screen
function typeCharacters(e) {
    const screen = document.getElementById('screen');

    let screenContent = screen.textContent.split("");
    let lastDigit = screenContent[screenContent.length - 1]
    let actualDigit = this.textContent;

    if (screenContent.length > 19) return;

    //The first 'if' is to avoid puting 2 or more operators in sequence
    //The second 'if' is to verify if there is already an operand, if true it will start the calculation
    //and add the new operator after the result of the last operation
    //The third 'if' is to verify if there is already a dot in the left side of the operand
    //The fourth 'if' is to verify if there is already a dot in the right side of the operand
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
    } else if (actualDigit === "." && screenContent.includes('.') && 
    (
        !screenContent.includes('+') &&
        !screenContent.includes('−') &&
        !screenContent.includes('×') &&
        !screenContent.includes('÷')
    )) 
    {
        return;
    } else if (actualDigit === '.' && 
    (
        screenContent.includes('+') ||
        screenContent.includes('−') ||
        screenContent.includes('×') ||
        screenContent.includes('÷')
    )) { 
        let operator = verifyOperator();
        let operand2 = screen.textContent.split(operator)[1];
        console.log(operand2);
        if (operand2.includes('.')) {
            return;
        } else {
            screen.textContent = screenContent.join("") + actualDigit;
        }
    } else {
        screen.textContent = screenContent.join("") + actualDigit;
    }



    console.log(screenContent);
} 

function verifyOperator () {
    const screen = document.getElementById('screen');
    let screenContent = screen.textContent;

    if (screenContent.includes('+')){
        return '+'
    } else if (screenContent.includes('−')){
        return '−'
    } else if (screenContent.includes('×')){
        return '×'
    } else if (screenContent.includes('÷')){
        return '÷'
    }
}

function erase() {
    const screen = document.getElementById('screen');
    let screenContent = screen.textContent.split("");
    screenContent.pop();
    screen.textContent = screenContent.join("");
}

function clearAll() {
    document.getElementById('screen').textContent = "";
    document.getElementById('history').textContent = "";
}

function operate() {
    const screen = document.getElementById('screen');
    const history = document.getElementById('history');
    let screenContent = screen.textContent;

    let operation = screen.textContent


    if (screenContent.includes('+')){
        let operationArray = screenContent.split('+');
        let result = add(+operationArray[0], +operationArray[1]);
        history.textContent = screenContent + " = " + result
        screen.textContent = result;
    } else if (screenContent.includes('−')){
        let operationArray = screenContent.split('−');
        let result = subtract(+operationArray[0], +operationArray[1]);
        history.textContent = screenContent + " = " + result
        screen.textContent = result;
    } else if (screenContent.includes('×')){
        let operationArray = screenContent.split('×');
        let result = multiply(+operationArray[0], +operationArray[1]);
        history.textContent = screenContent + " = " + result
        screen.textContent = result;
    } else if (screenContent.includes('÷')){
        let operationArray = screenContent.split('÷');
        let result = divide(+operationArray[0], +operationArray[1]);
        if (result === "Error, division by zero.") {
            history.textContent = result;
            screen.textContent = "";
        } else {
            history.textContent = screenContent + " = " + result
            screen.textContent = result;
        }
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

//atribute event listeners to the key elements
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