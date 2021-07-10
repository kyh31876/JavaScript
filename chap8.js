//a function definition may include a list of identifiers,
//known as parameters, that work as local variables for the body of the
//function. Function invocations provide values, or arguments, for the
//function’s parameters.


//If a function is assigned to a property of an object, it is known as a
//method of that object.



//When a function is invoked on or through anobject, 
//that object is the invocation context or "this" value for the function.



//8.1 Defining Functions


//8.1.1 Function Declarations


//function functionName(parameters) {
    // code to be executed
//}

//Function parameters are the names listed in the function definition.
//Function arguments are the real values passed to (and received by) the function.

// Print the name and value of each property of o. Return undefined.
function printprops(o) {
    for(let p in o) {
        console.log(`${p}: ${o[p]}\n`);
    }
}

// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return Math.sqrt(dx*dx + dy*dy);
}

// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial(x-1);
}


//the name of the function becomes a variable whose value is the function itself.


//8.1.2 Function Expressions


// This function expression defines a function that squares its argument.
// Note that we assign it to a variable
const square = function(x) { return x*x; };

// Function expressions can include names, which is useful for recursion.
const f = function fact(x) { if (x <= 1) return 1; else
return x*fact(x-1); };

// Function expressions can also be used as arguments to other functions:
[3,2,1].sort(function(a,b) { return a-b; });

// Function expressions are sometimes defined and immediately invoked:
let tensquared = (function(x) {return x*x;}(10));


//the function name is optional for functions defined as expressions, 
//and most of the preceding function expressions we’ve shown omit it.



//8.1.3 Arrow Functions


hello = function() {
    return "Hello World!";
  }

//it is same as 
hello = () => {
    return "Hello World!";
  }


sum=(x,y) => {return x+y;};

//If the function has only one statement, and the statement returns a value,
//you can remove the brackets{} and the return keyword:
sum=(x,y) =>x+y;

//if an arrow function has exactly one parameter, 
//you can omit the parentheses around the parameter list:

polynomial = x => x*x + 2*x+3;


const f = x => { return { value: x }; }; // Good: f() returns an object
const g = x => ({ value: x }); // Good: g() returns an object

const h = x => { value: x }; // Bad: h() returns nothing
const i = x => { v: x, w: x }; // Bad: Syntax Error


//the expression to be returned is an object literal, then you have to
//put the object literal inside parentheses to avoid syntactic ambiguity
//between the curly braces of a function body and the curly braces of 
//an object literal:



//8.1.4 Nested Functions
function hypotenuse(a, b) {
    function square(x) { return x*x; }
    return Math.sqrt(square(a) + square(b));
}
hypotenuse(1,2)


//8.2 Invoking Functions

//8.2.1 Function Invocation

//If the function expression is a property-access expression
//then it is a method invocation expression.
 
printprops({x: 1});
let total = distance(0,0,2,1) + distance(2,1,3,5);
factorial=x=>{return x*x;}
let probability = factorial(5)/factorial(13);






//8.2.2 Method Invocation
//A method is nothing more than a JavaScript function that is stored in a
//property of an object.

//If you have a function f and an object o, 
//you can define a method named m of o with the following line:
o.m = f;


//Having defined the method m() of the object o
p.m();


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


//property access expressions that use square brackets also cause method
//invocation.

o["m"](x,y); // Another way to write o.m(x,y).
a[0](z) // Also a method invocation (assuming a[0] is a function).


//Method invocations may also involve more complex property access expressions:
customer.surname.toUpperCase(); // Invoke method on customer.surname
f().m(); // Invoke method m() on return value of f()

//this in a Method
//In an object method, this refers to the "owner" of the method.
//Note that this is a keyword, not a variable or property name.


//If a nested function (that is not an arrow function) 
//is invoked as a function, then its this value will be 
//either the global object (non-strict mode) or undefined (strict mode)


let o = { // An object o.
    m: function() { // Method m of the object.
        let self = this; // Save the "this" value in a variable.
        this === o // => true: "this" is the object o.
        f(); // Now call the helper function f().
        function f() { // A nested function f
            this === o // => false: "this" is global or undefined
            self === o // => true: self is the outer "this" value.
        }
    }
};
o.m(); // Invoke the method m on the object o.

//Inside the nested function f(), the "this" keyword is not equal to the
//object o.

//it will properly inherit the "this" value:
const f = () => {
    this === o // true, since arrow functions inherit this
    };


//8.2.3 Constructor Invocation

//If a function or method invocation is preceded by the keyword new,
//then it is a constructor invocation.

o = new Object();
o = new Object;

//A constructor invocation creates a new, empty object that inherits from
//the object specified by the prototype property of the constructor.


//Constructor functions do not normally use the return keyword.





//8.3 Function Arguments and Parameters

//8.3.1 Optional Parameters and Defaults

//When a function is invoked with fewer arguments than declared parameters, 
//the additional parameters are set to their default value,
//which is normally undefined.


// Append the names of the enumerable properties of object o to the
// array a, and return a. If a is omitted, create and return a new array.
function getPropertyNames(o, a) {
    if (a === undefined) a = []; // If undefined, use a new array
    for(let property in o) a.push(property);
    return a;
}

//Instead of using an if statement in the first line of this function, you
//can use the || operator in this idiomatic way:
a = a || [];



// getPropertyNames() can be invoked with one or two arguments:
let o = {x: 1}, p = {y: 2, z: 3}; // Two objects for testing
let a = getPropertyNames(o); // a == ["x"]; get o's properties in a new array
getPropertyNames(p, a); // a == ["x","y","z"]; add p's properties to it


getPropertyNames=(o,a) =>{if (a===undefined) a=[];
    for(let property in o) a.push(property);
    return a;
}



//|| operator returns its first argument if
//that argument is truthy and otherwise returns its second argument.

//may be you want to calls your function cannot omit the first argument 
//and pass the second: they would have to
//explicitly pass undefined as the first argument.


//Parameter default expressions are evaluated when your function is called,
//not when it is defined,

// This function returns an object representing a rectangle's 2 dimensions.
// If only width is supplied, make it twice as high as it is wide.
const rectangle = (width, height=width*2) => ({width,
height});
rectangle(1) // => { width: 1, height: 2 }


//8.3.2 Rest Parameters and Variable-Length Argument Lists

//Parameter defaults enable us to write functions that can be invoked
//with fewer arguments than parameters.


//Functions like this example that can accept any number of
//arguments are called variadic functions,
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
max(1, 10, 100, 2, 3, 1000, 4, 5, 6) // => 1000
    
//A rest parameter is preceded by three periods, and it must be the last
//parameter in a function declaration.



//8.3.3 The Arguments Object

//within the body of any function, the identifier arguments 
//refers to the Arguments object for that invocation.

//Arguments object is an array-like object (see  7.9) that allows the
//argument values passed to the function to be retrieved by number


//rewritten to use the Arguments object instead of a rest parameter:
function max(x) {
    let maxValue = -Infinity;
    // Loop through the arguments, looking for, and remembering, the biggest.
    for(let i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxValue) maxValue = arguments[i];
    }
    // Return the biggest
    return maxValue;
}
max(1, 10, 100, 2, 3, 1000, 4, 5, 6) // => 1000

//if you encounter a function that uses arguments, you can often replace it
//with a ...args rest parameter.




//8.3.4 The Spread Operator for Function Calls


let numbers = [5, 2, 10, -1, 9, 100, 1];
Math.min(...numbers) // => -1
//it is a special JavaScript syntax that 
//can be used in array literals and function invocations.


//in  8.3.2, using ... in a function definition gathers
//multiple function arguments into an array.

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


benchmark=(n)=>{let sum =0;
for(let i=1;i<=n;i++) sum +=i;
return sum;
}


//8.3.5 Destructuring Function Arguments into Parameters

function vectorAdd(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1]];
    }
vectorAdd([1,2], [3,4]) // => [4,6]

//The code would be easier to understand if we destructured the two
//vector arguments into more clearly named parameters:
function vectorAdd([x1,y1], [x2,y2]) { // Unpack 2 arguments into 4 parameters
    return [x1 + x2, y1 + y2];
    }
vectorAdd([1,2], [3,4]) // => [4,6]


//if you are defining a function that expects an object argument,
//you can destructure parameters of that object.

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
vectorAdd({x: 1, y: 2}, {x: 3, y: 4}) // => {x: 4, y: 6}

vectorAdd=({x: x1,y: y1},
    {x: x2,y: y2}) => {return{x:x1+x2, y:y1+y2};}

//Consider a function that copies a specified number of elements from
//one array into another array with optionally specified starting offsets
//for each array.


function arraycopy({from, to=from, n=from.length,
fromIndex=0, toIndex=0}) {
    let valuesToCopy = from.slice(fromIndex, fromIndex + n);
    to.splice(toIndex, 0, ...valuesToCopy);
    return to;
}
let a = [1,2,3,4,5], b = [9,8,7,6,5];
arraycopy({from: a, n: 3, to: b, toIndex: 4}) // => [9,8,7,6,1,2,3,5]


//The value of that rest parameter will be an object that has any
//properties that did not get destructured.

// Multiply the vector {x,y} or {x,y,z} by a scalar value, retain other props
function vectorMultiply({x, y, z=0, ...props}, scalar) {
    return { x: x*scalar, y: y*scalar, z: z*scalar, ...props
};
}
vectorMultiply({x: 1, y: 2, w: -1}, 2) // => {x: 2, y: 4, z:0, w: -1}

//8.3.6 Argument Types

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
sum([1,2,3]) // => 6
sum(1, 2, 3); // !TypeError: 1 is not iterable
sum([1,2,"3"]); // !TypeError: element 2 is not a number


//8.4 Functions as Values

function square(x) { return x*x; }
// /This definition creates a new function object and assigns it to the
//variable square

//Functions can also be assigned to object properties rather than variables.
let o = {square: function(x) { return x*x; }}; // An object literal
let y = o.square(16);


//Functions don’t even require names at all
let a = [x => x*x, 20]; // An array literal
a[0](a[1]) // => 400



//Example 8-1 demonstrates the kinds of things that can be done when
//functions are used as values.

// We define some simple functions here
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
let i = operate(add, operate(add, 2, 3), operate(multiply, 4,5));

// For the sake of the example, we implement the simple
//functions again,

// this time within an object literal;
const operators = {
    add: (x,y) => x+y,
    subtract: (x,y) => x-y,
    multiply: (x,y) => x*y,
    divide: (x,y) => x/y,
    pow: Math.pow // This works for predefined functions too
};
// This function takes the name of an operator, looks up that operator
// in the object, and then invokes it on the supplied operands.
//the syntax used to invoke the operator function.
function operate2(operation, operand1, operand2) {
    if (typeof operators[operation] === "function") {
        return operators[operation](operand1, operand2);
    }
    else throw "unknown operator";
}
operate2("add", "hello", operate2("add", " ", "world")) // => "hello world"
operate2("pow", 10, 2) // => 100


//8.4.1 Defining Your Own Function Properties

//Functions are not primitive values in JavaScript, but a specialized kind
//of object, which means that functions can have properties.

// Initialize the counter property of the function object.
// Function declarations are hoisted so we really can
// do this assignment before the function declaration.
uniqueInteger.counter = 0;
// This function returns a different integer each time it is called.
// It uses a property of itself to remember the next value to be returned.
function uniqueInteger() {
    return uniqueInteger.counter++; // Return and increment counter property
}
uniqueInteger() // => 0
uniqueInteger() // => 1



//As another example, consider the following factorial() function
//that uses properties of itself (treating itself as an array) to cache
//previously computed results:


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


//8.5 Functions as Namespaces

//Variables declared within a function are not visible outside of the
//function.

//variables that would have been global become local to the function:
function chunkNamespace() {
    // Chunk of code goes here
    // Any variables defined in the chunk are local to this function
    // instead of cluttering up the global namespace.
    }
    chunkNamespace(); // But don't forget to invoke the function!

//This code defines only a single global variable: the function name
//chunkNamespace.

(function() { // chunkNamespace() function rewritten as an unnamed expression.
    // Chunk of code goes here
    }()); // End the function literal and invoke it now.


//8.6 Closures
    //Global Variables
    
    let a = 4; //a is a global variable 
    function myFunction() {
        return a * a;
    }
    
    
    function myFunction() {
        let a = 4; //a is a local variable
        return a * a;
    }
    
    //Variables created without a declaration keyword (var, let, or const)
    // are always global, even if they are created inside a function.
    function myFunction() {
        a = 4;
    }


let scope = "global scope"; // A global variable
function checkscope() {
    let scope = "local scope"; // A local variable
    function f() { return scope; } // Return the value in scope here
    return f();
}
checkscope() // => "local scope"

//The checkscope() function declares a local variable and then
//defines and invokes a function that returns the value of that variable.


//In order to implement lexical scoping, the internal state of 
//a JavaScript function object must include not only the code of 
//the function but also a reference to the scope in which 
//the function definition appears.

//This combination of a function object and a scope (a set of 
//variable bindings) in which the function’s variables
//are resolved is called "a closure"

//JavaScript functions are executed using the scope they were defined in.

let uniqueInteger = (function() { // Define and invoke
    let counter = 0; // Private state of function below
    return function() { return counter++; };
    }());
uniqueInteger() // => 0
uniqueInteger() // => 1




//the first line of code looks like it is assigning a function to the
//variable uniqueInteger.

//the return value of the function that is being assigned to uniqueInteger.

//JavaScript functions are executed using the scope they were defined in.


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
d.count() // => 1: d was not reset



//it uses closures for private state rather than relying on a regular
//object property:

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


//Example 8-2 is a generalization of the shared private state through the
//closures technique we’ve been demonstrating here. 

//Example 8-2. Private property accessor methods using closures

// This function adds property accessor methods for a property with
// the specified name to the object o. The methods are named get<name>
// and set<name>. If a predicate function is supplied, the setter
// method uses it to test its argument for validity before storing it.
// If the predicate returns false, the setter method throws an exception.

//The unusual thing about this function is that the property value
//that is manipulated by the getter and setter methods is not stored in
//the object o. Instead, the value is stored only in a local variable
//in this function. The getter and setter methods are also defined
//locally to this function and therefore have access to this local variable.
//This means that the value is private to the two accessor methods, and it
//cannot be set or modified except through the setter method.

function addPrivateProperty(o, name, predicate) {
    let value; // This is the property value
    // The getter method simply returns the value.
    o[`get${name}`] = function() { return value; };
    // The setter method stores the value or throws an exception if
    // the predicate rejects the value.
    o[`set${name}`] = function(v) {
        if (predicate && !predicate(v)) {
            throw new TypeError(`set${name}: invalid value ${v}`);
        } else {
            value = v;
        }
    };
}





//when creates multiple closures using a loop,
//it is a common error to try to move the loop within the function
//2that defines the closures

// The following code demonstrates the addPrivateProperty() method.
let o = {}; // Here is an empty object
// Add property accessor methods getName and setName()
// Ensure that only string values are allowed

addPrivateProperty(o, "Name", x => typeof x === "string");

o.setName("Frank"); // Set the property value
o.getName() // => "Frank"
o.setName(0); // !TypeError: try to set a value of the wrong type



