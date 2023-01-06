let dispVal = "";

const display = document.querySelector('#display');

const buttons = document.querySelectorAll('button');

console.log(typeof(dispVal));

// Changes display on click of button
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const btnText = btn.textContent; // Get text of button
        display.textContent = dispVal.concat(btnText);
        dispVal = dispVal.concat(btnText);
        // dispVal = dispVal.concat(btnText);
    });
});

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
        // console.log('add');
        return add(a, b);
    } else if ( operator === '-' ) {
        // console.log('subtract');
        return subtract(a, b);
    } else if ( operator === '*' || operator.toLowerCase() === 'x' ) {
        // console.log('multiply');
        return multiply(a, b);
    } else if ( operator === '/' ) {
        // console.log('divide');
        return divide(a, b);
    }
};