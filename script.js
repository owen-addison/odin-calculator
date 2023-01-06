let dispVal = '';
let a = '';
let b = '';
let op = '';
let objArray = [];
let multIndex, divIndex, subIndex, plusIndex;

const display = document.querySelector('#display');

const buttons = document.querySelectorAll('button');

const clrBtnID = document.getElementById('btn-clr').id;

const eqlBtnID = document.getElementById('btn-eql').id;

// Changes display on click of button
buttons.forEach((btn, i) => {
    const btnText = btn.textContent;    // Get button text
    const btnID = btn.id;   // Get button ID
    const btnClass = btn.className;

    // Add operator button to objArray as objects
    if (btnClass === 'btn-op') {
        objArray.push(btnObj = {
            name: btnID,
            text: btnText,
            clicked: false,
        });
    }
    
    // Add event listeners for button
    btn.addEventListener('click', () => {
        
        // Set display value depending on button input
        if (btnID === clrBtnID) {
            
            dispVal = '';   // If clear button empty string
            a = '';
            b = '';
            changeDisplay(dispVal); // Display new string
            
        } else if (btnClass === 'btn-num') {
            
            // If any of the clicked booleans is true in objArray, call operate function and display result
            
            // Filter objArray for clicked objects
            const clicked = objArray.filter(function(obj) {
                if (obj.clicked == true) {
                    return true;
                }
            });
            
            const obj = clicked[0];
            
            dispVal = dispVal.concat(btnText);  // If number button append it to end of string
            changeDisplay(dispVal); // Display new string
            
        } else if (btnClass === 'btn-op') {
            const index = objArray.findIndex(obj => obj.name === btnID);

            const opObj = objArray[index];
            opObj.clicked = true;
            // console.log(opObj);

            // const filtered = objArray.filter(function(obj) {
            //     if (obj.name === btnID) {
            //         return true;
            //     }
            // });
            
            
            // console.table(filtered);
            console.table(opObj);
            
            a = dispVal;    // Store current display value
            op = btnText;   // Store operator button text
            dispVal = '';   // Reset
            
        } else if (btnID === eqlBtnID) {
            
            b = dispVal;
            dispVal = operate(op, a, b);
            // console.log(a, b, dispVal);
            changeDisplay(dispVal); // Display new string
        } 
        
    });
});

// Store index for each operator object in objArray
multIndex = objArray.findIndex(obj => obj.name === 'btn-mult');
divIndex = objArray.findIndex(obj => obj.name === 'btn-div');
subIndex = objArray.findIndex(obj => obj.name === 'btn-sub');
plusIndex = objArray.findIndex(obj => obj.name === 'btn-plus');

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

    // Return correct operation
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