/* Statements are syntax constructs and commands that perform actions.

Conditionals : Statements like "if" and "switch"

Loops: Statements like "while" and "of" that execute other statements repetitively

Jumps: Statements like 'break', 'return', 'throw' that cause the interpreter 
to jump to another program */


//5.1 Expression Statements
greeting = "Hello " + name;
i *= 3;

counter++;//These have the side effect of changing a variable value, 
//just as if an assignment had been perofmed:



//you wouldn’t just compute a cosine and discard the result:
Math.cos(x);


//But you might well compute the value and assign it to a variable of future use:
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
/* ther are a few thing to note, it does not end with a semicolon. 
than the lines inside the block are indented relative to the curly braces */


/* A compound statement allows you to use multiple statement where syntax exprect a 
single statement*/



//Empty 
/*An empty statement is used to provide no statement, 
although the JavaScript syntax would expect one. */

//Syntax
;

//The JavaScript interpreter takes no action when it executes an empty statement.


//Semicolons in JavaScript


//1 when the following line begins with code that breaks the previous one\

const hey = 'hey';
const you = 'hey';
const heyYou = hey + ' ' + you['h', 'e', 'y'].ofEach((letter) => console.log(letter))

//2 when the next line starts with a }, closing the current block


//3 when the end of the source code file is reached





//4 when there is a return statement on its own line

//5 when there is a break statement on its own line

//6 when there is a throw statement on its own line

//7 when there is a continue statement on its own line




//When Should  Not Use Semicolons
//of 
//if else
//while



//Empty loop body
let arr = [1, 2, 3]; // Assign all array values to 0
of (let i = 0; i < arr.length; arr[i++] = 0) /* empty statement */ ;
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


/* the inner if statement ofms the single statement 
allowed by the syntax of the outer if statement. */
var i,j,k=1;
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
    // block of code to be executed if the condition1 and condition2 are false
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




//What happens if I ofgot a break?


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

/* the interpreter first evaluates expression.
if value of the expression is falsy, then skip over the statement of loop body 
and moves onto the next statement.*/

//an expression that starts off truthy would never change, and the loop would never end

while (i < 10) {
    text += "The number is " + i;
    i++;
  }

//the expression become false, while statement finishes 
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";
var i = 0;
while (i < cars.length) {
  text += cars[i] + "<br>";
  i++;
}


//5.4.2 do/while

/* The "do...while" statement creates a loop that executes a specified statement 
until the test condition evaluates to false. */



//Syntax
do
   statement
while (condition);

statement
/* A statement that is executed at least once and 
is re-executed each time the condition evaluates to true. */


condition 
/* An expression evaluated after each pass through the loop. 
If condition evaluates to true, the statement is re-executed. 
When condition evaluates to false, control passes to the statement  
following the do...while. */





/*  the do...while loop iterates at least once and reiterates 
until i is no longer less than 5. */
var result = '';
var i = 0;
do {
   i += 1;
   result += i + ' ';
}
while (i > 0 && i < 5);
// Despite i == 0 this will still loop as it starts off without the test
console.log(result);




//5.4.3 for




//Syntax 

for(initialExpression; condition; updateExpression) {
    // for loop body
}
//The initialExpression initializes and/or declares variables and executes only once.

//The condition is evaluated.

//If the condition is false, the for loop is terminated.
//if the condition is true, the block of code inside of the for loop is executed.

//The updateExpression updates the value of initialExpression when the condition is true.

//The condition is evaluated again.This process continues until the condition is false.

for (let i = 0; i < 9; i++) {
    console.log(i);
    // more statements
}
//0 1 2 3 4 5 6 7 8

//All three expressions in the head of the for loop are optional.

//in the initialization block it is not required to initialize variables:
var i = 0;
for (; i < 9; i++) {
    console.log(i);
    // more statements
}
//0 1 2 3 4 5 6 7 8




//5.4.4 for/of

/**The for...of statement creates a loop iterating over iterable objects, including: 
 * built-in String, Array, array-like objects (e.g., arguments or NodeList), 
 * TypedArray, Map, Set, and user-defined iterables. */



//Syntax
for (element of iterable) {
    // body of for...of
}

iterable  //iterable object (array, set, strings, etc).
element //items in the iterable

var data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;
for(var element of data) {
    sum += element;
}
sum // => 45
//the parentheses contain a variable declaration followed by the of keyword and 
//an expression that evaluates to an iterable object,

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

var frequency = {};
for(var letter of "mississippi") {
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

/*The for..in loop in JavaScript allows you to iterate over 
all property keys of an object. */

//Syntax
for (key in object) {
    // body of for...in
}

//In each iteration of the loop, a key is assigned to the key variable.
// The loop continues for all object properties.



key
//A different property name is assigned to variable on each iteration.

object
//Object whose non-Symbol enumerable properties are iterated over.


//Iterate Through an Object
const student = {
    name: 'Monica',
    class: 7,
    age: 12
}

// using for...in
for ( let key in student ) {

    // display the properties
    console.log(`${key} => ${student[key]}`);
}

/* the for...in loop is used to iterate over the student object 
and print all its properties. */



//Update Values of Properties
var salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}
// using for...in
for (let i in salaries) {
    // add a currency symbol
    let salary = "$" + salaries[i];
    // display the values
    console.log(`${i} : ${salary}`);
}

/* the for...in loop is used to iterate over the properties of the salaries object. 
Then, the string $ is added to each value of the object. */


//for...in with Strings

const string = 'code';
// using for...in loop
for (let i in string) {
    console.log(string[i]);
}


//for...in with Arrays

// define array
const arr = [ 'hello', 1, 'JavaScript' ];

// using for...in loop
for (let x in arr) {
    console.log(arr[x]);
}

//One of the better ways to iterate over an array is using the for...of loop.







//Difference between for...of and for...in

//for..in iterates over all enumerable property keys of an object

//for..of iterates over the values of an iterable object. 


let arr = ['el1', 'el2', 'el3'];
arr.addedProp = 'arrProp';

// elKey are the property keys
for (let elKey in arr) {
  console.log(elKey);
} //0 1 2 addedProp

// elValue are the property values
for (let elValue of arr) {
  console.log(elValue)
}//el1 el2 el3



//5.5 Jumps

//5.5.1 Labeled Statements

//It is prefixing a statement with an identifier which you can refer to.
//The label is applied to a block of code or a statement.


//Syntax
label : statement

label
//Any JavaScript identifier that is not a reserved word.

statement
//A JavaScript statement. 'break' can be used with any labeled statement,
//and 'continue' can be used with looping labeled statements.






//Using a labeled continue with for loops
let i, j;

loop1:
for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
   loop2:
   for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
      if (i === 1 && j === 1) {
         continue loop1;
      }
      console.log('i = ' + i + ', j = ' + j);
   }
}


//Using a labeled continue statement

/*Given an array of items and an array of tests, this example counts
the number of items that passes all the tests. */
let itemsPassed = 0;
let i, j;

top:
for (i = 0; i < items.length; i++) {
  for (j = 0; j < tests.length; j++) {
    if (!tests[j].pass(items[i])) {
      continue top;
    }
  }
  itemsPassed++;
}

//Using a labeled break statement

/* Given an array of items and an array of tests, this example determines 
whether all items pass all tests. */
let allPass = true;
let i, j;

top:
for (i = 0; i < items.length; i++) {
  for (j = 0; j < tests.length; j++) {
    if (!tests[j].pass(items[i])) {
      allPass = false;
      break top;
    }
  }
}


//5.5.2 break

/* The break statement terminates the current loop, switch, or label statement 
and transfers program control to the statement following the terminated statement. */

//Syntax
break [label];

label //Optional
/*Identifier associated with the label of the statement. 
If the statement is not a loop or switch, this is required. */

//break with for Loop
for (let i = 1; i <= 5; i++) {
    // break condition     
    if (i == 3) {
        break;
    }
    console.log(i);
}



//break in switch statements
const food = "sushi";

switch (food) {
  case "sushi":
    console.log("Sushi is originally from Japan.");
    break;
  case "pizza":
    console.log("Pizza is originally from Italy.");
    break;
  default:
    console.log("I have never heard of that dish.");
    break;
}



//break with while Loop

/*program to find the sum of positive numbers
if the user enters a negative numbers, break ends the loop
the negative number entered is not added to sum */

let sum = 0, number;
while(true) {
    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));
    // break condition
    if(number < 0) {
        break;
    }
    // add all positive numbers
    sum += number;
}
// display the sum
console.log(`The sum is ${sum}.`);



//break with Nested Loop
//first loop
for (let i = 1; i <= 3; i++) {

    //second loop
    for (let j = 1; j <= 3; j++) {
        if (i == 2) {
          break;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}


//break in labeled blocks

/* The following code uses break statements with labeled blocks. 
A break statement must be nested within any label it references. */
outer_block: {
    inner_block: { //Notice that inner_block is nested within outer_block.
      console.log('1');
      break outer_block; // breaks out of both inner_block and outer_block
      console.log(':-('); // skipped
    }
    console.log('2'); // skipped
}





//5.5.3 continue

/* The continue statement is used to skip the current iteration of the loop
and the control flow of the program goes to the next iteration. */


//Syntax
continue [label];

label //Optional
//Identifier associated with the label of the statement






//continue with :for Loop

/* In a for loop, continue skips the current iteration 
and control flow jumps to the updateExpression. */


// program to print the value of i
for (let i = 1; i <= 5; i++) {

    // condition to continue    
    if (i == 3) {
        continue;
    }
    console.log(i);
}


//continue with :while Loop 
/* In a while loop, continue skips the current iteration and control 
flow of the program jumps back to the while condition. */



// program to calculate positive numbers only
// if the user enters a negative number, that number is skipped from calculation

// negative number -> loop terminate
// non-numeric character -> skip iteration

let sum = 0;
let number = 0;

while (number >= 0) {
    // add all positive numbers
    sum += number;
    // take input from the user
    number = parseInt(prompt('Enter a number: '));
    // continue condition
    if (isNaN(number)) {
        console.log('You entered a string.');
        number = 0; // the value of number is made 0 again
        continue;
    }
}
// display the sum
console.log(`The sum is ${sum}.`);



//continue with Nested Loop

/* When continue is used inside of two nested loops, 
continue skips the current iteration of the inner loop. */
// nested for loops

// first loop
for (let i = 1; i <= 3; i++) {
    // second loop
    for (let j = 1; j <= 3; j++) {
        if (j == 2) {
          continue;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}




//5.5.4 return

/*The return statement ends function execution and specifies a value 
to be returned to the function caller.*/



//Syntax
return [expression]; 


expression

/* The expression whose value is to be returned. If omitted, 
undefined is returned instead. */


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


//Syntax
[rv] = yield [expression]


expression //Optional
/*Defines the value to return from the generator function via the iterator protocol. 
If omitted, undefined is returned instead. */

rv //Optional
/*Retrieves the optional value passed to the generator's next() method 
to resume its execution. */

function* countAppleSales () {
    let saleList = [3, 7, 5]
    for (let i = 0; i < saleList.length; i++) {
      yield saleList[i]
    }
  }
//Once a generator function is defined, it can be used by constructing 
//an iterator as shown.
let appleStore = countAppleSales()  // Generator { }
console.log(appleStore.next())      // { value: 3, done: false }
console.log(appleStore.next())      // { value: 7, done: false }
console.log(appleStore.next())      // { value: 5, done: false }
console.log(appleStore.next())      // { value: undefined, done: true }



//5.5.6 throw
// /The throw statement lets you create custom errors.
//throw statement handles user-defined exceptions. 


//Syntax
throw expression;

expression
//The expression to throw.

/*Use the throw statement to throw an exception. 
When you throw an exception, expression specifies the value of the exception. */

throw 'Error2'; // generates an exception with a string value
throw 42;       // generates an exception with the value 42
throw true;     // generates an exception with the value true
throw new Error('Required');  // generates an error object with the message of Required


//5.5.7 try/catch/finally

//The "try" statement lets you test a block of code for errors.

//The "catch" statement lets you handle the error.

/* The "finally" statement lets you execute code, after try and catch, 
regardless of the result. */






