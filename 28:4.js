function printprops(o) {
    for (let p in o) {
        console.log(`${p}: ${o[p]}\n`);
    }
}
// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}
// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}

// This function expression defines a function that squares its argument.
// Note that we assign it to a variable
const square = function (x) { return x * x; };
// Function expressions can include names, which is useful for recursion.
const f = function fact(x) {
    if (x <= 1) return 1; else
        return x * fact(x - 1);
};
// Function expressions can also be used as arguments to other functions:
[3, 2, 1].sort(function (a, b) { return a - b; });
// Function expressions are sometimes defined and immediately invoked:
let tensquared = (function (x) { return x * x; }(10));
console.log(tensquared)

const sum = (x, y) => { return x + y; };
sum;


const f = x => { return { value: x }; };
f()


const sum = (x, y) => { return x + y; };
console.log(sum)

const polynomial = x => x*x + 2*x + 3;


let filtered = [1,null,2,3].filter(x => x !== null); // filtered == [1,2,3]

let squares = [1,2,3,4].map(x => x*x); //squares == [1,4,9,16]
squares

const x=10;
const y=20;

console.log(x+y);``

// Define and invoke a function to determine if we're instrict mode.
const strict = (function() { return !this; }());
console.log(strict)

//method invocation
o.m = f;
o.m();

let calculator = { // An object literal
operand1: 1,
operand2: 1,
add() { // We're using method shorthand syntax for this function
// Note the use of the this keyword to refer to the containing object.
this.result = this.operand1 + this.operand2;
}
};
calculator.add(); // A method invocation to compute 1+1.
calculator.result // => 2

o["m"](x,y); // Another way to write o.m(x,y).
a[0](z) // Also a method invocation (assuming a[0] isa function).

// Run three asynchronous operations in sequence, handling errors.
doStepOne().then(doStepTwo).then(doStepThree).catch(handleErrors);



let o = { // An object o.
    m: function() { // Method m of the object.
    let self = this; // Save the "this" value in avariable.
    this === o // => true: "this" is the object o.
    f(); // Now call the helper functionf().
    function f() { // A nested function f
    this === o // => false: "this" is global or undefined
    self === o // => true: self is the outer "this" value.
    }
    }
    };
    o.m(); // Invoke the method m on the object o


const f = () => {
    this === o // true, since arrow functions inherit this
    };   

const f = (function() {
    this === o // true, since we bound this function to the outer this
    }).bind(this);



// Append the names of the enumerable properties of object o to the
// array a, and return a. If a is omitted, create and return a new array.
function getPropertyNames(o, a) {
if (a === undefined) a = []; // If undefined, use a new array
for(let property in o) a.push(property);
return a;
}

// getPropertyNames() can be invoked with one or two arguments:
let o = {x: 1}, p = {y: 2, z: 3}; // Two objects for testing
let a = getPropertyNames(o); // a == ["x"]; get o's properties in a new array
getPropertyNames(p, a); // a == ["x","y","z"]; add p's properties to it
console.log(o)

// Append the names of the enumerable properties of object o to the
// array a, and return a. If a is omitted, create and return a new array.
function getPropertyNames(o, a = []) {
for(let property in o) a.push(property);
return a;
}


// This function returns an object representing a rectangle's 2 dimensions.
// If only width is supplied, make it twice as high as it is wide.
const rectangle = (width, height=width*2) => ({width,
height});
rectangle(1) // => { width: 1, height: 2 }




//return the largest one
function max(first=-Infinity, ...rest) {
    let maxValue = first; // Start by assuming the first arg is biggest
    // Then loop through the rest of the arguments, looking for bigger
    for(let n of rest) {
    if (n > maxValue) {
    maxValue = n;
    }
    }
    // Return the biggest
    return maxValue;
    }
    max(1, 10, 100, 2, 3, 1000, 4, 5, 6)

    //rewritten to use the Arguments object instead of a rest parameter


function max(x) {
    let maxValue = -Infinity;
    // Loop through the arguments, looking for, and remembering, the biggest.
    for(let i = 0; i < arguments.length; i++) {
    if (arguments[i] > maxValue) maxValue = arguments[i];
    }
    // Return the biggest
    return maxValue;
    }



let numbers = [5, 2, 10, -1, 9, 100, 1];
Math.min(...numbers) // => -1



// This function takes a function and returns a wrapped version
function timed(f) {
return function(...args) { // Collect args into a rest parameter array
console.log(`Entering function ${f.name}`);
let startTime = Date.now();
try {
// Pass all of our arguments to the wrapped function
return f(...args); // Spread the args back out again
}
finally {
// Before we return the wrapped return value, print elapsed time.
console.log(`Exiting ${f.name} after
${Date.now()-startTime}ms`);
}
};
}

 // Compute the sum of the numbers between 1 and n by brute force
function benchmark(n) {
let sum = 0;
for(let i = 1; i <= n; i++) sum += i;
return sum;
}
// Now invoke the timed version of that test function
timed(benchmark)(1000000) // => 500000500000; this is the sum of the numbers



    //Destructuring Function Arguments into Parameters
function vectorAdd(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1]];
    }


    function vectorAdd([x1,y1], [x2,y2]) { // Unpack 2 arguments into 4 parameters
        return [x1 + x2, y1 + y2];
        }
        vectorAdd([1,2], [3,4]) // => [4,6]

// Multiply the vector {x,y} by a scalar value
function vectorMultiply({x, y}, scalar) {
    return { x: x*scalar, y: y*scalar };
    }
    vectorMultiply({x: 1, y: 2}, 2) // => {x: 2, y: 4}

function vectorAdd(
    {x: x1, y: y1}, // Unpack 1st object into x1 and y1 params
    {x: x2, y: y2} // Unpack 2nd object into x2 and y2 params
    )
    {
    return { x: x1 + x2, y: y1 + y2 };
    }
vectorAdd({x:1,y:2},{x:1,y:4})

// Multiply the vector {x,y} or {x,y,z} by a scalar value
function vectorMultiply({x, y, z=0}, scalar) {
    return { x: x*scalar, y: y*scalar, z: z*scalar };
    }

vectorMultiply({x:1,y:2,},2)

function arraycopy({from, to=from, n=from.length,
    fromIndex=0, toIndex=0}) {
    let valuesToCopy = from.slice(fromIndex, fromIndex + n);
    to.splice(toIndex, 0, ...valuesToCopy);
    return to;
    }
let a = [1,2,3,4,5], b = [9,8,7,6,5];
arraycopy({from:a,n:3,to:b,toIndex:4})

// This function expects an array argument. The first two elements of that
// array are unpacked into the x and y parameters. Any remaining elements
// are stored in the coords array. And any arguments after the first array
// are packed into the rest array.
function f([x, y, ...coords], ...rest) {
return [x+y, ...rest, ...coords]; // Note: spread operator here
}
f([1, 2, 3, 4], 5, 6) // => [3, 5, 6, 3, 4]
f([1,2,3,4,5],3,4)


// Multiply the vector {x,y} or {x,y,z} by a scalar value, retain other props
function vectorMultiply({x, y, z=0, ...props}, scalar) {
return { x: x*scalar, y: y*scalar, z: z*scalar, ...props
};
}
vectorMultiply({x: 1, y: 2, w: -1}, 2) // => {x: 2, y: 4, z: 0, w: -1}

vectorMultiply({x:2,y:3,w:2},3)

function drawCircle({x, y, radius, color: [r, g, b]}) {
    // Not yet implemented
    }


// Return the sum of the elements an iterable object a.
// The elements of a must all be numbers.
function sum(a) {
    let total = 0;
    for(let element of a) { // Throws TypeError if a is not iterable
    if (typeof element !== "number") {
    throw new TypeError("sum(): elements must be numbers");
    }
    total += element;
    }
    return total;
    }

sum(1,2,3);
sum([1,2,3]);

function square(x) {
    return x*x
}; 

let s=square;
square(4)


let o = {square: function(x) { return x*x; }}; // An object literal
let y = o.square(16);

let a = [x => x*x, 20]; // An array literal
a[0](a[1]) // => 400


//Example 8.1
function add(x,y) { return x + y; }
function subtract(x,y) { return x - y; }
function multiply(x,y) { return x * y; }
function divide(x,y) { return x / y; }
// Here's a function that takes one of the preceding functions
// as an argument and invokes it on two operands
function operate(operator, operand1, operand2) {
return operator(operand1, operand2);
}
// We could invoke this function like this to compute the value (2+3) + (4*5):
let i = operate(add, operate(add, 2, 3), operate(multiply, 4,
5));
// For the sake of the example, we implement the simple functions again,
// this time within an object literal;
const operators = {
add: (x,y) => x+y,
subtract: (x,y) => x-y,
multiply: (x,y) => x*y,
divide: (x,y) => x/y,
pow: Math.pow // This works for predefined functions too
};
// This function takes the name of an operator, looks up that operator
// in the object, and then invokes it on the supplied operands Note.
// the syntax used to invoke the operator function.
function operate2(operation, operand1, operand2) {
if (typeof operators[operation] === "function") {
return operators[operation](operand1, operand2);
}
else throw "unknown operator";
}
operate2("add", "hello", operate2("add", " ", "world")) // =>"hello world"
operate2("pow", 10, 2) // => 100



// This function returns a different integer each time it iscalled.
// It uses a property of itself to remember the next value to be returned.
function uniqueInteger() {
    return uniqueInteger.counter++; // Return and increment counter property
}
// Initialize the counter property of the function object.
// Function declarations are hoisted so we really can
// do this assignment before the function declaration.
uniqueInteger.counter = 0;


uniqueInteger() // => 0
uniqueInteger() // => 1



// Compute factorials and cache results as properties of the function itself.


function factorial(n) {
if (Number.isInteger(n) && n > 0) { // Positive integers only
if (!(n in factorial)) { // If no cached result
factorial[n] = n * factorial(n-1); // Compute and cache it
}
return factorial[n]; // Return the cached result
} else {
return NaN; // If input was bad
}
}
factorial[1] = 1; // Initialize the cache to hold this base case.
factorial(6) // => 720
factorial[5] // => 120; the call above caches this value



let scope = "global scope"; // A global variable
function checkscope() {
let scope = "local scope"; // A local variable
function f() { return scope; } // Return the value in scope here
return f();
}
checkscope() // => "local scope"


let scope = "global scope"; // A global variable
function checkscope() {
let scope = "local scope"; // A local variable
function f() { return scope; } // Return the value in scope here
return f;
}
let s = checkscope()(); // What does this return?



let uniqueInteger = (function() { // Define and invoke
    let counter = 0; // Private state of function below
    return function() { return counter++; };
    }());
    uniqueInteger() // => 0
    uniqueInteger() // => 1


function counter() {
    let n = 0;
    return {
    count: function() { return n++; },
    reset: function() { n = 0; }
    };
    }
    let c = counter(), d = counter(); // Create two counters
    c.count() // => 0
    d.count() // => 0: they count independently
    c.reset(); // reset() and count() methods share state
    c.count() // => 0: because we reset c
    d.count() // => 1: d was not res



function counter(n) { // Function argument n is the private variable
    return {
    // Property getter method returns and increments private counter var.
    get count() { return n++; },
    // Property setter doesn't allow the value of n to decrease
    set count(m) {
    if (m > n) n = m;
    else throw Error("count can only be set to a larger value");
    }
    };
    }
    let c = counter(1000);
    c.count // => 1000
    c.count // => 1001
    c.count = 2000;
    c.count // => 2000
    c.count = 2000; // !Error: count can only be set to a larger value

// This function adds property accessor methods for a property
with
// the specified name to the object o. The methods are named get<name>
// and set<name>. If a predicate function is supplied, the setter
// method uses it to test its argument for validity before storing it.
// If the predicate returns false, the setter method throws an exception.
//
// The unusual thing about this function is that the property value
// that is manipulated by the getter and setter methods is not stored in
// the object o. Instead, the value is stored only in a local variable
// in this function. The getter and setter methods are also defined
// locally to this function and therefore have access to this local variable.
// This means that the value is private to the two accessor methods, and it
// cannot be set or modified except through the setter method.


function addPrivateProperty(o, name, predicate) {
    let value; // This is the property value
    // The getter method simply returns the value.
    o[`get${name}`] = function() { return value; };
    // The setter method stores the value or throws an exception if
    // the predicate rejects the value.
    o[`set${name}`] = function(v) {
    if (predicate && !predicate(v)) {
    throw new TypeError(`set${name}: invalid value
    ${v}`);
    } else {
    value = v;
    }
    };
}
// The following code demonstrates the addPrivateProperty() method.
let o = {}; // Here is an empty object
// Add property accessor methods getName and setName()
// Ensure that only string values are allowed
addPrivateProperty(o, "Name", x => typeof x === "string");
o.setName("Frank"); // Set the property value
o.getName() // => "Frank"
o.setName(0); // !TypeError: try to set a value of the wrong type

function constfunc(v) { return () => v; }
// Create an array of constant functions:
let funcs = [];
for(var i = 0; i < 10; i++) funcs[i] = constfunc(i);

// Return an array of functions that return the values 0-9
function constfuncs() {
    let funcs = [];
    for(var i = 0; i < 10; i++) {
    funcs[i] = () => i;
    }
    return funcs;
    }