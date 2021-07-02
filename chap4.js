//Primary Expressions
//Primary expressions in JavaScript are constant or literal values,

//Literals are constant values that are embedded directly in your program.
1.23 // A number literal
"hello" // A string literal
/pattern/ // A regular expression literal

//The this keyword is used to different values in different places in the program

i // Evaluates to the value of the variable i.
sum // Evaluates to the value of the variable sum.
undefined // The value of the "undefined" property of the global object

//4.2 Object and Array Initializers

// /An object initializer is enclosed in curly braces ({}).
//These initializer expressions are sometimes called object literals and array literals.

[] // An empty array: no expressions inside brackets means no elements
[1+2,3+4] // A 2-element array. First element is 3, second is 7

let matrix = [[1,2,3], [4,5,6], [7,8,9]];//the value of an array initializer 
//expression may be different each time it is evaluated.

let sparseArray = [1,,,,5]; //A single trailing comma is allowed after the last expression in an array
//initializer and does not create an undefined element


let p = { x: 2.3, y: -1.2 }; // An object with 2 properties
let q = {}; // An empty object with no properties
q.x = 2.3; q.y = -1.2; // Now q has the same properties as p

//Object literals can be nested.
let rectangle = {
    upperLeft: { x: 2, y: 2 },
    lowerRight: { x: 4, y: 5 }
    };

//4.3 Function Definition Expressions

//a function definition expression is a “function literal” in the same way
// This function returns the square of the value passed to it.
let square = function(x) { return x * x; };

//4.4 Property Access Expressions

//JavaScript defines two syntaxes for property access:
expression . identifier
expression [ expression ]


let o = {x: 1, y: {z: 3}}; // An example object
let a = [o, 4, [5, 6]]; // An example array that contains
the object
o.x // => 1: property x of expression o
o.y.z // => 3: property z of expression o.y
o["x"] // => 1: property x of object o
a[1] // => 4: element at index 1 of expression a
a[2]["1"] // => 6: element at index 1 of expression a[2]
a[0].x // => 1: property x of expression a[0]


//If the value is null or undefined, the expression throws a TypeError

//4.4.1 Conditional Property Access
expression ?. identifier
expression ?.[ expression ]

a?.b //If a is null or undefined, then the expression evaluates to undefined without any attempt to access the
//property b

let a = { b: null };
a.b?.c.d // => undefined

let a = { b: {} }; //object has no property named c, then a.b?.c.d will again throw a TypeError
a.b?.c?.d // => undefined


a?.b.c//value of a is null or undefined, then the entire expression immediately evaluates to
//undefined, and subexpressions b and c are never even evaluated


let a; // Oops, we forgot to initialize this variable!
let index = 0;
try {
a[index++]; // Throws TypeError
} catch(e) {
index // => 1: increment occurs before TypeError is thrown
}
a?.[index++] // => undefined: because a is undefined
index // => 1: not incremented because ?.[] shortcircuits
a[index++] // !TypeError: can't index undefined.

//4.5 Invocation Expressions


//An invocation expression is JavaScript’s syntax for calling 
//(or executing) a function or method.

f(0) // f is the function expression; 0 is the argument expression.
Math.max(x,y,z) // Math.max is the function; x, y, and z are the arguments.
a.sort() // a.sort is the function; there are no arguments.

//If that expression is a property access expression, 
//then the invocation is known as a method invocation.

//4.5.1 Conditional Invocation

function square(x, log) { // The second argument is an optional function
    if (log) { // If the optional function is passed
    log(x); // Invoke it
    }
    return x * x; // Return the square of the argument
    }

//you can simply write the function invocation using ?.(),
function square(x, log) { // The second argument is an optional function
    log?.(x); // Call the function if there is one
    return x * x; // Return the square of the argument
    }
//Note, however, that ?.() only checks whether the lefthand side is null or undefined.


//if the value to the left of ?. is null or undefined,
//then none of the argument expressions within the parentheses are evaluated:
let f = null, x = 0;
try {
f(x++); // Throws TypeError because f is null
} catch(e) {
x // => 1: x gets incremented before the exception is thrown
}
f?.(x++) // => undefined: f is null, but no exception thrown
x // => 1: increment is skipped because of shortcircuiting


o.m() // Regular property access, regular invocation
o?.m() // Conditional property access, regular invocation
o.m?.() // Regular property access, conditional invocation


//4.6 Object Creation Expressions

//An object creation expression creates a new object and invokes a
//function (called a constructor) to initialize the properties of that object.

new Object()
new Point(2,3)

//If no arguments are passed to the constructor function in an object
//creation expression, the empty pair of parentheses can be omitted:

new Object
new Date

//4.7.3 Operator Side Effects

//side effects, and their evaluation may affect the result of future evaluations. 
//No other JavaScript operators have side effects, but function invocation
//and object creation expressions will have side effects if any of the
//operators used in the function or constructor body have side effects.


//4.7.4 Operator Precedence

// my is an object with a property named functions whose value is an
// array of functions. We invoke function number x, passing it argument
// y, and then we ask for the type of the value returned.
typeof my.functions[x](y)

//array index, and function invocation, all of which have higher priority
//than operators.

//4.7.5 Operator Associativity      

//Left-to-right associativity means that operations are
//performed from left to right

w = x - y - z;
//is the same as:
w = ((x - y) - z);

y = a ** b ** c;
x = ~-y;
w = x = y = z;
q = a?b:c?d:e?f:g;
//are equivalent to:
y = (a ** (b ** c));
x = ~(-y);
w = (x = (y = z));
q = a?b:(c?d:(e?f:g));


//4.8.1 The + Operator

//binary + operator adds numeric operands or concatenates string operands:
1 + 2 // => 3: addition
"1" + "2" // => "12": concatenation
"1" + 2 // => "12": concatenation after number-tostring
1 + {} // => "1[object Object]": concatenation after object-to-string
true + true // => 2: addition after boolean-to-number
2 + null // => 2: addition after null converts to 0
2 + undefined // => NaN: addition after undefined converts to NaN

1 + 2 + " blind mice" // => "3 blind mice"
1 + (2 + " blind mice") // => "12 blind mice"

//4.8.2 Unary Arithmetic Operators

//the unary operators all have high precedence and are all right-associative


//Unary plus (+)
    //The unary plus operator converts its operand to a number (or to NaN) 
    //and returns that converted value.
    //When used with an operand that is already a number, it doesn’t do anything

//Unary minus (-)
    //it converts its operand to anumber, 
    //if necessary, and then changes the sign of the result.


//Increment (++)
    // /The return value of the ++ operator depends on its position relative 
    //to the operand

    let i = 1, j = ++i; //it is known as the pre-increment operator, 
    //it increments the operand and evaluates to the incremented value of that operand.

    let n = 1, m = n++; //is known as the post-increment operator, it
    //increments its operand but evaluates to the unincremented value of that operand.

//Note that the expression x++ is not always the same as x=x+1.
//The ++ operator never performs string concatenation

//Decrement (--)
    //Like the ++ operator, the return value of
    //-- depends on its position relative to the operand.



1 + 2 // => 3: addition.
"1" + "2" // => "12": concatenation.
"1" + 2 // => "12": 2 is converted to "2".
11 < 3 // => false: numeric comparison.
"11" < "3" // => true: string comparison.
"11" < 3 // => false: numeric comparison, "11" converted to 11.
"one" < 3 // => false: numeric comparison, "one" converted to NaN.


//4.9.3 The in Operator
// a left-side operand that is a string, symbol, or value that can be converted to a string
let point = {x: 1, y: 1}; // Define an object
"x" in point // => true: object has property named "x"
"z" in point // => false: object has no "z" property.
"toString" in point // => true: object inherits toString method
let data = [7,8,9]; // An array with elements (indices) 0, 1, and 2
"0" in data // => true: array has an element "0"
1 in data // => true: numbers are converted to strings
3 in data // => false: no element 3


//4.9.4 The instanceof Operator
// that is an object and a right-side operand that identifies a class of objects.

let d = new Date(); // Create a new object with the Date() constructor
d instanceof Date // => true: d was created with Date()
d instanceof Object // => true: all objects are instances of Object
d instanceof Number // => false: d is not a Number object
let a = [1, 2, 3]; // Create an array with array literal syntax
a instanceof Array // => true: a is an array
a instanceof Object // => true: all arrays are objects
a instanceof RegExp // => false: arrays are not regular expressions

//If the left-side operand of instanceof is not an object, instanceof returns false. 
//If the righthand side is not a class of objects, it throws a TypeError.



//4.10.1 Logical AND (&&)
x === 0 && y === 0 // true if, and only if, x and y are both 0

let o = {x: 1};
let p = null;
o && o.x // => 1: o is truthy, so return value of o.x
p && p.x // => null: p is falsy, so return it and don't evaluate p.x

if (a === b) stop(); // Invoke stop() only if a === b
(a === b) && stop(); // This does the same thing


//4.10.2 Logical OR (||)
// If maxWidth is truthy, use that. Otherwise, look for a value in
// the preferences object. If that is not truthy, use a hardcoded constant.
let max = maxWidth || preferences.maxWidth || 500;

//4.10.3 Logical NOT (!)

// DeMorgan's Laws
!(p && q) === (!p || !q) // => true: for all values of p and q
!(p || q) === (!p && !q) // => true: for all values of p and q

//4.11 Assignment Expressions

//JavaScript uses the = operator to assign a value to a variable or property.

i = 0; // Set the variable i to 0.
o.x = 1; // Set the property x of object o to 1.


//4.11.1 Assignment with Operation

total += salesTax;  //the += operator performs addition and assignment.
total = total + salesTax; //equivalent to this one 

// two assignments are not the same:
data[i++] *= 2;
data[i++] = data[i++] * 2;


//4.12 Evaluation Expressions

//4.12.1 eval()

eval("x=1")


eval("var y = 3;") //it declares a new local variable y.
eval("function f() { return x+1; }"); //function can declare a local function with code like this:

//4.12.2 Global eval()

const geval = eval; // Using another name does a global eval
let x = "global", y = "global"; // Two global variables
function f() { // This function does a local eval
let x = "local"; // Define a local variable
eval("x += 'changed';"); // Direct eval sets local variable
return x; // Return changed local variable
}
function g() { // This function does a global eval
let y = "local"; // A local variable
geval("y += 'changed';"); // Indirect eval sets global variable
return y; // Return unchanged local variable
}
console.log(f(), x); // Local variable changed: prints "localchanged global":
console.log(g(), y); // Global variable changed: prints "local globalchanged":


//4.13 Miscellaneous Operators

//4.13.1 The Conditional Operator (?:)

//first goes before the ?, the second goes between the ? and the :

x > 0 ? x : -x // The absolute value of x

greeting = "hello " + (username ? username : "there");

//This is equivalent to,the following if statement: 
greeting = "hello ";
if (username) {
greeting += username;
} else {
greeting += "there";
}


//4.13.2 First-Defined (??) ,nullish coalescing

//evaluates to its first defined operand: 
//if its left operand is not null and not undefined, it returns that value.

a ?? b //is equivalent to:
(a !== null && a !== undefined) ? a : b

// If maxWidth is truthy, use that. Otherwise, look for a value in
// the preferences object. If that is not truthy, use a hardcoded constant.
let max = maxWidth || preferences.maxWidth || 500;

let max = maxWidth ?? preferences.maxWidth ?? 500;


let options = { timeout: 0, title: "", verbose: false, n:
null };
options.timeout ?? 1000 // => 0: as defined in the object
options.title ?? "Untitled" // => "": as defined in the object
options.verbose ?? true // => false: as defined in the object
options.quiet ?? false // => false: property is not defined
options.n ?? 10 // => 10: property is null


(a ?? b) || c // ?? first, then ||
a ?? (b || c) // || first, then ??
a ?? b || c // SyntaxError: parentheses are required


//4.13.3 The typeof Operator

typeof(undefinded) //'undefined'
typeof(null) //'object'
typeof(true) && typeof(false) //'boolean'
typeof(NaN) //'number'
typeof(string) //'string'

// If the value is a string, wrap it in quotes, otherwise, convert
(typeof value === "string") ? "'" + value + "'" : value.toString()

//4.13.4 The delete Operator

//delete is a unary operator that attempts to delete the object property
//or array element specified as its operand.

let o = { x: 1, y: 2}; // Start with an object
delete o.x; // Delete one of its properties
"x" in o // => false: the property does not exist anymore
let a = [1,2,3]; // Start with an array
delete a[2]; // Delete the last element of the array
2 in a // => false: array element 2 doesn't exist anymore
a.length // => 3: note that array length doesn't change, though

let o = {x: 1, y: 2};
delete o.x; // Delete one of the object properties; returns true.
typeof o.x; // Property does not exist; returns "undefined".
delete o.x; // Delete a nonexistent property; returns true.
delete 1; // This makes no sense, but it just returns true.
// Can't delete a variable; returns false, or SyntaxError in strict mode.
delete o;
// Undeletable property: returns false, or TypeError in strict mode.
delete Object.prototype;


//4.13.7 The comma Operator (,)
//operands may be of any type.
i=0, j=1, k=2;
//The lefthand expression is always evaluated, but its value is discarded,

// The first comma below is part of the syntax of the let statement
// The second comma is the comma operator: it lets us squeeze 2 
// expressions (i++ and j--) into a statement ( the for loop) that expects 1.
for(let i=0,j=10; i < j; i++,j--) {
console.log(i+j);
}
