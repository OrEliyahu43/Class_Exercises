/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.
    Submit the file to Hive
*/

//  function declarations to function expressions
const func1 = function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

const func2 = function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

const func3 = function add(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}


// From function expressions to function declarations

function hello() {
    return "Hello";
}

const hello = () => "Hello!";
////////////////////////////////// 
function squareRoot(a){
return Math.sqrt(a);
}
const squareRoot = a => Math.sqrt(a);
//////////////////////////////////
function randomNumbers2(a,b){

    return Math.random() * (a-b) + b;
}

const randomNumbers = (a, b) => Math.random() * (a - b) + b;


console.log(hello());