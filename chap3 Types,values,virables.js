//Dynamic typing
 /* JavaScript is a loosely typed and dynamic language. 
 Variables in JavaScript are not directly associated with 
 any particular value type, and any variable can be assigned (and re-assigned)
  values of all types: */

let foo = 42;    // foo is now a number
foo     = 'bar'; // foo is now a string
foo     = true;  // foo is now a boolean






//Structural Types:
 typeof instance === "object". 
/*Object : Special non-data but Structural type for any constructed object 
instance also used as data structures: new Object, new Array, new Map, new Set,
new WeakMap, new WeakSet, new Date and almost everything made with new keyword; */

//Function : a non-data structure, though it also answers for typeof operator:
 typeof instance === "function". 
 /*This is merely a special shorthand for Functions, though every Function 
 constructor is derived from Object constructor. */


//Primitive values
//All types except objects define immutable values
// We refer to values of these types as "primitive values".

//Undefined type
//A variable that has not been assigned a value has the value undefined.

var x; //create a variable but assign it no value

console.log("x's value is", x) //logs "x's value is undefined"

 
//Null types
//The Null type has exactly one value: null


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

// A string representing 2 lines written on one line:
'two\nlines'

let msg = "Hello, " + "world"; // Produces the string "Hello, world"
let greeting = "Welcome to my blog," + " " + name;


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
" test ".trim( // => "test": remove spaces at start and end
" test ".trimStart() // => "test ": remove spaces on left. Also trimLeft
" test ".trimEnd() // => " test": remove spaces at right. Also trimRight
// Miscellaneous string methods
s.concat("!") // => "Hello, world!": just use + operator instead
"<>".repeat(5) // => "<><><><><>": concatenate n copies. ES6

// a string using square brackets instead of the charAt() method:
let s = "hello, world";
s[0] // => "h"
s[s.length-1] // => "d"

//template Literals 
let name = "Bill";
let greeting = `Hello ${ name }.`; // greeting == "Hello Bill."

//TAGGED TEMPLATE LITERALS

`\n`.length // => 1: the string has a single newline character
String.raw`\n`.length // => 2: a backslash character and the letter n


//pattern matching 

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


//Boolean Values    

if (a === 4) {
    b = b + 1;
    } else {
    a = a + 1;
    }


undefined
null
0 -
0
NaN
""
//The following values convert to, and therefore work like, false:

if (o !== null) 


if ((x === 0 && y === 0) || !(z === 0)) {
    // x and y are both zero or z is non-zero
    }
    


let strname = "string name"; // A string to use as a property name
let symname = Symbol("propname"); // A Symbol to use as a property name
typeof strname // => "string": strname is a string
typeof symname // => "symbol": symname is a symbol
let o = {}; // Create a new object
o[strname] = 1; // Define a property with a string name
o[symname] = 2; // Define a property with a\Symbol name
o[strname] // => 1: access the stringnamed property
o[symname] // => 2: access the symbolnamed property


//Immutable Primitive Values

let s = "hello"; // Start with some lowercase text
s.toUpperCase(); // Returns "HELLO", but doesn't alter s
console.log(s) //undefined, null, booleans, numbers, and strings aren`t changed 


//Mutable Object References

let o = { x: 1 }; // Start with an object
o.x = 2; // Mutate it by changing the value of a property
o.y = 3; // Mutate it again by adding a new property
let a = [1,2,3]; // Arrays are also mutable
a[0] = 0; // Change the value of an array element
a[3] = 4; // Add a new array element


let o = {x: 1}, p = {x: 1}; // Two objects with the same properties
o === p // => false: distinct objects are never equal
let a = [], b = []; // Two distinct, empty arrays
a === b // => false: distinct arrays are never equal


let a = []; // The variable a refers to an empty array.
let b = a; // Now b refers to the same array.
b[0] = 1; // Mutate the array referred to by variable b.
a[0] // => 1: the change is also visible through variable a.
a === b // => true: a and b refer to the same object, so they are equal.



let a = ["a","b","c"]; // An array we want to copy
let b = []; // A distinct array we'll copy into
for(let i = 0; i < a.length; i++) { // For each index of a[]
    b[i] = a[i]; // Copy an element of a into b
}
let c = Array.from(b); // In ES6, copy arrays with Array.from()

//This code defines a function to compare two arrays:

function equalArrays(a, b) {
    if (a === b) return true; // Identical arrays are equal
    if (a.length !== b.length) return false; // Differentsize arrays not equal
    for(let i = 0; i < a.length; i++) { // Loop through all elements
    if (a[i] !== b[i]) return false; // If any differ, arrays not equal
    }
    return true; // Otherwise they are equal
    }


//Type Conversions

10+ "Hello"

let n = 1 - "x"; // n == NaN; string "x" can't convert to a number

//Conversions and Equality

null == undefined // => true: These two values are treated as equal.
"0" == 0 // => true: String converts to a number before comparing.
0 == false // => true: Boolean converts to number before comparing.
"0" == false // => true: Both operands convert to 0 before comparing!

//Explicit Conversions
Number("3") // => 3
String(false) // => "false": Or use false.toString()
Boolean([]) // => true

x+""// converts the other one to a string.

!!x //! operator converts its operand to a boolean and negates

let n = 17;
let binary = "0b" + n.toString(2); // binary == "0b10001"
let octal = "0o" + n.toString(8); // octal == "0o21"
let hex = "0x" + n.toString(16); // hex == "0x11"


let n = 123456.789;
n.toFixed(0) // => "123457" converts a number to a string with a specified number of digits
n.toFixed(2) // => "123456.79"
n.toFixed(5) // => "123456.78900"
n.toExponential(1) // => "1.2e+5" converts a number to a string using exponential notation
n.toExponential(3) // => "1.235e+5"
n.toPrecision(4) // => "1.235e+5" converts a number to a string with the number of significant digits
n.toPrecision(7) // => "123456.8"
n.toPrecision(10) // => "123456.7890"

//TOSTRING() AND VALUEOF() METHODS

({x: 1, y: 2}).toString() // => default toString() method does not return a very interesting value

[1,2,3].toString() // => "1,2,3"
(function(x) { f(x); }).toString() // => "function(x) {f(x); }"
/\d+/g.toString() // => "/\\d+/g"
let d = new Date(2020,0,1);
d.toString() // => "Wed Jan 01 2020 00:00:00 GMT-0800(Pacific Standard Time)"

let x=1;
x.valueOf()


//Variable Declaration and Assignment

//“variable” implies that new values can be assigned

//Declarations with let and const
let i, sum; //You can also declare multiple variables in a single let statement


let message = "hello";
let i = 0, j = 0, k = 0;
let x = 2, y = x*x; // Initializers can use previously declared variables


//constants cannot have their values changed,
const H0 = 74; // Hubble constant (km/s/Mpc)
const C = 299792.458; // Speed of light in a vacuum (km/s)
const AU = 1.496E8;


for(let i = 0, len = data.length; i < len; i++)console.log(data[i]);
for(let datum of data) console.log(datum);
for(let property in object) console.log(property);

for(const datum of data) console.log(datum);
for(const property in object) console.log(property); //const declaration
//is just saying that the value is constant for the duration of one loop iteration:


//REPEATED DECLARATIONS
const x = 1; // Declare x as a global constant
if (x === 1) {
let x = 2; // Inside a block x can refer to a different value
console.log(x); // Prints 2
}
console.log(x); // Prints 1: we're back in the global scope now
let x = 3; // ERROR! Syntax error trying to redeclare x


//Variable Declarations with var
var x;
var data = [], count = data.length;
for(var i = 0; i < count; i++) console.log(data[i]);




//Destructuring Assignment

//the value on the righthand side is an array or object (a “structured” value)
//lefthand side specifies one or more variable names using a syntax that mimics array and
//object literal syntax.
let [x,y] = [1,2]; // Same as let x=1, y=2
[x,y] = [x+1,y+1]; // Same as x = x + 1, y = y + 1
[x,y] = [y,x]; // Swap the value of the two variables
[x,y] // => [3,2]: the incremented and swapped values


// Convert [x,y] coordinates to [r,theta] polar coordinates
function toPolar(x, y) {
    return [Math.sqrt(x*x+y*y), Math.atan2(y,x)];
    }
// Convert polar to Cartesian coordinates
function toCartesian(r, theta) {
return [r*Math.cos(theta), r*Math.sin(theta)];
}
let [r,theta] = toPolar(1.0, 1.0); // r == Math.sqrt(2);
theta == Math.PI/4
let [x,y] = toCartesian(r,theta); // [x, y] == [1.0, 1,0]

//a code that loops over the name/value pairs of all properties of an object
//uses destructuring assignment to convert those pairs from two-element arrays into individual variables:

let o = { x: 1, y: 2 }; // The object we'll loop over
for(const [name, value] of Object.entries(o)) {
console.log(name, value); // Prints "x 1" and "y 2"
}


let [x,y] = [1]; // x == 1; y == undefined
[x,y] = [1,2,3]; // x == 1; y == 2
[,x,,y] = [1,2,3,4]; // x == 2; y == 4

let [a, [b, c]] = [1, [2,2.5], 3]; // a == 1; b == 2; c ==2.5

let [first, ...rest] = "Hello"; // first == "H"; rest ==["e","l","l","o"]

let transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0}; // A RGBA color
let {r, g, b} = transparent; // r == 0.0; g == 0.0; b == 0.0

// Same as const sin=Math.sin, cos=Math.cos, tan=Math.tan
const {sin, cos, tan} = Math; //If the lefthand side of this assignment had included a variable whose name was not a property of
//Math, that variable would simply be assigned undefined.



//you may be better off just writing out your assignments 
//explicitly with traditional code like let x1 = points.p1[0];.
let points = { p1: [1,2], p2: [3,4] }; // An object with 2 array props
let { p1: [x1, y1], p2: [x2, y2] } = points; //destructured into 4 vars
(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4) // => true


// Start with a data structure and a complex destructuring
let points = [{x: 1, y: 2}, {x: 3, y: 4}];
let [{x: x1, y: y1}, {x: x2, y: y2}] = points;
// Check your destructuring syntax by flipping the assignment around
let points2 = [{x: x1, y: y1}, {x: x2, y: y2}]; // points2 == points

