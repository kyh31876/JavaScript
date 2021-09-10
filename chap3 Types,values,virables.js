/*Dynamic typing in JavaScript are not directly associated with 
any particular value type, and any variable can be assigned (and re-assigned)
values of all types:  */ 

let foo=42;    // foo is now a number
foo = 'bar'; // foo is now a string
foo = true;  // foo is now a boolean



//Primitive

/* a primitive (primitive value, primitive data type) is data  
that is not an object and has no methods.*/


//Structural Types:

typeof instance === "object" 
/*Object : Special non-data but Structural type for any constructed object 
instance also used as data structures: new Object, new Array, new Map, new Set,
new WeakMap, new WeakSet, new Date and almost everything made with new keyword; */

//Function : a non-data structure, though it also answers for typeof operator:i
typeof instance === 'function'
/*This is merely a special shorthand for Functions, 
though every Function  constructor is derived from Object constructor. */





//Primitive values

/*All types except objects define immutable values
We refer to values of these types as "primitive values". */

//Undefined type

//A variable that has not been assigned a value has the value undefined.
var x; //create a variable but assign it no value

console.log("x's value is", x) //logs "x's value is undefined"

//Null types
//The Null type has exactly one value: null





//3.2 Numbers


//3.2.1 Integer Literals
//When a number appears directly in a JavaScript program, it’s called a
//"numeric literal"
0
3 
10000000



//3.2.2 Floating-Point Literals
//Floating-point literals can have a decimal point;

//[digits][.digits][(E|e)[(+|-)]digits]

// For example:
3.14
2345.6789
.333333333333333333
6.02e23 // 6.02 × 10²³
1.4738223E-32 // 1.4738223 × 10⁻³²

//3.2.3 Arithmetic in JavaScript

//JavaScript supports more complex mathematical operations through 
//a set of functions and constants defined as properties of the Math object:
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


/*JavaScript predefines global constants Infinity and NaN to hold the
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
//The JavaScript type for representing text is the string.

//In ES6, strings are iterable, and if you use the for/of loop or ... operator 
//with a string, it will iterate the actual characters of the string, 
//not the 16-bit values.


//3.3.1 String Literals
//To include a string in a JavaScript program, enclose string with in ' or ".

"" // The empty string: it has zero characters
'testing'
"3.14"
'name="myform"'
"Wouldn't you prefer O'Reilly's book?"
"τ is the ratio of a circle's circumference to its radius"
`"She said 'hi'", he said.`
//allow JavaScript expressions to be embedded within (or interpolated into) the
//string literal.

//you can break a string literal across multiple lines by
//ending each line but the last with a backslash (\).

// A string representing 2 lines written on one line:
'two\nlines'
// A one-line string written on 3 lines:
"one\
long\
line"

// A two-line string written on two lines:
`the newline character at the end of this line
is included literally in this string`

//you must use the backslash character (\) to “escape” any
//apostrophes that appear in single-quoted strings

//3.3.2 Escape Sequences in String Literals

//  '\' is conbined with the character that follow it, it represent that is not 
//otherwise representable within the string 

//Table 3-1. JavaScript escape sequences

/*Sequence             Character represented
\0                      //The NUL character (\u0000)
\b                      //Backspace (\u0008)
\t                      //Horizontal tab (\u0009)
\n                      //Newline (\u000A)
\v                      //Vertical tab (\u000B)
\f                      //Form feed (\u000C)
\r                      //Carriage return (\u000D)
\" 
                        //Double quote (\u0022)
\'  
                        //Apostrophe or single quote (\u0027)
\\                      //Backslash (\u005C)
\xnn //The Unicode character specified by the two hexadecimal digits nn
\unnnn //The Unicode character specified by the four hexadecimal digits nnnn
\u{n
}
*/
/*The Unicode character specified by the codepoint n, where n is one to six
hexadecimal digits between 0 and 10FFFF (ES6) */



//primitive types: number, strings ,Booleans 
let zero = 0; // Regular zero

let negz = -0; // Negative zero
zero === negz // => true: zero and negative zero are equal
1/zero === 1/negz // => false: Infinity and -Infinity are not equal

let x = .3 - .2; // thirty cents minus 20 cents
let y = .2 - .1; // twenty cents minus 10 cents
x === y // => false: the two values are not the same!
x === .1 // => false: .3-.2 is not equal to .1
y === .1 // => true: .2-.1 is equal to .1



//3.3.3 Working with Strings

//If you use the + operator with numbers, it adds them. But if
//you use this operator on strings, it join thme by appending the second to the 
//first

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
" test ".trim() // => "test": remove spaces at start and end
" test ".trimStart() // => "test ": remove spaces on left. Also trimLeft
" test ".trimEnd() // => " test": remove spaces at right. Also trimRight
// Miscellaneous string methods
s.concat("!") // => "Hello, world!": just use + operator instead
"<>".repeat(5) // => "<><><><><>": concatenate n copies. ES6



//Remember that strings are immutable in JavaScript. Methods like
//replace() and toUpperCase() return new strings:


// a string using square brackets instead of the charAt() method:
let s = `hello world`;
s[0] // => "h"
s[s.length-1] // => "d"




//3.3.4 Template Literals

//string literals can be delimited with backticks:
let s =`hello world`;

//these template literals can include arbitrary JavaScript expressions.


//converting the values of those expressions to strings and combining 
//those computed strings with the literal characters within the backticks:

let name = "Bill";
let greeting = `Hello ${ name }.`; // greeting == "Hello Bill."

//Everything between the ${ and the matching } is interpreted as a
//JavaScript expression.

//The expression inside the braces is evaluated and then converted 
//to a string and inserted into the template, replacing the dollar sign,
// the curly braces, and everything in between them.




//The following template literal includes four JavaScript expressions, 
//a Unicode escape sequence, and at least four newlines

let errorMessage = `\
\u2718 Test failure at ${filename}:${linenumber}:
${exception.message}
Stack trace:
${exception.stack}
`;

//A template literal may include any number of expressions.

//it can use any of the escape characters that normal string can,
//it can span any number of lines, with no special escaping required.


//TAGGED TEMPLATE LITERALS
//if a function name (or “tag”) comes right before the opening backtick,
//then the text and the values of the expressions within the template
//literal are passed to the function.

`\n`.length // => 1: the string has a single newline character
String.raw`\n`.length // => 2: a backslash character and the letter n


//Note that even though the tag portion of a tagged template literal is a
//function, there are no parentheses used in its invocation.



//3.3.5 Pattern Matching
//JavaScript defines a datatype known as a regular expression (or
//RegExp) for describing and matching patterns in strings of text.


/HTML/ // Match the letters H T M L at the start of a string
/[1-9][0-9]*/; // Match a nonzero digit, followed by any # of digits`
/\bjavascript\b/i; // Match "javascript" as a word, caseinsensitive

let text = "testing: 1, 2, 3"; // Sample text

let pattern = /\d+/g; // Matches all instances of one or more digits
pattern.test(text) // => true: a match exists
text.search(pattern) // => 9: position of first match
text.match(pattern) // => ["1", "2", "3"]: array of all matches
text.replace(pattern, "#") // => "testing: #, #, #"
text.split(/\D+/) // => ["","1","2","3"]: split on nondigits


//3.4 Boolean Values
//a Boolean is a logical data type that can have only the values true or false.


//Boolean values are generally the result of comparisons you make in
//your JavaScript programs.

a === 4
//if the value of a is equal to 4, result is the value "true"
//whether, result is "false".



//the if/else statement in JavaScript performs one action if 
//a boolean value is true and another action if the value is false.
//they are sometimes callued "falsy value".


if (a === 4) {
    b = b + 1;
    } else {
    a = a + 1;
    }

//The following values convert to, and therefore work like, false:
undefined
null
0 -
0
NaN
""

//All other values, including all objects (and arrays) convert to, and work
//like, true. false,

if (o !== null) 
//!== compares o to null and evaluates to either true or false.




//you can omit the comparison and instead rely on the fact 
//that null is falsy and objects are truthy:

//it will execute the body of the if only if o is not false or any falsy value
if (o)...

if ((x === 0 && y === 0) || !(z === 0)) {
    // x and y are both zero or z is non-zero
    }


//3.5 null and undefined

//null 

//null expresses a lack of identification, 
//indicating that a variable points to no object.

//"typeof" operator on "null" returns the string “object”,
/* however, null is typically regarded as the sole member of its
own type, and it can be used to indicate “no value” for numbers and
strings as well as objects. */



//undefined
//undefined is a primitive value automatically assigned 
//to variables that have just been declared, 
//or to formal arguments for which there are no actual arguments.

/* 초기화되지 않은 변수의 값과 존재하지 않는 객체 속성 또는 
배열 요소의 값을 쿼리할 때 얻을 수 있는 값입니다. */


/* The undefined value is also the return value of functions that
do not explicitly return a value and the value of function parameters for
which no argument is passed. */

//undefined is a non-configurable, non-writable property, 


//undefined to represent a system-level, unexpected, or  
//error-like absence of value
//null to represent a program-level, normal, or expected absence of value



//3.6 Symbols
]
//Symbol is a built-in object whose constructor returns a symbol 'primitive'

/* To understand Symbols, you need to know that JavaScript’s
fundamental Object type is an unordered collection of properties,
where each property has a name and a value. 
Property names are typically (and until ES6, were exclusively) strings.
*/

//Symbol() constructor

/* The Symbol() constructor returns a value of type symbol, 
but is incomplete as a constructor because it does not support 
the syntax "new Symbol()" and it is not intended to be subclassed.  */

//Syntax
Symbol()
Symbol(description)

//description Optional
/* A string. A description of the symbol which can be used for debugging 
but not to access the symbol itself. */

//Creating symbols

/* To create a new primitive symbol, you write Symbol() 
with an optional string as its description: */
let sym1 = Symbol()
let sym2 = Symbol('foo')
let sym3 = Symbol('foo')


/* Note that Symbol("foo") does not coerce the string "foo" into a symbol. 
It creates a new symbol each time: */
Symbol('foo') === Symbol('foo')  // false

//new Symbol(...)
//The following syntax with the new operator will throw a TypeError:
let sym = new Symbol()  // TypeErrorÂ





//3.8 Immutable Primitive Values and Mutable Object References

//Immutable Primitive Values

//Primitives are immutable: there is no way to change a primive value.

let s = "hello"; // Start with some lowercase text
s.toUpperCase(); // Returns "HELLO", but doesn't alter s
console.log(s) //undefined, null, booleans, numbers, and strings aren`t changed 

/* If two distinct string values are compared, JavaScript treats
them as equal if, and only if, they have the same length and if 
the character at each index is the same. */


//Mutable Object References

/* Objects are not compared by value: two distinct objects are not equal
even if they have the same properties and values */


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
let a = ["a","b","c"]; // An array we want to copy
let b = []; // A distinct array we'll copy into
for(let i = 0; i < a.length; i++) { // For each index of a[]
    b[i] = a[i]; // Copy an element of a into b
}
let c = Array.from(b); // In ES6, copy arrays with Array.from()


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


//Table 3-2. JavaScript type conversions
//value      to String     to Number   to Boolean
/*undefined    "undefined"     NaN     false
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


