let dispVal = '';
let a = '';
let b = '';
let op = '';
let objArray = [];
let multIndex, divIndex, subIndex, plusIndex;

let prevNum = '';
let currNum = '';
let operator = '';

const currentDisplay = document.querySelector('.currentNumber');
const previousDisplay = document.querySelector('.previousNumber');

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
    // console.log(prevNum, currNum);

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

        console.log(prevNum, currNum);
    }

    // operator = op;
    // prevNum = currNum;
    // currNum = '';
}

function operatorCheck(string) {
    operator = string;
    previousDisplay.textContent = prevNum + ' ' + operator;
    currentDisplay.textContent = '0';
    currNum = '';
}


// OLD FUNCTION
// buttons.forEach((btn, i) => {
//     const btnText = btn.textContent;    // Get button text
//     const btnID = btn.id;   // Get button ID
//     const btnClass = btn.className;

//     // Add operator button to objArray as objects
//     if (btnClass === 'btn-op') {
//         objArray.push(btnObj = {
//             name: btnID,
//             text: btnText,
//             clicked: false,
//         });
//     }
    
//     // Add event listeners for button
//     btn.addEventListener('click', () => {
        
//         // Set display value depending on button input
//         if (btnID === clrBtnID) {
            
//             dispVal = '';   // If clear button empty string
//             a = '';
//             b = '';
//             changeDisplay(dispVal); // Display new string
            
//         } else if (btnClass === 'btn-num') {
//             let opObj = {};
//             let clicked = [];
//             // If any of the clicked booleans is true in objArray, call operate function and display result
            
//             // Filter objArray for clicked objects
//             clicked = objArray.filter(function(obj) {
//                 if (obj.clicked == true) {
//                     return true;
//                 }
//             });
            
//             opObj = clicked[0];


            
//             dispVal = dispVal.concat(btnText);  // If number button append it to end of string
//             changeDisplay(dispVal); // Display new string
            
//         } else if (btnClass === 'btn-op') {
//             const index = objArray.findIndex(obj => obj.name === btnID);

//             const opObj = objArray[index];
//             opObj.clicked = true;
//             // console.log(opObj);

//             // const filtered = objArray.filter(function(obj) {
//             //     if (obj.name === btnID) {
//             //         return true;
//             //     }
//             // });
            
            
//             // console.table(filtered);
//             console.table(opObj);
            
//             a = dispVal;    // Store current display value
//             op = btnText;   // Store operator button text
//             dispVal = '';   // Reset
            
//         } else if (btnID === eqlBtnID) {
            
//             b = dispVal;
//             dispVal = operate(op, a, b);
//             // console.log(a, b, dispVal);
//             changeDisplay(dispVal); // Display new string
//         } 
        
//     });
// });

// Store index for each operator object in objArray
multIndex = objArray.findIndex(obj => obj.name === 'btn-mult');
divIndex = objArray.findIndex(obj => obj.name === 'btn-div');
subIndex = objArray.findIndex(obj => obj.name === 'btn-sub');
plusIndex = objArray.findIndex(obj => obj.name === 'btn-plus');

// Clear fucntion
function clearAll() {
    prevNum = '';
    currNum = '';
    changePreviousDisplay(prevNum);
    changeCurrentDisplay('0');
}

// Change display function
function changeCurrentDisplay(string) {
    if (string.length <= 11) {
        currentDisplay.textContent = string;
    } else {
        currentDisplay.textContent = string.slice(0, 11) + "...";
    }
};

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
    
};

function roundNumber(num) {
    return Math.round(num * 100000) / 100000;
}