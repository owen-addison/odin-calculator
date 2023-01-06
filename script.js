let dispVal = '';
let a = '';
let b = '';
let op = '';
let objArray = [];

const display = document.querySelector('#display');

const buttons = document.querySelectorAll('button');

const clrBtnID = document.getElementById('btn-clr').id;

// const delBtnID = document.getElementById('btn-del').id;

const eqlBtnID = document.getElementById('btn-eql').id;

// console.log(delBtnID);

// Changes display on click of button
buttons.forEach((btn, i) => {
    const btnText = btn.textContent;    // Get button text
    const btnID = btn.id;   // Get button ID
    const btnClass = btn.className;

    // Add operator buttons to objArray as objects
    if (btnClass === 'btn-op') {
        objArray.push(btnObj = {
            name: btnID,
            clicked: false,
        });
    }

    btn.addEventListener('click', () => {

        // Set display value depending on button input
        if (btnID === clrBtnID) {

            dispVal = '';   // If clear button empty string
            a = '';
            b = '';
            changeDisplay(dispVal); // Display new string

        } else if (btnClass === 'btn-num') {

            // If any of the clicked booleans is true in objArray, calculate 

            dispVal = dispVal.concat(btnText);  // If number button append it to end of string
            changeDisplay(dispVal); // Display new string

        } else if (btnClass === 'btn-op') {

            a = dispVal;    // Store current display value
            op = btnText;   // Store operator button text
            dispVal = '';   // Reset

        } else if (btnID === eqlBtnID) {

            b = dispVal;
            dispVal = operate(op, a, b);
            console.log(a, b, dispVal);
            changeDisplay(dispVal); // Display new string
        } 

    });
});

// Change display function
function changeDisplay(string) {
    display.textContent = string;
    console.table(objArray);
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
const operate = function(operator, a, b) {
    operator = operator.toLowerCase();
    a = Number(a);
    b = Number(b);

    // console.log(operator, a, b);

    if ( operator === '+' ) {
        return add(a, b);
    } else if ( operator === '-' ) {
        return subtract(a, b);
    } else if ( operator === '*' || operator.toLowerCase() === 'x' ) {
        return multiply(a, b);
    } else if ( operator === '/' ) {
        return divide(a, b);
    }
};