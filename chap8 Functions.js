
//8.1 Defining Functions
/* A function is a block of code that performs a specific task.


//8.1.1 Function Declarations

/*Syntax
function nameOfFunction () {
    // function body   
}

A function is declared using the 'function' keyword.
The basic rules of naming a function are similar to naming a variable.

It is better to write a descriptive name for your function. 
The body of function is written within `{}`. */

// declaring a function
function greet() {
    console.log("Hello there!");
}


// function call
greet();
/*we have declared a function named 'greet()'. 
To use that function, we need to call it.

Here's how you can call the above greet() function.*/


//Function Parameters
//A parameter is the variable listed inside the parentheses in the function declaration
function showMessage(from, text) { // parameters: from, text
    console.log(from + ': ' + text);
}

/* A parameter is the variable listed inside 
the parentheses in the function declaration (it’s a declaration time term) */

function showMessage(from, text) {
    from = '*' + from + '*'; // make "from" look nicer
    console.log( from + ': ' + text );
}
var from = "Ann";
showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
console.log(from); // Ann

/*function 'showMessage' is declared with two parameters,
then called with two arguments: from and "Hello"". */

//Arguments

/* 'arguments' is an object that is accessible inside 'functions'
that contain the values of the arguments passed to that function. */
function test(a, b, c) {
    console.log("Printing arguments: ",
    arguments[0], arguments[1], arguments[2]);
}
test(1,2,3);  //1, 2, 3

/* The 'arguments' object is only available inside non-arrow functions. 
Although it isn’t an array, we can access elements using the index, 
and it has a length property that contains the number of arguments 
passed to the function. */
function test(a, b, c) {
console.log(arguments.length);
}
test(1); // 1
test(1, 2); // 2


/* The 'arguments' objects contain all of the arguments passed 
during the function call, 
even if there are not as many parameters in the function declaration. */
function test() {
    console.log(arguments.length);
}
test();  //0
test(1);  //1
test(1,2,3,5);  //4


//You can update the value of arguments
function test() {
  arguments[0] = 100;
  console.log(arguments[0]);
}
test(); //100
test(1); //100


//Default values

/* If a function is called, but an argument is not provided, 
then the corresponding value becomes 'undefined'. */

//function showMessage(from, text) can be called with a single argument:
showMessage("Ann"); //"*Ann*: undefined"

/*As the value for 'text' isn’t passed, it becomes 'undefined'. */




//Alternative default parameters

/*We can check if the parameter is passed during the function execution, 
by comparing it with undefined: */

function showMessage(text) {
    // ...  
    if (text === undefined) { // if the parameter is missing
      text = 'empty message';
    }
console.log(text);
}
showMessage(); // empty message


//Returning a value

/* A function can return a value back into the calling code as the result. */
function sum(a, b) {
    return a + b;
}
var result = sum(1, 2);
console.log( result ); // 3

/* the directive `return` can be in any place of the function. 
When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result above). */

function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
}  
var age = prompt('How old are you?', 18);
if ( checkAge(age) ) {
    console.log( 'Access granted' );
} else {
    console.log( 'Access denied' );
}

/* It is possible to use `return` without a value. 
That causes the function to exit immediately. */
function showMovie(age) {
    if (!checkAge(age)) {
      return;
    }
    console.log( "Showing you the movie" ); // (*)
    // ...
}





//Add Two Numbers

// program to add two numbers using a function
// declaring a function
function add(a, b) { 
    console.log(a + b);//The function is declared with two parameters 'a' and 'b'.

}
// calling functions
add(3,4); //7
add(2,9); //11



//Function Return
/* The 'return' statement can be used to return the value to a function call.

The 'return' statement denotes that the function has ended. 
Any code after return is not executed.

If nothing is returned, the function returns an 'undefined' value. */

function add(num1,num2){
    //code
    return result;
}
var x = add(num1,numb2);


//Sum of Two Numbers

// program to add two numbers
// declaring a function
function add(a, b) {
    return a + b;
}

// take input from the user
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));

// calling function
var result = add(number1,number2);

// display the result
console.log("The sum is " + result);

/* the sum of the numbers is returned by the function 
using the 'return' statement. And that value is stored in the 'result' variable. */






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

//The 'function' keyword can be used to define a function inside an expression.

//The expression is not allowed at the start of a statement.

/*Syntax
function [name]([param1[, param2[, ..., paramN]]]) {
  //code: statement 
}               */


//Parameters 

/*name //Optional
The function name. Can be omitted, in which case the function is anonymous.
 The name is only local to the function body.

paramN //Optional
The name of an argument to be passed to the function.

statements //Optional
The statements which comprise the body of the function. */

//Creating an unnamed function
/*The following example defines an unnamed function and assigns it to `z`. 
The function returns the square of its argument: */

var z = function(y) {
   return y * y;
};

// Function expressions can include names, which is useful for recursion.
const f = function fact(x) { if (x <= 1) return 1; else
return x*fact(x-1); };

// Function expressions can also be used as arguments to other functions:
[3,2,1].sort(function(a,b) { return a-b; });

// Function expressions are sometimes defined and immediately invoked:
let tensquared = (function(x) {return x*x;}(10));



//8.1.3 Arrow Functions


//Syntax 
let myFunction = (arg1, arg2, ...argN) => {
    statement(s)
}

/*'myFunction' is the name of the function
'arg1', 'arg2', '...argN' are the function arguments
'statement(s)' is the function body */

//If the body has single statement or expression
//let myFunction = (arg1, arg2, ...argN) => expression


//Arrow Function with No Argument

/*If a function doesn't take any argument, 
then you should use 'empty parentheses'. */
var greet = () => console.log('Hello');
greet(); // Hello


//Arrow Function with One Argument
/*If a function has only one argument, you can omit the parentheses. */

var greet = x => console.log(x);
greet('Hello'); // Hello 


//Arrow Function as an Expression

//You can also dynamically create a function and use it as an expression.
var age = 5;
var welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');
welcome(); // Baby




//Multiline Arrow Functions

/*If a function body has multiple statements, 
you need to put them inside curly brackets {}.  */

var sum = (a, b) => {
    let result = a + b;
    return result;
}
var result1 = sum(5,7);
console.log(result1); // 12




//'this' with Arrow Function

/* Inside a regular function, 
'this' keyword refers to the function where it is called.*/


//Inside a regular function

function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {
        // this is accessible
        console.log(this.age);
        function innerFunc() {
            // this refers to the global object
            console.log(this.age);
            console.log(this);
        }

        innerFunc();
    }
}
var k = new Person();
k.sayName();   //25    undefined   Window {}

/* 'this.age' inside 'this.sayName'() is accessible because 'this.sayName()' is the method of an object.

However, 'innerFunc()' is a normal function and 'this.age' is not accessible because this refers to the global object . Hence, 'this.age' inside the 'innerFunc()' function gives 'undefined.' */



//Inside an arrow function

function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {
        console.log(this.age);
        let innerFunc = () => {
            console.log(this.age);
        }
        innerFunc();
    }
}
var l = new Person();
l.sayName();  //25  25

/* 'innerFunc()' function is defined using the arrow function. And inside the arrow function, 'this' refers to the parent's scope. Hence, 'this.age' gives 25. */


//Arguments Binding

/*Regular functions have arguments binding. That's why when you pass arguments to a regular function, you can access them using the 'arguments' keyword.*/

var x = function () {
    console.log(arguments);
}
x(4,6,7); // Arguments [4, 6, 7]


/* Arrow functions do not have arguments binding.
When you try to access an argument using the arrow function, it will give an error*/
var x = () => {
    console.log(arguments);
}
x(4,6,7);  // ReferenceError: Can't find variable: arguments

//To solve this issue, you can use the 'spread' syntax. 
var x = (...n) => {
    console.log(n);
}
x(4,6,7); // [4, 6, 7]


//Arrow Function with Promises and Callbacks

/* Arrow functions provide better syntax to write promises and callbacks. */
// ES5
asyncFunction().then(function() {
    return asyncFunction1();
}).then(function() {
    return asyncFunction2();
}).then(function() {
    finish;
});


//can be written as
// ES6
asyncFunction()
.then(() => asyncFunction1())
.then(() => asyncFunction2())
.then(() => finish);



//Things You Should Avoid With Arrow Functions

/* 1. You should not use arrow functions to create methods inside objects. */
var person = {
    name: 'Jack',
    age: 25,
    sayName: () => {
        // this refers to the global .....
        //
        console.log(this.age);
    }
}
person.sayName(); // undefined


/* 2. You cannot use an arrow function as a constructor.*/
var Foo = () => {};
var foo = new Foo(); // TypeError: Foo is not a constructor




//8.1.4 Nested Functions

/* A function is called “nested” when it is created inside another function. */

function sayHiBye(firstName, lastName) {
    // helper nested function to use below
    function getFullName() {
      return firstName + " " + lastName;
    }
    console.log( "Hello, " + getFullName() );
    console.log( "Bye, " + getFullName() );
}

/* the nested function 'getFullName()' is made for convenience. It can access the outer variables and so can return the full name.  

a nested function can be returned: 
either as a property of a new object or as a result by itself. 
It can then be used somewhere else. No matter where, it still has access to the same outer variables. */


/*Below, makeCounter creates the “counter” function that returns the next number on each invocation: */
function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}
var counter = makeCounter();
counter(); // 0
counter(); // 1
counter(); // 2



//8.2 Invoking Functions


//8.2.1 Function Invocation

//Function invocation is performed by invoking a function using ():
add(2,3); //5

/* When using the function invocation pattern, this is set to the global object.
It is noticable when using an inner function within a method function. 
An example should explain things better: */

var value = 500; //Global variable
var obj = {
    value: 0,
    increment: function() {
        this.value++;
        var innerFunction = function() {
            console.log(this.value);
        }
        innerFunction(); //Function invocation pattern
    }
}
obj.increment(); //Method invocation pattern


/* Note that innerFunction is called using the function invocation pattern,
 therefore 'this' is set to the global object. 
 The result is that innerFunction will not have 'this' set to current object. 
 Instead, it is set to the global object, where value is defined as 500. */


//8.2.2 Method Invocation

/* When a function is part of an object, it is called a 'method'. 
'Method' invocation is the pattern of invoking a function that is part of an 'object'. */

var obj = {
    value: 0,
    increment: function() {
        this.value+=1;
    }
};
obj.increment(); //Method invocation

/* Method invocation is identified when a function is preceded by 'object.' ,
where 'object' is the name of some object. 
JavaScript will set the 'this' parameter to the 'object' 
where the method was invoked on. In the example above, this would be set to obj.
JavaScript binds 'this' at execution (also known as late binding). */




//8.2.3 Constructor Invocation

/* The constructor invocation pattern involves putting the 'new' operator 
just before the function is invoked. */

var Cheese = function(type) {
    var cheeseType = type;
    return cheeseType;
}
cheddar = new Cheese("cheddar"); //new object returned, not the type.

/* 'this' parameter will be set to the newly created object and 
the 'return' operator of the function will have its behaviour altered. */

/*Regarding the behaviour of the 'return' operator in constructor invocation, 
there are two cases: */

/* 1 If the function returns a simple type  (number, string, boolean, null or undefined)
, the `return` will be ignored and instead 'this' will be returned 
(which is set to the new object).

2 If the function returns an instance of 'Object' (anything other than a simple type),
then that object will be returned instead of returning 'this'. 
This pattern is not used that often, but it may have utility when used with closures. */




//8.3 Function Arguments and Parameters

//8.3.1.1Naming a function

//Function starting with…

/*"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc. */


//8.3.1.2 Optional Parameters and Defaults

/* When a function is invoked with fewer arguments than declared parameters,
the additional parameters are set to their default value,
which is normally 'undefined'    .*/

/* Append the names of the enumerable properties of object 'o' to the array 'a',
and return 'a'. If 'a' is omitted, create and return a new array. */

function getPropertyNames(o, a) {
    if (a === undefined) a = []; // If undefined, use a new array
    for(let property in o) a.push(property);
    return a;
}
/*Instead of using an 'if' statement in the first line of this function, 
you can use the '||' operator in this idiomatic way: */
a = a || [];

// getPropertyNames() can be invoked with one or two arguments:
var o = {x: 1}, p = {y: 2, z: 3}; // Two objects for testing
var a = getPropertyNames(o); // a == ["x"]; get o's properties in a new array
getPropertyNames(p, a); // a == ["x","y","z"]; add p's properties to it


getPropertyNames=(o,a) =>{if (a===undefined) a=[];
    for(let property in o) a.push(property);
    return a;
};

/* '||' operator returns its first argument 
if  that argument is truthy and otherwise returns its second argument. */

/*may be you want to calls your function cannot omit 
the first argument and pass the second: they would have to
explicitly pass undefined as the first argument. */


/*Parameter default expressions are evaluated when your function is called,
not when it is defined,*/



//8.3.2 Rest Parameters and Variable-Length Argument Lists

//When we see "..." in the code, it is either 'rest parameters' or the 'spread syntax'.

/*Rest parameters '...'
A function can be called with any number of arguments, no matter how it is defined. */
function sum(a, b) {
    return a + b;
} 
console.log(sum(1, 2, 3, 4, 5) );
/* There will be no error because of “excessive” arguments. 
But of course in the result only the first two will be counted. */

/* The rest of the parameters can be included in the function definition 
by using three dots '...' followed by the name of the array that will contain them. */

//'...' literally mean “gather the remaining parameters into an array”.
function sumAll(...args) { // args is the name for the array
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}  
console.log( sumAll(1) ); // 1
console.log( sumAll(1, 2) ); // 3
console.log( sumAll(1, 2, 3) ); // 6


/* We can choose to get the first parameters as variables, and gather only the rest. 

Here the first two arguments go into variables and the rest go into 'titles' array: */

function showName(firstName, lastName, ...titles) {
    console.log( firstName + ' ' + lastName ); // Julius Caesar  
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    console.log( titles[0] ); // Consul
    console.log( titles[1] ); // Imperator
    console.log( titles.length ); // 2
}
  
showName("Julius", "Caesar", "Consul", "Imperator");
//The rest parameters must be at the end


//8.3.3 The Argument variables 

/* There is also a special array-like object named arguments
that contains all arguments by their index. */
function showName() {
    console.log( arguments.length );
    console.log( arguments[0] );
    console.log( arguments[1] );
    // it's iterable
    // for(let arg of arguments) console.log(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");

/* 'arguments' is both 'array-like' and 'iterable', it’s not an array.
Also, it always contains all arguments. We can’t capture them partially, 
like we did with rest parameters. */

//Arrow functions do not have "arguments"


/* If we access the arguments object from an arrow function, 
it takes them from the outer “normal” function. */
function f() {
    let showArg = () => console.log(arguments[0]);
    showArg();
}
f(1); // 1



//8.3.4 The Spread Operator for Function Calls

/* When '...' occurs in a function call or alike, 
it’s called a “spread syntax” and expands an array into a list. */


var arr = [3, 5, 1];
console.log( Math.max(...arr) ); // 5 ('spread' turns array into a list of arguments)
/* When '...arr' is used in the function call, 
it “expands” an iterable object arr into the list of arguments.*/

//We also can pass multiple iterables this way:
var arr1 = [1, -2, 3, 4];
var arr2 = [8, 3, -8, 1];
console.log( Math.max(...arr1, ...arr2) ); // 8

//We can even combine the spread syntax with normal values:
var arr1 = [1, -2, 3, 4];
var arr2 = [8, 3, -8, 1];
console.log( Math.max(1, ...arr1, 2, ...arr2, 25) ); //25


//Also, the spread syntax can be used to merge arrays:
var arr = [3, 5, 1];
var arr2 = [8, 9, 15];

var merged = [0, ...arr, 2, ...arr2];
console.log(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)

/* they are also iterable
here we use the spread syntax to turn the string into array of characters: */
var str = "Hello";
console.log( [...str] ); // H,e,l,l,o


/* 'spread syntax' internally uses iterators to gather elements,
the same way as 'for..of' does. */



/* For this particular task we could also use 'Array.from', 
because it converts an iterable (like a string) into an array: */

var str = "Hello";
// Array.from converts an iterable into an array
console.log( Array.from(str) ); // H,e,l,l,o

/*But there’s a subtle difference between 'Array.from(obj)' and '[...obj]':

'Array.from' operates on both array-likes and iterables.
The spread syntax works only with iterables. */






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




//it is a common error to try to move the loop within the function
//that defines the closures.
// Return an array of functions that return the values 0-9
function constfuncs() {
    let funcs = [];
    for(var i = 0; i < 10; i++) {
        funcs[i] = () => i;
    }
    return funcs;
}
let funcs = constfuncs();
funcs[5]() // => 10; Why doesn't this return 5?


//Another thing to remember when writing closures is that "this" is a
//JavaScript keyword, not a variable.

//if you’re writing a closure that needs to use the "this" value of 
//its containing function, you should use an arrow function, 
//or call bind(), on the closure before returning it,

const self = this; // Make the this value available to nested functions



//8.7 Function Properties, Methods, and Constructor

//8.7.2 The name Property

//Function object's read-only name property indicates 
//the function's name as specified when it was created, 
const func1 = function() {};

const object = {
  func2: function() {}
};

console.log(func1.name);
// expected output: "func1"

console.log(object.func2.name);
// expected output: "func2"



//8.7.3 The prototype Property

//When a function is used as a constructor, 
//the newly created object inherits properties from the prototype object.



//8.7.4 The call() and apply() Methods

//The first argument to both call() and apply() is the object 
//on which the function is to be invoked;

//this argument is the invocation context and becomes the
//value of the "this" keyword within the body of the function.



//To invoke the function f() as a method of the object o
//you could use either call() or apply():
f.call(o);
f.apply(o);

o.m = f; // Make f a temporary method of o.
o.m(); // Invoke it, passing no arguments.
delete o.m; // Remove the temporary method.


//If you call either of those methods on an arrow function, 
//the first argument is effectively ignored.




//call()


//It can be used to invoke (call) a method with an owner object 
//as an argument (parameter).

//the first invocation context argument
//are the values that are passed to the function that is invoked

f.call(o, 1, 2);//to pass two numbers to the function f() 
//and invoke it as if it were a method of the object o,


//apply()


//The call() method takes arguments separately.
//The apply() method takes arguments as an array.

f.apply(o, [1,2]);


//It uses the apply() method instead of a spread operator,
//and by doing that, it is able to invoke the wrapped method with the
//same arguments and the same this value as the wrapper method:

// Replace the method named m of the object o with a version that logs
// messages before and after invoking the original method.
function trace(o, m) {
    let original = o[m]; // Remember original method in the closure.
    o[m] = function(...args) { // Now define the new method.
    console.log(new Date(), "Entering:", m); // Log message.
    let result = original.apply(this, args); // Invoke original.
    console.log(new Date(), "Exiting:", m); // Log message.
    return result; // Return result.
    };
}

//8.7.5 The bind() Method

//When you invoke the bind() method on a function f and pass 
//an object o, the method returns a new function.

//Invoking the new function (as a function) invokes 
//the original function f as a method of o. 

//Any arguments you pass to the new function are passed to the original function.

function f(y) { return this.x + y; } // This function needs to be bound
let o = { x: 1 }; // An object we'll bind to
let g = f.bind(o); // Calling g(x) invokes f() on o
g(2) // => 3
let p = { x: 10, g }; // Invoke g() as a method of this object
p.g(2) // => 3: g is still bound to o, not p.


let sum = (x,y) => x + y; // Return the sum of 2 args
let succ = sum.bind(null, 1); // Bind the first argument to 1
succ(2) // => 3: x is bound to 1, and we pass 2 for the y argument
function f(y,z) { return this.x + y + z; }
let g = f.bind({x: 1}, 2); // Bind this and y
g(3) // => 6: this.x is bound to 1, y is bound to 2 and z is 3


//8.7.7 The Function() Constructor

//that can be used to create new functions:
const f = new Function("x", "y", "return x*y;");

//The Function() constructor expects any number of string arguments.


//If you are defining a function that takes no arguments,
//you would simply pass a single string to the constructor.


//8.8 Functional Programming

//8.8.1 Processing Arrays with Functions

let data = [1,1,3,5,5]; // This is our array of numbers
// The mean is the sum of the elements divided by the number of elements
let total = 0;
for(let i = 0; i < data.length; i++) total += data[i];
let mean = total/data.length; // mean == 3; The mean of our data is 3
// To compute the standard deviation, we first sum the squares of
// the deviation of each element from the mean.
total = 0;
for(let i = 0; i < data.length; i++) {
    let deviation = data[i] - mean;
    total += deviation * deviation;
}
let stddev = Math.sqrt(total/(data.length-1)); // stddev == 2



//We can perform these same computations in concise functional style
// First, define two simple functions
const sum = (x,y) => x+y;
const square = x => x*x;
// Then use those functions with Array methods to compute mean and stddev
let data = [1,1,3,5,5];
let mean = data.reduce(sum)/data.length; // mean == 3
let deviations = data.map(x => x-mean);
let stddev = Math.sqrt(deviations.map(square).reduce(sum)/(data.length- 1));
stddev // => 2


//Let’s write functional versions of the map() and reduce() methods:
const map = function(a, ...args) { return a.map(...args); };
const reduce = function(a, ...args) { return a.reduce(...args); };

//With these map() and reduce() functions defined, out code to compute 
//the mean and standard deviation.

const sum = (x,y) => x+y;
const square = x => x*x;
let data = [1,1,3,5,5];
let mean = reduce(data, sum)/data.length;
let deviations = map(data, x => x-mean);
let stddev = Math.sqrt(reduce(map(deviations, square),sum)/(data.length-1));
stddev // => 2


//8.8.2 Higher-Order Functions

//A higher-order function is a function that operates on functions, taking
//one or more functions as arguments and returning a new function.

// This higher-order function returns a new function that passes its
// arguments to f and returns the logical negation of f's return value;
function not(f) {
    return function(...args) { // Return a new function
        let result = f.apply(this, args); // that calls f
        return !result; // and negates its result.
    };
}
const even = x => x % 2 === 0; // A function to determine if a number is even
const odd = not(even); // A new function that does the opposite
[1,1,3,5,5].every(odd) // => true: every element of the array is odd

//This not() function is a higher-order function because it takes a
//function argument and returns a new function.



//This function uses the map() function defined earlier,

// Return a function that expects an array argument and applies f to
// each element, returning the array of return values.
// Contrast this with the map() function from earlier.
function mapper(f) {
    return a => map(a, f);
}
const increment = x => x+1;
const incrementAll = mapper(increment);
incrementAll([1,2,3]) // => [2,3,4]


//f and g, and returns a new function that computes f(g()):

// Return a new function that computes f(g(...)).
// The returned function h passes all of its arguments to g, then passes
// the return value of g to f, then returns the return value of f.
// Both f and g are invoked with the same this value as h was invoked with.
function compose(f, g) {
    return function(...args) {
// We use call for f because we're passing a single value and
// apply for g because we're passing an array of values.
    return f.call(this, g.apply(this, args));
    };
}
const sum = (x,y) => x+y;
const square = x => x*x;
compose(square, sum)(2,3) // => 25; the square of the sum



//8.8.3 Partial Application of Functions

//The bind() method partially applies arguments on the left

// The arguments to this function are passed on the left
function partialLeft(f, ...outerArgs) {
    return function(...innerArgs) { // Return this function
        let args = [...outerArgs, ...innerArgs]; // Build the argument list
        return f.apply(this, args); // Then invoke f with it
    };
}
// The arguments to this function are passed on the right
function partialRight(f, ...outerArgs) {
    return function(...innerArgs) { // Return this function
        let args = [...innerArgs, ...outerArgs]; // Build the argument list
        return f.apply(this, args); // Then invoke f with it
    };
}
// The arguments to this function serve as a template. Undefined values
// in the argument list are filled in with values from the inner set.
function partial(f, ...outerArgs) {
    return function(...innerArgs) {
        let args = [...outerArgs]; // local copy of outerargs template
        let innerIndex=0; // which inner arg is next
// Loop through the args, filling in undefined values from inner args
        for(let i = 0; i < args.length; i++) {
            if (args[i] === undefined) args[i] = innerArgs[innerIndex++];
        }
    // Now append any remaining inner arguments
        args.push(...innerArgs.slice(innerIndex));
        return f.apply(this, args);
    };
}
// Here is a function with three arguments
const f = function(x,y,z) { return x * (y - z); };
// Notice how these three partial applications differ
partialLeft(f, 2)(3,4) // => -2: Bind first argument:
2 * (3 - 4)
partialRight(f, 2)(3,4) // => 6: Bind last argument:
3 * (4 - 2)
partial(f, undefined, 2)(3,4) // => -6: Bind middle argument: 3 * (2 - 4)




const increment = partialLeft(sum, 1);
const cuberoot = partialRight(Math.pow, 1/3);
cuberoot(increment(26)) // => 3

//We can also use composition and partial application to redo our mean
//and standard deviation calculations in extreme functional style:

// sum() and square() functions are defined above. Here are some more:
const product = (x,y) => x*y;
const neg = partial(product, -1);
const sqrt = partial(Math.pow, undefined, .5);
const reciprocal = partial(Math.pow, undefined, neg(1));
// Now compute the mean and standard deviation.
let data = [1,1,3,5,5]; // Our data
let mean = product(reduce(data, sum),
reciprocal(data.length));
let stddev = sqrt(product(reduce(map(data,
    compose(square,
        partial(sum,neg(mean)))))),sum)
reciprocal(sum(data.length,neg(1)))));
[mean, stddev] // => [3, 2]


//8.8.4 Memoization


//The code that follows shows a higher-order function, memoize(), 
//that accepts a function as its argument and 
//returns a memoized version of the function:


// Return a memoized version of f.
// It only works if arguments to f all have distinct string representations.
function memoize(f) {
    const cache = new Map(); // Value cache stored in the closure.
    return function(...args) {
    // Create a string version of the arguments to use as a cache key.
        let key = args.length + args.join("+");
        if (cache.has(key)) {
        return cache.get(key);
        } else {
            let result = f.apply(this, args);
            cache.set(key, result);
            return result;
        }
    };
}

//The memoize() function creates a new object to use as the cache and
//assigns this object to a local variable so that it is private to (in the
//closure of) the returned function.

// Return the Greatest Common Divisor of two integers using the Euclidian
// algorithm: http://en.wikipedia.org/wiki/Euclidean_algorithm
function gcd(a,b) { // Type checking for a and b has been omitted
if (a < b) { // Ensure that a >= b when we start
    [a, b] = [b, a]; // Destructuring assignment to swap variables
    }
    while(b !== 0) { // This is Euclid's algorithm for GCD
        [a, b] = [b, a%b];
    }
    return a;
}
const gcdmemo = memoize(gcd);
gcdmemo(85, 187) // => 17
// Note that when we write a recursive function that we will be memoizing,
// we typically want to recurse to the memoized version, not the original.
const factorial = memoize(function(n) {
    return (n <= 1) ? 1 : n * factorial(n-1);
});
factorial(5) // => 120: also caches values for 4, 3, 2 and 1.