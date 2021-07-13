//Conditionals : Statements like if and switch

// /Loops : Statements like while and for that execute other statements repetitively

//Jumps :Statements like break, return, and throw that cause the interpreter to jump

//5.1 Expression Statements
greeting = "Hello " + name;
i *= 3;

counter++;//These have the side effect of changing a variable value, 
//just as if an assignment had been performed:



//5.2 Compound and Empty Statements


//A statement block is simply a 
//sequence of statements enclosed within curly braces{}.
//While the primitive statements within the block end in semicolons,
//it does not end with a semicolon.

//Second, the lines inside the block are indented 
//relative to the curly braces that enclose them.
{
    x = Math.PI;
    cx = Math.cos(x);
    console.log("cos(π) = " + cx);
    }
//The empty statement allows you to include 
//no statements where one is expected.
;



//The JavaScript interpreter takes no action 
//when it executes an empty statement.

// Initialize an array a
for(let i = 0; i < a.length; a[i++] = 0) ;



//the accidental inclusion of a semicolon after the right
//parenthesis of a for loop, while loop, or if statement can cause
//frustrating bugs that are difficult to detect.

if ((a === 0) || (b === 0)); // Oops! This line does nothing...
    o = null; // and this line is always executed

for(let i = 0; i < a.length; a[i++] = 0) /* empty */ ;
// your code in a way that makes it clear that you are doing it on purpose.


//5.3 Conditionals


//5.3.1 if

if (expression) //evaluated. If the resulting value is truthy,
    statement//statement is executed.

if (username == null) // If username is null or undefined,
    username = "John Doe"; // define it

//Or similarly:
// If username is null, undefined, false, 0, "", or NaN, give it a new value
if (!username) username = "John Doe";





//you can use a statement block to combine multiple statements into one.
if (!address) {
    address = "";
    message = "Please specify a mailing address.";
    }


if (expression)
    statement1
else
    statement2    


if (n === 1)
    console.log("You have 1 new message.");
else
    console.log(`You have ${n} new messages.`);    


i = j = 1;
k = 2;


if (i === j) {
    if (j === k) {
        console.log("i equals k");
    }
    } else { // What a difference the location of a curly brace makes!
    }
    console.log("i doesn't equal j");

//5.3.2 else if

if (n === 1) {
        // Execute code block #1
    } else if (n === 2) {
        // Execute code block #2
    } else if (n === 3) {
        // Execute code block #3
    } else {
        // If all else fails, execute block #4
    }


//Using the else if idiom is preferable to, and more legible than, 
//writing these statements out in their syntactically equivalent,
//fully nested form:

if (n === 1) {
    // Execute code block #1
}
else {
    if (n === 2) {
        // Execute code block #2
}
    else {
        if (n === 3) {
            // Execute code block #3
    }
    else {
            // If all else fails, execute block #4
        }   
    }
}


//5.3.3 switch


///Use the switch statement to select one of many code blocks to be executed.

switch(expression) {
    statements
    }


switch(n) {
    case 1: // Start here if n === 1
        // Execute code block #1.
        break; // Stop here
    case 2: // Start here if n === 2
        // Execute code block #2.
        break; // Stop here
    case 3: // Start here if n === 3
        // Execute code block #3.
        break; // Stop here
    default: // If all else fails...
        // Execute code block #4.
        break; // Stop here
    }

//the break keyword used at the end of each case in this code.

//The case clauses in a switch statement specify 
//only the starting point of the desired code;

function convert(x) {
        switch(typeof x) {
        case "number": // Convert the number to a hexadecimal integer
            return x.toString(16);
        case "string": // Return the string enclose `in quotes
            return '"' + x + '"';
        default: // Convert any other type in the usual way
            return String(x);
    }
}

//If it does not find a case with a matching value, it looks for a statement
//labeled default: ,the switch statement skips the block of code altogether.

//When using switch inside a function, however, you may use a return statement
//instead of a break statement.





//5.4 Loops

//5.4.1 while
while (condition) {
    // code block to be executed
  }
    
//If the value of the expression is falsy, then the interpreter
//skips over the statement that serves as the loop body and moves on to
//the next statement in the program.


//In almost every loop, one or more variables change with each iteration of the loop.

//prints the numbers from 0 to 9:
let count = 0;
while(count < 10) {
    console.log(count);
    count++;
}

while(count < 10) {
    count++;
    console.log(count);
}

//becomes false, the while statement finishes, and the interpreter
//can move on to the next statement in the program.

//5.4.2 do/while
do {
    // code block to be executed
  }
while (condition);

let text ="", i=0;
do {
    text += "The number is " + i;
    i++;
    console.log(text);
}
while (i < 10);


const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
  text = text + cars[i];
  i++;
  console.log(cars[i]);
}



function printArray(a) {
    let len = a.length, i = 0;
    if (len === 0) {
        console.log("Empty Array");
    } else {
        do {    
            console.log(a[i]);
        } while(++i < len);
    }
}   





//5.4.3 for

for (initialize; test; increment) {
    // code block to be executed
  }

//equivalent while loop:
initialize;
while(test) {
    statement
    increment;
}


//print the numbers from 0 to 9 with a for loop
for(let count = 0; count < 10; count++) {
    console.log(count);
}


let i, j, sum = 0;
for(i = 0, j = 10 ; i < 10 ; i++, j--) {
    sum += i * j;
}

//5.4.4 for/of

//The JavaScript for of statement loops through the values 
//of an iterable object.
for (variable of iterable) {
    // code block to be executed
}

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;
for(let element of data) {
    sum += element;
}
sum // => 45
//the parentheses contain a variable declaration
//followed by the of keyword and an expression that evaluates to an iterable object,

data.push(sum)//an infinite loop because the iteration can never reach the last
//element of the array.

//FOR/OF WITH OBJECTS
let o = { x: 1, y: 2, z: 3 };
for(let element of o) { // Throws TypeError because o is not iterable
    console.log(element);
}

let o = { x: 1, y: 2, z: 3 };
let keys = "";
for(let k of Object.keys(o)) {
    keys += k;
}
keys // => "xyz"


let o= {x:1,y:2,z:5}
let sum = 0;
for(let v of Object.values(o)) {
    sum += v;
}
sum // => 6



//you can use for/of with Object.entries() and destructuring assignment:
let pairs = "";
for(let [k, v] of Object.entries(o)) {
    pairs += k + v;
}
pairs // => "x1y2z3"


//FOR/OF WITH STRINGS

let frequency = {};
for(let letter of "mississippi") {
    if (frequency[letter]) {
        frequency[letter]++;
    } else {
        frequency[letter] = 1;
    }
}
frequency // => {m: 1, i: 4, s: 4, p: 2}

//FOR/OF WITH SET AND MAP
let text = "Na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];
for(let word of wordSet) {
unique.push(word);
}
unique // => ["Na", "na", "Batman!"]


let m = new Map([[1, "one"]]);
for(let [key, value] of m) {
    key // => 1
    value // => "one"
}


//5.4.5 for/in
//The for/in statement loops through the property names of a specified object.
for (var in object) {
    //code block to be executed
  }


for(let p in o) { // Assign property names of o to variable p
    console.log(o[p]); // Print the value of each property
    }

let o = { x: 1, y: 2, z: 3 };
let a = [], i = 0;
for(a[i++] in o) /* empty */;

//object properties that can be enumerated with a for/in loop
for(let i in a) console.log(i);

//5.5 Jumps

//5.5.1 Labeled Statements
identifier: statement

//break and continue are the only JavaScript statements that use statement labels;
mainloop: while(token !== null) {
    // Code omitted...
    continue mainloop; // Jump to the next iteration of thenamed loop
    // More code omitted...
    }


//5.5.2 break
break;
//this form of the break statement is legal only 
//if it appears inside one of these statements.


for(let i = 0; i < a.length; i++) {
    if (a[i] === target) break;
    }


break labelname;
//When break is used with a label, it jumps to the end of, or terminates,
//the enclosing statement that has the specified label.


let matrix = getData(); // Get a 2D array of numbers from somewhere
// Now sum all the numbers in the matrix.
let sum = 0, success = false;
// Start with a labeled statement that we can break out of if errors occur
computeSum: if (matrix) {
    for(let x = 0; x < matrix.length; x++) {    
        let row = matrix[x];
        if (!row) break computeSum;
        for(let y = 0; y < row.length; y++) {
            let cell = row[y];
            if (isNaN(cell)) break computeSum;
            sum += cell;
        }   
    }
    success = true;
}
// The break statements jump here. If we arrive here with
//success == false
// then there was something wrong with the matrix we were
//given.
// Otherwise, sum contains the sum of all cells of the matrix.

//5.5.3 continue

//continue restarts a loop at the next iteration.


//an unlabeled continue statement being used to skip 
//the rest of the current iteration of a loop when an error occurs:
for(let i = 0; i < data.length; i++) {
    if (!data[i]) continue; // Can't proceed with undefined data
    total += data[i];
}

//5.5.4 return
return expression;

//A return statement may appear only within the body of a function. 
//It is a syntax error for it to appear anywhere else.

function square(x) { return x*x; } // A function that has a return statement
square(2) // => 4

//The return statement can also be used without an expression to
//make the function return undefined to its caller.

function displayObject(o) {
    // Return immediately if the argument is null or undefined.
    if (!o) return;
    // Rest of function goes here...
    }

//5.5.5 yield
// A generator function that yields a range of integers
function* range(from, to) {
    for(let i = from; i <= to; i++) {
        yield i;
    }
}

//5.5.6 throw
throw expression;
//exceptions are thrown whenever a runtime error occurs and 
//whenever the program explicitly throws one using the throw statement. 
//Exceptions are caught with the try/catch/finally statement,

function factorial(x) {
    // If the input argument is invalid, throw an exception!
    if (x < 0) throw new Error("x must not be negative");
    // Otherwise, compute a value and return normally
    let f;
    for(f = 1; x > 1; f *= x, x--) /* empty */ ;
    return f;
    }
factorial(4) // => 24

//5.5.7 try/catch/finally
//The try clause of this statement simply defines 
//the block of code whose exceptions are to be handled

//Both the catch and finally blocks are optional, 
//but a try block must be accompanied by at least one of these blocks.
try {
    // Normally, this code runs from the top of the block to the bottom
    // without problems. But it can sometimes throw an exception,
    // either directly, with a throw statement, or indirectly, by calling
    // a method that throws an exception.
    }
    catch(e) {
    // The statements in this block are executed if, and only
    if, the try
    // block throws an exception. These statements can use the local variable
    // e to refer to the Error object or other value that was thrown.
    // This block may handle the exception somehow, may ignore the
    // exception by doing nothing, or may rethrow the exception with throw.
    }
    finally {
    // This block contains statements that are always executed, regardless of
    // what happens in the try block. They are executed whether the try
    // block terminates:
    // 1) normally, after reaching the bottom of the block
    // 2) because of a break, continue, or return statement
    // 3) with an exception that is handled by a catch clause above
    // 4) with an uncaught exception that is still propagating
    }

    try {
        // Ask the user to enter a number
        let n = Number(prompt("Please enter a positive integer",""));
        // Compute the factorial of the number, assuming the input is valid
        let f = factorial(n);
        // Display the result
        alert(n + "! = " + f);
        }
        catch(ex) { // If the user's input was not valid, we end up here
            alert(ex); // Tell the user what the error is
        }

//If an exception occurs in the try block and there is an associated
//catch block to handle the exception, the interpreter first executes the
//catch block and then the finally block.

//try and finally can be used together without a catch clause
// Simulate for(initialize ; test ;increment ) body; initialize ;
while( test ) {
    try { body ; }
    finally { increment ; }
}


//5.6 Miscellaneous Statements

//5.6.1 with
//The with statement runs a block of code as if the properties of a
//specified object were variables in scope for that code

with (object)
statement

//This statement creates a temporary scope with the properties of object
//as variables and then executes statement within that scope.
with(document.forms[0]) {
    // Access form elements directly here. For example:
    name.value = "";
    address.value = "";
    email.value = "";
    }


//5.7 Declarations
//The keywords const, let, var, function, class, import, and export are not technically statements, 
//but they look a lot like statements,


