//3.1.1 primitive type

/* These six types are considered to be 'primitives'. 
A primitive is not an 'object' and has no methods of its own. 
All primitives are immutable. */
/*
Boolean — true or false

Null — no value

Undefined — a declared variable but hasn’t been given a value

Number — integers, floats, etc

String — an array of characters i.e words

Symbol — a unique value that's not equal to any other value
*/


//3.2 Numbers

/* Number represents integer and floating numbers (decimals and exponentials) */


//3.2.1 Integer Literals

/* When a number appears directly in a JavaScript program, 
it’s called a "numeric literal" */
0
3 
10000000



//3.2.2 Floating-Point Literals
//Floating-point literals can have a decimal point;

//[digits][.digits][(E|e)[(+|-)]digits]

3.14
2345.6789
.333333333333333333
6.02e23 // 6.02 × 10²³
1.4738223E-32 // 1.4738223 × 10⁻³²

//3.2.3 Arithmetic in JavaScript

/*JavaScript supports more complex mathematical operations through 
a set of functions and constants defined as properties of the Math object: */
Math.pow(2,53) // => 9007199254740992: 2 to the power 53
Math.round(.6) // => 1.0: round to the nearest integer
Math.ceil(.6) // => 1.0: round up to an integer
Math.floor(.6) // => 0.0: round down to an integer
Math.abs(-5) // => 5: absolute value
Math.max(x,y,z) // Return the largest argument
Math.min(x,y,z) // Return the smallest argument
Math.random() // Pseudo-random number x where 0 <= x < 1.0
Math.PI // π: circumference of a circle / diameter
Math.E // e: The base of the natural logarithm
Math.sqrt(3) // => 3**0.5: the square root of 3
Math.pow(3, 1/3) // => 3**(1/3): the cube root of 3
Math.sin(0) // Trigonometry: also Math.cos, Math.atan, etc.
Math.log(10) // Natural logarithm of 10
Math.log(100)/Math.LN10 // Base 10 logarithm of 100
Math.log(512)/Math.LN2 // Base 2 logarithm of 512
Math.exp(3) // Math.E cubed


//ES6 defines more functions on the Math object:
Math.cbrt(27) // => 3: cube root
Math.hypot(3, 4) // => 5: square root of sum of squares of all arguments
Math.log10(100); // => 2: Base-10 logarithm
Math.log2(1024); // => 10: Base-2 logarithm
Math.log1p(x); // Natural log of (1+x); accurate for very small x
Math.expm1(x); // Math.exp(x)-1; the inverse of
Math.log1p();
Math.sign(x); // -1, 0, or 1 for arguments <, ==, or > 0
Math.imul(2,3); // => 6: optimized multiplication of 32-bit integers
Math.clz32(0xf); // => 28: number of leading zero bits in a 32-bit integer
Math.trunc(3.9); // => 3: convert to an integer by truncating fractional part
Math.fround(x); // Round to nearest 32-bit float number
Math.sinh(x); // Hyperbolic sine. Also Math.cosh(),
Math.tanh();
Math.asinh(x); // Hyperbolic arcsine. Also Math.acosh(),
Math.atanh();


/*JavaScript predefines global constants 'Infinity' and 'NaN to hold the
positive infinity and not-a-number value, and these values are also
available as properties of the Number object: */

Infinity; // A positive number too big to represent
Number.POSITIVE_INFINITY; // Same value 1/0 // => Infinity
Number.MAX_VALUE * 2; // => Infinity; overflow
-Infinity; // A negative number too big to represent
Number.NEGATIVE_INFINITY; // The same value
-1/0; // => -Infinity
-Number.MAX_VALUE * 2; // => -Infinity
NaN; // The not-a-number value
Number.NaN; // The same value, written another way
0/0; // => NaN
Infinity/Infinity; // => NaN
Number.MIN_VALUE/2; // => 0: underflow
-Number.MIN_VALUE/2; // => -0: negative zero
-1/Infinity; // -> -0: also negative 0
-0;


// The following Number properties are defined in ES6
Number.parseInt(); // Same as the global parseInt() function
Number.parseFloat(); // Same as the global parseFloat() function
Number.isNaN(x); // Is x the NaN value?
Number.isFinite(x); // Is x a number and finite?
Number.isInteger(x); // Is x an integer?
Number.isSafeInteger(x); // Is x an integer -(2**53) < x < 2**53?
Number.MIN_SAFE_INTEGER; // => -(2**53 - 1)
Number.MAX_SAFE_INTEGER; // => 2**53 - 1
Number.EPSILON; // => 2**-52: smallest difference between numbers





//3.3 Text


/*The JavaScript type for representing text is the string.

In ES6, strings are iterable, and if you use the for/of loop or ... operator 
with a string, it will iterate the actual characters of the string, 
not the 16-bit values. */


//3.3.1 String Literals
/*To include a string in a JavaScript program, enclose string with in ' or " */

"" // The empty string: it has zero characters
'testing'
"3.14"
'name="myform"'
"Wouldn't you prefer O'Reilly's book?"
"τ is the ratio of a circle's circumference to its radius"
`"She said 'hi'", he said.`

/*allow JavaScript expressions to be embedded within 
(or interpolated into) the string literal. */

/*you can break a string literal across multiple lines by
ending each line but the last with a backslash (\). */

// A string representing 2 lines written on one line:
'two\nlines'
// A one-line string written on 3 lines:
"one\
long\
line"

// A two-line string written on two lines:
`the newline character at the end of this line
is included literally in this string`

/*you must use the backslash character (\) to “escape” any
apostrophes that appear in single-quoted strings*/

//3.3.2 Escape Sequences in String Literals

/*'\' is conbined with the character that follow it, 
it represent that is not otherwise representable within the string*/

/*Sequence             Character represented
\0                      //The NUL character 
\b                      //Backspace 
\t                      //Horizontal tab 
\n                      //Newline 
\v                      //Vertical tab 
\f                      //Form feed 
\r                      //Carriage return 
\"                      //Double quote 
\'                      //Apostrophe or single quote 
\\                      //Backslash 

\xnn //The Unicode character specified by the two hexadecimal digits nn
\unnnn //The Unicode character specified by the four hexadecimal digits nnnn
\u{n}
*/

/*The Unicode character specified by the codepoint n, where n is one to six
hexadecimal digits between 0 and 10FFFF (ES6) */



//3.3.2.1 JavaScript Variables and Constants

//3.3.2.2 Variables
/* a variable is a container (storage area) to hold data.*/
let num = 5;
//'num' is a variable. It's storing 5.

//Declaring Variables
/* we use either 'var' or 'let' keyword to declare variables. 
and there are some differences between them.*/

/* 'var' is function scoped.  however, 'let' is block scoped  */


//3.3.2.3 Initializing Variables
/* We use the assignment operator '=' to assign a value to a variable.*/
let x;
x = 5;
//'5' is assigned to variable 'x'.


/* If you use a variable without initializing it, 
it will have an 'undefined' value.*/

let x; // x is the name of the variable
console.log(x); // undefined


//3.3.2.4 Changing the Value of Variables

// 5 is assigned to variable x
let x = 5; 
console.log(x); // 5

// vaue of variable x is changed
x = 3; 
console.log(x); // 3
/* The value of a variable may vary. Hence, the name variable. */



//3.3.3 Working with Strings

/*If you use the '+' operator with numbers, it adds them. 
But if you use '+' operator on strings, 
it join them by appending the second to the first */

let msg = "Hello, " + "world"; // Produces the string "Hello, world"
let greeting = "Welcome to my blog," + " " + name;
//javascript provide  a rich API for working with strings



let s = "Hello, world"; // Start with some text.

// Obtaining portions of a string
s.substring(1,4) // => "ell": the 2nd, 3rd, and 4th characters.
s.slice(1,4) // => "ell": same thing
s.slice(-3) // => "rld": last 3 characters
s.split(", ") // => ["Hello", "world"]: split at delimiter string

// Searching a string
s.indexOf("l") // => 2: position of first letter l
s.indexOf("l", 3) // => 3: position of first "l" at or after 3
s.indexOf("zz") // => -1: s does not include the substring "zz"
s.lastIndexOf("l") // => 10: position of last letter l

// Boolean searching functions in ES6 and later
s.startsWith("Hell") // => true: the string starts with these
s.endsWith("!") // => false: s does not end with that
s.includes("or") // => true: s includes substring "or"

// Creating modified versions of a string
s.replace("llo", "ya") // => "Heya, world"
s.toLowerCase() // => "hello, world"
s.toUpperCase() // => "HELLO, WORLD"
s.normalize() // Unicode NFC normalization: ES6
s.normalize("NFD") // NFD normalization. Also "NFKC", "NFKD"

// Inspecting individual (16-bit) characters of a string
s.charAt(0) // => "H": the first character
s.charAt(s.length-1) // => "d": the last character
s.charCodeAt(0) // => 72: 16-bit number at the specified position
s.codePointAt(0) // => 72: ES6, works for codepoints > 16 bits

// String padding functions in ES2017
"x".padStart(3) // => " x": add spaces on the left to a length of 3
"x".padEnd(3) // => "x ": add spaces on the right to a length of 3
"x".padStart(3, "*") // => "**x": add stars on the left to a length of 3
"x".padEnd(3, "-") // => "x--": add dashes on the right to a length of 3

// Space trimming functions. trim() is ES5; others ES2019
"test".trim() // => "test": remove spaces at start and end
"test".trimStart() // => "test ": remove spaces on left. Also trimLeft
"test".trimEnd() // => " test": remove spaces at right. Also trimRight

// Miscellaneous string methods
s.concat("!") // => "Hello, world!": just use + operator instead
"<>".repeat(5) // => "<><><><><>": concatenate n copies. ES6



/* Remember that strings are immutable in JavaScript. 
Methods like replace() and toUpperCase() return new strings: */


// a string using square brackets instead of the charAt() method:
let s = `hello world`;
s[0] // => "h"
s[s.length-1] // => "d"




//3.3.4 Template Literals (Template Strings)

/* Template literals(template strings) allow you to use 
strings or embedded expressions in the form of a string. 

They are enclosed in backticks ``*/
const name1 = 'Jack';
console.log(`Hello ${name1}!`); // Hello Jack!


//3.3.4.1 Template Literals for Strings

/* To use the same quotations inside the string, 
you can use the escape character \. */

// escape characters using \
const str3 = 'A \'quote\' inside a string';  // valid code
const str5 = "Another \"quote\" inside a string"; // valid code

/*Instead of using escape characters(\), you can use template literals.*/
const str1 = `This is a string`;
const str2 = `This is a string with a 'quote' in it`;
const str3 = `This is a string with a "double quote" in it`;


//3.3.4.2 Multiline Strings Using Template Literals

// using the + operator
const message1 = 'This is a long message\n' +  'that spans across multiple lines\n' 
+ 'in the code.'

//you can replace
const message1 = `This is a long message 
that spans across multiple lines
in the code.`



//3.3.4.3 Expression Interpolation

/* you would use the + operator to concatenate variables and expressions in a string.*/

const name = 'Jack';
console.log('Hello ' + name); // Hello Jack

/* With template literals, it's a bit easier to include variables 
and expressions inside a string. 
For that, we use the ${...} syntax. */

const name = 'Jack';
console.log(`Hello ${name}`); // Hello Jack

// template literals used with expressions
const result = `The sum of  4 + 5 is ${4 + 5}`;
console.log(result); //The sum of  4 + 5 is 9

console.log(`${result < 10 ? 'Too low': 'Very high'}`) //Very high


//3.3.4.4 Tagged Templates

/* you would use a function to pass arguments.*/
function tagExample(strings) {
    return strings;
}
// passing argument
const result = tagExample('Hello Jack');

console.log(result)

/* However, you can create tagged templates (that behave like a function) 
using template literals.
Tagged template is written like a function definition. 
However, you do not pass parentheses () when calling the literal */

function tagExample(strings) {
    return strings;
}
// creating tagged template
const result = tagExample`Hello Jack`;

console.log(result);

/* An array of string values are passed as the first argument of a tag function. 
You could also pass the values and expressions as the remaining arguments. */

const name = 'Jack';
const greet = true;

function tagExample(strings, nameValue) {
    let str0 = strings[0]; // Hello
    let str1 = strings[1]; // , How are you?

    if(greet) {
        return `${str0}${nameValue}${str1}`;
    }
}

// creating tagged literal and passing argument name :
const result = tagExample`Hello ${name}, How are you?`;
console.log(result); //Hello Jack, How are you?






//3.4 Boolean Values

/* booleans are the primitive data types that can either be 'true' or 'false' */

const a = 'true';
console.log(typeof a); // string
/*  If you wrap true or false in a quote, then they are considered as a string. */


/* Equal to operator '==' returns 'true' if the operands are equal. */
console.log(5 == 6); // false

/* Not equal to operator '!=' returns 'true' if all the operands are not equal. */
console.log(5 != 6); // true


/* Logical AND '&&' returns 'true' if both the operand values are true, 
else evaluates to false. */
console.log(true && false); // false

/* The boolean values are used in 'if...else' statements and 'for' loops as well. */

undefined	//false
null	//false
NaN	//false
''	//false
0	//false
20	//true
-20	//true
'hello'	//true

// 3.4.1 Boolean Methods

// toString() method 
/* returns a boolean value by converting boolean to a string */

var count = false;

// converting to string
var result = count.toString();

console.log(result); //false
console.log(typeof result); //string


//valueOf() method 
/* returns the primitive value of a boolean */

var count = true;

// converting to string
var result = count.valueOf();

console.log(result); //true
console.log(typeof result); //boolean




//3.5.1 null 

/* 'null' is a special value that represents an empty or unknown value. */

var number = null;
// the 'number' variable is empty at the moment and may have a value later.




//3.5.2 undefined

/* If a variable is declared but the value is not assigned, 
then the value of that variable will be 'undefined' */
var name;
console.log(name); // undefined


/* It is also possible to explicitly assign 'undefined' to a variable */
var name = "Felix";
// assigning undefined to the name variable
name = undefined

console.log(name); // returns undefined

/* An 'undefined' or 'null' gets converted to 'false' 
when used with the Boolean() function. */

var result;

result = Boolean(undefined);
console.log(result); // false

result = Boolean(null);
console.log(result); // false






//3.6 Javasciript Symbols

/* Symbols are immutable (cannot be changed) and are unique */

// two symbols with the same description
const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); // false
/* Though value1 and value2 both contain the same description, they are different. */




//3.6.1 Creating Symbol

//Symbol() constructor

/* The Symbol() constructor returns a value of type symbol, 
but is incomplete as a constructor because it does not support 
the syntax "new Symbol()" and it is not intended to be subclassed.  */

//Syntax
Symbol()
Symbol(description)


/* Symbol() function to create a Symbol */

const x = Symbol() // creating symbol
typeof x; // symbol

//new Symbol(...)
//The following syntax with the new operator will throw a TypeError:
let sym = new Symbol()  // TypeErrorÂ



//3.6.2 Access Symbol Description

/* To access the description of a symbol, use '.' operator. */
const x = Symbol('hey');
console.log(x.description); // hey



//3.6.3 Add Symbol as an Object Key

/* You can add symbols as a key in an object using '[]' */
var id = Symbol("id");

var person = {
    name: "Jack",
    // adding symbol as a key
    [id]: 123 // not "id": 123
};

console.log(person); // {name: "Jack", Symbol(id): 123}


//3.6.4 Symbol Methods

for()	//Searches for existing symbols

keyFor()	//Returns a shared symbol key from the global symbol registry.

toSource()	//Returns a string containing the source of the Symbol object

toString()	//Returns a string containing the description of the Symbol

valueOf()	//Returns the primitive value of the Symbol object.


// get symbol by name
var sym = Symbol.for('hello');
var sym1 = Symbol.for('id');

// get name by symbol
console.log( Symbol.keyFor(sym) ); // hello
console.log( Symbol.keyFor(sym1) ); // id




//3.8 Immutable Primitive Values and  Reference type 


//3.8.1     Immutable Primitive Values

//Primitives are immutable: there is no way to change a primive value.

/* It is important not to confuse a primitive itself 
with a variable assigned a primitive value. 

The variable may be reassigned a new value, 
but the existing value can not be changed in the ways that objects, arrays, 
and functions can be altered. */



//3.8.2 Reference types 

/* Javascript has 3 data types that are passed by reference: 
Array, Function, and Object. 

These are all technically Objects */


/* Variables that are assigned a non-primitive value are given 
a 'reference' to that value. 

That 'reference' points to the object’s location in memory. 
The variables don’t actually contain the value. */



/* 
Objects are not compared by value: two distinct objects are not equal
even if they have the same properties and values 
*/


/* two distinct arrays are not equal even if they have 
the same elements in the same order: */

let o = { x: 1 }; // Start with an object
o.x = 2; // Mutate it by changing the value of a property
o.y = 3; // Mutate it again by adding a new property

let a = [1,2,3]; // Arrays are also mutable
a[0] = 0; // Change the value of an array element
a[3] = 4; // Add a new array element

/* Objects are not compared by value: two distinct objects are not equal
even if they have the same properties and values */

/* two distinct arrays are not equal even if they have 
the same elements in the same order: */

let o = {x: 1}, p = {x: 1}; // Two objects with the same properties
o === p // => false: distinct objects are never equal
let a = [], b = []; // Two distinct, empty arrays
a === b // => false: distinct arrays are never equal

//two object values are the same if and only if they refer to the same
//underlying object.
let a = []; // The variable a refers to an empty array.
let b = a; // Now b refers to the same array.
b[0] = 1; // Mutate the array referred to by variable b.
a[0] // => 1: the change is also visible through variable a.
a === b // => true: a and b refer to the same object, so they are equal.


//assigning an object (or array) to a variable is not create a new copy of 
//the object.

var a = ["a","b","c"]; // An array we want to copy
var b = []; // A distinct array we'll copy into
for(let i = 0; i < a.length; i++) { // For each index of a[]
    b[i] = a[i]; // Copy an element of a into b
}
var c = Array.from(b); // In ES6, copy arrays with Array.from()


//if we want to compare two distinct objects or arrays, we
//must compare their properties or elements.
function equalArrays(a, b) {
    if (a === b) return true; // Identical arrays are equal
    if (a.length !== b.length) return false; // Differentsize arrays not equal
    for(let i = 0; i < a.length; i++) { // Loop through all elements
        if (a[i] !== b[i]) return false; // If any differ, arrays not equal
    }
    return true; // Otherwise they are equal
}


//3.9 Type Conversions


//JavaScript type conversions

/*
value      to String     to Number   to Boolean

undefined    "undefined"     NaN     false
null        "null"       0           false
true        "true"       1
false       "false"      0
""(empty string)     0               false
"1.2"(nonempty, numeric)        1.2   true
"one"(nonempty, non-numeric)    NaN   true
0           "0"                          false
-0          "0"                         false
1 (finite, non-zero)"1"                 true
Infinity    "Infinity"                  true
-Infinity "-Infinity"                   true
NaN         "NaN"                       false
{}(any object)                        true
[](empty array) ""        0            true
[9](one numeric element) "9"   9      true
['a'](any other array) use join()method, NaN, true
function(){} (any function) see §3.9.3, NaN, true
*/

10 + " objects" // => "10 objects": Number 10 converts to a string
"7" * "4" // => 28: both strings convert to numbers
let n = 1 - "x"; // n == NaN; string "x" can't convert to a number
n + " objects" // => "NaN objects": NaN converts to string "NaN"





//3.9.1 Conversions and Equality

//“strict equality operator,” ===, does not consider its operands to
//be equal if they are not of the same type,


null == undefined // => true: These two values are treated as equal.
"0" == 0 // => true: String converts to a number before comparing.
0 == false // => true: Boolean converts to number before comparing.
"0" == false // => true: Both operands convert to 0 before comparing!
//If "undefined" is used where a boolean value is expected, 
//for example, it will convert to "false". But this does not mean 
//that undefined == false.


//convertibility of one value to another does not imply
//equality of those two values.





//3.9.2 Explicit Conversions

/* The simplest way to perform an explicit type conversion is to use the
Boolean(), Number(), and String() functions */

Number("3") // => 3
String(false) // => "false": Or use false.toString()
Boolean([]) // => true

//Any value other than null or undefined has a toString() method,
//the result of this method is usually the same as that returnd by String() function

//the Boolean(), Number(), and String() functions 
//can also be invoked with "new" as constructor.

//you’ll get a “wrapper” object that behaves just like a
//primitive boolean, number, or string value.





//Certain JavaScript operators perform implicit type conversions and are
//sometimes used explicitly for the purpose of type conversion.

x + "" // => String(x)
+x // => Number(x)
x-0 // => Number(x)
!!x // => Boolean(x): Note double !




//The toString() method defined by the Number class accepts an
//optional argument that specifies a radix, or base, for the conversion.
let n = 17;
let binary = "0b" + n.toString(2); // binary == "0b10001"
let octal = "0o" + n.toString(8); // octal == "0o21"
let hex = "0x" + n.toString(16); // hex == "0x11"


//The Number class defines three methods for these kinds of 
//number-to-string conversions. and It never uses exponential notation.


//toFixed() Convert a number into a string, 
//rounding after the decimal point.

//and It never uses exponential notation.
let n = 123456.789;
n.toFixed(0);




//toExponential() Converts a number into an exponential notation:
//the argument represents the number of digits in the notation 
//after the decimal point

let n = 123456.789;
n.toExponential(1);


//toPrecision() is Formatting a number into a specified length:
//the aregument represents The number of digits.
let n = 123456.789;
n.toPrecision(2)


//The parseInt() function parses a string and returns an integer.

parseInt("3 brind mice")


//The parseFloat() function parses a string and 
//returns a floating point number.

//all three methods round the trailing digits or pad with zeros as appropriate.





//3.10 Variable Declaration and Assignment

//One of the most fundamental techniques of computer programming is
//the use of names or identifiers to represent values

//Declarations with let and const
let i;
let sum;

//You can also declare multiple variables in a single let statement:
let i, sum;

//It is a good programming practice to assign an initial value to your
//variables when you declare them,
let message = "hello";
let i = 0, j = 0, k = 0;
let x = 2, y = x*x; // Initializers can use previously declared variables


//declaring a constant with "const"
const H0 = 74; // Hubble constant (km/s/Mpc)
const C = 299792.458; // Speed of light in a vacuum (km/s)
const AU = 1.496E8;


//VARIABLE AND CONSTANT SCOPE

//The scope of a variable is the region of your program source code in
//which it is defined.

//Variables and constants declared with let and const are block scoped.
//even if they technically appear outside of the curly braces.



//REPEATED DECLARATIONS

//It is a syntax error to use the same name with more than one let or
//const declaration in the same scope.

const x = 1; // Declare x as a global constant
if (x === 1) {
    let x = 2; // Inside a block x can refer to a different value
    console.log(x); // Prints 2
}
console.log(x); // Prints 1: we're back in the global scope now
let x = 3; // ERROR! Syntax error trying to redeclare x

//DECLARATIONS AND TYPES

//it is perfectly legal (but generally poor programming style) in
//JavaScript to assign a number to a variable and then later assign a
//string to that variable:

let i = 10;
i = "ten";



//Scope

//Global Scope

//The area outside all the functions is consider the global scope 
//and the variables defined inside the global scope can be accessed
//and altered in any other scopes.

var fruit = 'apple'
console.log(fruit);        //apple

function getFruit(){
    console.log(fruit);    //fruit is accessible here
}
getFruit();                //apple

//Local Scope

/*Variables declared inside the functions become Local to the function
 and are considered in the corresponding local scope. */


//global scope
function foo1(){
    //local scope 1
    function foo2(){
        //local scope 2
    }
}

//global scope
function foo3(){
    //local scope 3
}


//Function Scope

//Whenever you declare a variable in a function, 
//the variable is visible only within the function. 

function foo(){
    var fruit ='apple';
    console.log('inside function: ',fruit);
}

foo();                    //inside function: apple
console.log(fruit);       //error: fruit is not defined

//Block Scope

//let and const , These two keywords become to give Block Scope in JavaScript.


//Variables declared inside {} block cannot be accessed from outside the block:
function foo(){
    if(true){
        var fruit1 = 'apple';        //exist in function scope
        const fruit2 = 'banana';     //exist in block scope
        let fruit3 = 'strawberry';   //exist in block scope

    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

foo();
//result:
//apple
//error: fruit2 is not defined
//error: fruit3 is not defined





//3.10.2 Variable Declarations with var


//The syntax of "var" is just like the syntax of "let":
var x;
var data = [], count = data.length;
for(var i = 0; i < count; i++) console.log(data[i]);



//"var" and "let" are different in the way they work:

//Variables declared with "var" do not have block scope.

//If you use "var" outside of a function body, it declares a global variable.
//Globals declared with "var" are implemented as properties of the global object

//if you write var x = 2; outside of a function, 
//it is like you wrote globalThis.x = 2;.
var x =2 ; //undefined
globalThis.x //2
//the properties created with global var declarations cannot be deleted
//with the delete operator

//Global variables and constants declared with "let" and "const" 
//are not properties of the global object.



//Unlike variables declared with "let", it is legal to declare the
//same variable multiple times with "var".
let ak=1; //undefined
let ak =2 ; //Uncaught SyntaxError: Identifier 'ak' has already been declared

var m4 =1 ; //undefined
var m4 =2; //undefined


/*var variables have function scope instead of block scope, it is
actually common to do this kind of redeclaration.
The variable i is frequently used for integer values, and especially as the
index variable of for loops. */



//Hoisting

/* When a variable is declared with "var", the declaration is lifted up 
to the top of the enclosing function.*/

/* The initialization of the variable remains where you wrote it, 
but the definition of the variable moves to the top of the function. */







//3.10.3 Destructuring Assignment

/* "Destructuring assignment" is a special syntax 
that allows us to “unpack” arrays or objects into a bunch of variables,
as sometimes that’s more convenient. */

//Befrore ES6 
// assigning object attributes to variables
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

let name = person.name;
let age = person.age;
let gender = person.gender;
//The order of the name does not matter in object destructuring.

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female

//AFTER ES6
// destructuring assignment
let { name, age, gender } = person;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female

//If you want to assign different variable names for the object key

// using different variable names
// destructuring assignment
let { name: name1, age: age1, gender:gender1 } = person;

console.log(name1); // Sara
console.log(age1); // 25
console.log(gender1); // female



//Array destructuring

var arr = ["John", "Smith"]

// destructuring assignment
var [firstName, surname] = arr;
// sets firstName = arr[0] and surname = arr[1]
console.log(firstName); // John
console.log(surname);  // Smith



//“Destructuring” does not mean “destructive”.
/* it “destructurizes” by copying items into variables. 
But the array itself is not modified. */

// var [firstName, surname] = arr;
var firstName = arr[0];
var surname = arr[1];


