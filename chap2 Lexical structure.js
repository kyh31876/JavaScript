//2.2 Comments

// Any text between a // and the end of a line 
// is treated as a comment and is ignored by JavaScript. 

//Any text between the characters /* ... */ is also treated as a comment;



//2.3 Literals

/* Literals are the fixed value that cannot be changed, 
you do not need to specify any type of keyword to write literals. */


//Array literals

/* each of which represents an array element, enclosed in [].
When you create an array using an array literal, 
it is initialized with the specified values as its elements,  */
var coffees = ['French Roast', 'Colombian', 'Kona'];


//Extra commas in array literals

/* If you put two " , " in a row ,the array fills in the value "undefined" 
for the unspecified elements */

var fish = ['Lion', , 'Angel'];
fish[0]; //"Lion"
fish[1]; //undefined
fish[2] //"Angel"


//Boolean literals

/* The Boolean type has two literal values: true and false. */
true // Boolean literal
false // Boolean literal


//Numeric literals

/* JavaScript numeric literals include "integer literals" in different bases 
as well as "floating-point" literals in base-10. */


//JavaScript Floating-Point Literal 

/*It contains a decimal point(.)  A fraction is a floating-point literal
It may contain an Exponent. */
6.99689 // floating-point literal
-167.39894 // negative floating-point literal


//String Literal

/* within a '' or ""  */
"Study" // String literal
'tonight' // String literal 


//2.4 Identifiers and Reserved Words


//2.4.1 JavaScript keywords

/* 'Keywords' are reserved words that are part of the syntax 
in the programming language. */

const a = 'hello';
/*'const' is a keyword that denotes that 'a' is a constant.
Keywords cannot be used to name identifiers. */


//2.4.2 JavaScript Identifiers

/* An identifier is a name that is given to entities like 
variables, functions, class, etc. */


//Rules for Naming JavaScript Identifiers

//valid
const a = 'hello';
const _a = 'hello';
const $a = 'hello';
//Identifier names cannot start with numbers. For example,


//invalid
const 1a = 'hello'; // this gives an error
//Identifier names cannot start with numbers. 


var y="hi";
var Y = 5;
console.log(y); // hi
console.log(Y); // 5
//JavaScript is case-sensitive. So y and Y are different identifiers. 

//invalid
const new = 5; // Error! new is a keyword.
//Keywords cannot be used as identifier names. 



//2.6 Optional Semicolons

//The rules of JavaScript Automatic Semicolon Insertion


//1 when the next line starts with code that breaks the current one 
//(code can spawn on multiple lines)
const hey = 'hey';
const you = 'hey';
const heyYou = hey + ' ' + you['h', 'e', 'y'].forEach((letter) => console.log(letter))
//2. when the next line starts with a }, closing the current block

//3. when the end of the source code file is reached

//4. when there is a return statement on its own line

//5. when there is a break statement on its own line

//6. when there is a throw statement on its own line

//7. when there is a continue statement on its own line



function foo() {
} // No semicolon

//...if it's an assignment:
var foo = function() {

}; // Semicolon

//...or a self invoking function:

(function () {

})(); // Semicolon


//if a statement begins with (, [, /, +, or -, there is a chance
//that it could be interpreted as a continuation of the statement before.

let x = 0 // Semicolon omitted here
;[x,x+1,x+2].forEach(console.log) // Defensive ; keeps this statement separate