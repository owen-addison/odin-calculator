let dispVal = '';
let a = '';
let b = '';

let prevNum = '';
let currNum = '';
let operator = '';

let opClicked = false;


const currentDisplay = document.querySelector('.currentNumber');
const previousDisplay = document.querySelector('.previousNumber');

window.addEventListener('keydown', handleKeyPress);

const buttons = document.querySelectorAll('.btn-num');

const operators = document.querySelectorAll('.btn-op');

const clrBtnID = document.getElementById('btn-clr').id;

const clearBtn = document.querySelector('#btn-clr');
// Add event listener to clear button to call operate function
clearBtn.addEventListener('click', clearAll);

const eqlBtnID = document.getElementById('btn-eql').id;

const equals = document.querySelector('#btn-eql');
// Add event listener to equals button to call operate function
equals.addEventListener('click', () => {
    if (currNum != '' && prevNum != '') {
        operate();
    }
});


// Add event listener to number buttons
buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
    });
});

function handleNumber(number) {
    if (number === '.' && currNum.includes('.')) {
        return;
    }

    currNum += number;  // If number button append it to end of string
    changeCurrentDisplay(currNum); // Display new string
}

// Add event listener to operate buttons
operators.forEach(btn => {
    btn.addEventListener('click', (e) => {
        handleOperator(e.target.textContent);
    });
});

function handleOperator(op) {
    // Check whether operator is - and follows either x or /
    if (operator === 'x' && op === '-') {
        currNum = op;
        changeCurrentDisplay(currNum);
        return;
    } else if (operator === '/' && op === '-') {
        currNum = op;
        changeCurrentDisplay(currNum);
        return;
    }

    if (prevNum === '') {
        prevNum = currNum;
        operatorCheck(op);
    } else if (currNum === '') {
        operatorCheck(op);
    } else {
        operate();
        operator = op;
        currNum = '';
        changeCurrentDisplay('0');
        changePreviousDisplay(prevNum + ' ' + operator);
    }
}

function operatorCheck(string) {
    operator = string;
    changePreviousDisplay(prevNum + ' ' + operator);
    changeCurrentDisplay('0');
    currNum = '';
}

// Clear function
function clearAll() {
    prevNum = '';
    currNum = '';
    changePreviousDisplay(prevNum);
    changeCurrentDisplay('0');
}

// Change current number display function
function changeCurrentDisplay(string) {
    if (string.length <= 11) {
        currentDisplay.textContent = string;
    } else {
        currentDisplay.textContent = string.slice(0, 11) + "...";
    }
};

// Change previous number display function
function changePreviousDisplay(string) {
    previousDisplay.textContent = string;
    // console.table(objArray);
};

// Addition function
function add(a, b) {
    return a + b;
};

// Subtraction function
const subtract = function(a, b) {
	return a - b;
};

// Multiplication function
const multiply = function(a, b) {
    return a * b;
};

// Division function
const divide = function(a, b) {
    return a / b;
};

// Call correct operation
function operate() {
    operator = operator.toLowerCase();
    const a = Number(prevNum);
    const b = Number(currNum);
    let result = 0;

    // Return correct operation
    if ( operator === '+' ) {
        result = add(a, b);
    } else if ( operator === '-' ) {
        result = subtract(a, b);
    } else if ( operator === '*' || operator.toLowerCase() === 'x' ) {
        result = multiply(a, b);
    } else if ( operator === '/' ) {
        if (b <= 0)
        {
            result = "ERROR";
            clearAll();

            changePreviousDisplay('');
            changeCurrentDisplay(result);
            return;
        } else {
            result = divide(a, b);
        }
    }

    result = roundNumber(result);
    result = result.toString();
    currNum = result;
    prevNum = result;

    changeCurrentDisplay(currNum);
    changePreviousDisplay('');

    currNum = '';
    // console.log(currNum, prevNum);
};

function roundNumber(num) {
    return Math.round(num * 100000) / 100000;
}

function handleKeyPress(e) {
    e.preventDefault();
    if (e.key >= 0 && e.key <= 9) {
        handleNumber(e.key);
    }
    if (e.key === '.') {
        handleNumber(e.key);
    }
    if (e.key === "Enter" || e.key === "=" && currNum != '' && prevNum != '') {
        operate();
    }
    if (e.key === '+' || e.key === '-' || e.key === '/') {
        handleOperator(e.key);
    }
    if (e.key === '*') {
        handleOperator('x');
    }
    if (e.key === 'Backspace') {
        handleDelete();
    }
}

function handleDelete() {
    if (currNum != '') {
        currNum = currNum.slice(0, -1);
        changeCurrentDisplay(currNum);
        if (currNum === '') {
            changeCurrentDisplay('0');
        }
    }
    if (currNum === '' && prevNum !== '' && operator === '') {
        prevNum = prevNum.slice(0, -1);
        changeCurrentDisplay(prevNum);
    }
}