function add(a, b) {
    return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};

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