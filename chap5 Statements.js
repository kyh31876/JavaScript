//JavaScript statements are composed of:
//Values, Operators, Expressions, Keywords, and Comments.



//Conditionals : Statements like "if" and "switch"

//Loops: Statements like "while" and "for" that execute other statements repetitively

//Jumps: Statements like 'break', 'return', 'throw' that cause the interpreter to jump
//to another program




//5.1 Expression Statements
greeting = "Hello " + name;
i *= 3;

counter++;//These have the side effect of changing a variable value, 
//just as if an assignment had been performed:



//you wouldn’t just compute a cosine and discard the result:
Math.cos(x);


//But you might well compute the value and assign it to a variable for future use:
cx =Math.cos(x);



//5.2 Compound and Empty Statements

//JavaScript Code Blocks

/*The purpose of code blocks is to define statements to be executed together.
One place you will find statements grouped together in blocks, 
is in JavaScript functions: */

{
    x = Math.PI;
    cx = Math.cos(x);
    console.log("cos(π) = " + cx);
}
/* ther are a few thing to note, 
it does not end with a semicolon. 
than the lines inside the block are indented relative to the curly braces */




/* A compound statement allows you to use multiple statement where syntax exprect a 
single statement*/



//Empty 
/*An empty statement is used to provide no statement, 
although the JavaScript syntax would expect one. */

//Syntax
;

//The JavaScript interpreter takes no action when it executes an empty statement.



//Empty loop body

let arr = [1, 2, 3]; // Assign all array values to 0
for (let i = 0; i < arr.length; arr[i++] = 0) /* empty statement */ ;
console.log(arr); // [0, 0, 0]

//The empty statement is sometimes used with loop statements.




//5.3 Conditionals


//5.3.1 if/else Statement



//if statement specifies a block of code to be executed if a condition is true:
if (condition) {
    // block of code to be executed if the condition is true
}






//else statement specifies a block of code to be executed if the condition is false:
if (condition) {
    // block of code to be executed if the condition is true
} else {
    // block of code to be executed if the condition is false
}


if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
//default an "else" clause is part of the nearest "if" statement.


if (i === j) {
    if (j === k) {
        console.log("i equals k");
    }
} else { // What a difference the location of a curly brace makes!
    console.log("i doesn't equal j");
}





//The else if statement specifies a new condition if the first condition is false:
if (condition1) {
    // block of code to be executed if condition1 is true
} else if (condition2) {
    // block of code to be executed if the condition1 is false and condition2 is true
} else {
    // block of code to be executed if the condition1 is false and condition2 is false
}


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

/* The "switch" statement evaluates an expression, 
matching the expression's value to a case clause, 
and executes statements associated with that case, 
as well as statements in cases that follow the matching case. */


expression
//An expression whose result is matched against each case clause.

case valueN //Optional
/*A 'case' clause used to match against expression. 
If the expression matches the specified valueN, the statements inside the 'case' clause 
are executed until either the end of the switch statement or a break. */

default //Optional
/*A 'default' clause; if provided, this clause is executed 
if the value of expression doesn't match any of the case clauses. */



//Syntax
switch (expression) {
    case value1:
        //Statements executed when the
        //result of expression matches value1
        [break;]
    case value2:
        //Statements executed when the
        //result of expression matches value2
        [break;]
    ...
    case valueN:
        //Statements executed when the
        //result of expression matches valueN
        [break;]
    [default:
        //Statements executed when none of
        //the values match the value of the expression
        [break;]]
}

//The "break" keyword breaks out of the switch block. 
//If "break" is omitted, the next code block in the switch statement is executed.

//The "default" keyword specifies some code to run if there is no case match.




//What happens if I forgot a break?


/* If you forget a "break" then the script will run from the "case" 
where the criterion is met and will run the "cases" 
after that regardless if a criterion was met. */

var foo = 0;
switch (foo) {
    case -1:
        console.log('negative 1');
        break;
    case 0: // foo is 0 so criteria met here so this block will run
        console.log(0);
        // NOTE: the forgotten break would have been here
    case 1: // no break statement in 'case 0:' so this case will run as well
        console.log(1);
        break; // it encounters this break so will not continue into 'case 2:'
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');
} //0 1


//Multi-'case' : single operation
var Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal is not extinct.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal is extinct.');
} 


//Multi-'case' : chained operations

var foo = 1;
var output = 'Output: ';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}


//5.4 Loops

//5.4.1 while

//Syntax
while (condition)
  statement

condition
/*An expression evaluated before each pass through the loop. 
If this condition evaluates to true, statement is executed. 
When condition evaluates to false, execution continues with the statement 
after the while loop. */

statement
/*An optional statement that is executed as long as the condition evaluates to true. 
To execute multiple statements within the loop, use a block statement ({ ... }) 
to group those statements. */
  

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



const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}



//5.5 Jumps

//5.5.1 Labeled Statements
identifier: statement
//you give it a name that you can use to refer to it elsewhere in your program.


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
continue;

//With a label reference, the break statement can be used 
//to jump out of any code block:
continue labelname;

//can be used only within the body of a loop.

//an unlabeled continue statement being used to skip 
//the rest of the current iteration of a loop when an error occurs:
for(let i = 0; i < data.length; i++) {
    if (!data[i]) continue; // Can't proceed with undefined data
    total += data[i];
}

//5.5.4 return
//The return statement ends function execution 
//and specifies a value to be returned to the function caller.


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
//The yield keyword is used to pause and resume a generator function 

function* range(from, to) {
    for(let i = from; i <= to; i++) {
        yield i;
    }
}

//5.5.6 throw

throw expression;
//An exception is a signal that indicates that some sort of exceptional
//condition or error has occurred. 



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


