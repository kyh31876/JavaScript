//11.1 Sets and Maps

import { format } from "path/posix";

//when the value being mapped to is something fixed like true, then the
//object is effectively a set of strings.


//11.1.1 The Set Class

//Create a Set object with the Set() constructor:

let s = new Set(); // A new, empty set
let t = new Set([1, s]); // A new set with two members


//The argument to the Set() constructor need not be an array: 
//any iterable object (including other Set objects) is allowed:

let t = new Set(s); // A new set that copies the elements of s.
let unique = new Set("Mississippi"); // 4 elements: "M", "i", "s", and "p"


//The size property of a set is like the length property of an array: 
//it tells you how many values the set contains:

unique.size // => 4


//Sets don’t need to be initialized when you create them. You can add
//and remove elements at any time with add(), delete(), and clear().

//Remember that sets cannot contain duplicates, so adding a value 
//to a set when it already contains that value has no effect:


let s = new Set(); // Start empty
s.size // => 0
s.add(1); // Add a number
s.size // => 1; now the set has one member
s.add(1); // Add the same number again
s.size // => 1; the size does not change
s.add(true); // Add another value; note that it is fine to mix types
s.size // => 2
s.add([1,2,3]); // Add an array value
s.size // => 3; the array was added, not its elements
s.delete(1) // => true: successfully deleted element 1
s.size // => 2: the size is back down to 2
s.delete("test") // => false: "test" was not a member, deletion failed
s.delete(true) // => true: delete succeeded
s.delete([1,2,3]) // => false: the array in the set is different
s.size // => 1: there is still that one array in the set
s.clear(); // Remove everything from the set
s.size // => 0

//The add() method takes a single argument;
//The delete() method also only deletes a single set element at a time.

//like the === operator performs. A set can contain both the number 1 
//and the string "1", because it considers them to be distinct values.


//In practice, the most important thing we do with sets is not to add and
//remove elements from them,but to check to see whether a specified
//value is a member of the set. We do this with the has() method:

let oneDigitPrimes = new Set([2,3,5,7]);
oneDigitPrimes.has(2) // => true: 2 is a one-digit prime number
oneDigitPrimes.has(3) // => true: so is 3
oneDigitPrimes.has(4) // => false: 4 is not a prime
oneDigitPrimes.has("5") // => false: "5" is not even a number

//no matter how many members the set has, the has() method will be very fast.


//The Set class is iterable, which means that you can use a for/of loop
//to enumerate all of the elements of a set:

let sum = 0;
for(let p of oneDigitPrimes) { // Loop through the one-digit primes
sum += p; // and add them up
}
sum // => 17: 2 + 3 + 5 + 7


//Because Set objects are iterable, you can convert them to arrays and
//argument lists with the ... spread operator:
[...oneDigitPrimes] // => [2,3,5,7]: the set converted to an Array
Math.max(...oneDigitPrimes) // => 7: set elements passed as function arguments


//In addition to being iterable, the Set class also implements a forEach()
//method that is similar to the array method of the same name:

let product = 1;
oneDigitPrimes.forEach(n => { product *= n; });
product // => 210: 2 * 3 * 5 * 7

//The forEach() of an array passes array indexes as the second
//argument to the function you specify.




//11.1.2 The Map Class

//A Map object represents a set of values known as keys, where each key 
//has another value associated with (or “mapped to”) it.


//In a sense, a map is like an array, but instead of using a set of sequential
//integers as the keys, maps allow us to use arbitrary values as “indexes.” 



//Create a new map with the Map() constructor:
let m = new Map(); // Create a new, empty map
let n = new Map([ // A new map initialized with string keys mapped to numbers
    ["one", 1],
    ["two", 2]
]);


//you can also use the Map() constructor to copy other maps or to copy 
//the property names and values from an existing object:

let copy = new Map(n); // A new map with the same keys and values as map n
let o = { x: 1, y: 2}; // An object with two properties
let p = new Map(Object.entries(o)); // Same as new map([["x", 1], ["y", 2]])

//Once you have created a Map object, you can query the value associated with
//a given key with get() and can add a new key/value pair with set().


//If you call set() with a key that already exists in the map,you will change 
//the value associated with that key, not add a new key/value mapping.


//use has() to check whether a map includes the specified key; 
//use delete() to remove a key (and its associated value) from the map; 
//use clear() to remove all key/value pairs from the map; 
//and use the 'size' property to find out how many keys a map contains.

let m = new Map(); // Start with an empty map
m.size // => 0: empty maps have no keys
m.set("one", 1); // Map the key "one" to the value 1
m.set("two", 2); // And the key "two" to the value 2.
m.size // => 2: the map now has two keys
m.get("two") // => 2: return the value associated with key "two"
m.get("three") // => undefined: this key is not in the set
m.set("one", true); // Change the value associated with an existing key
m.size // => 2: the size doesn't change
m.has("one") // => true: the map has a key "one"
m.has(true) // => false: the map does not have a key true
m.delete("one") // => true: the key existed and deletion succeeded
m.size // => 1
m.delete("three") // => false: failed to delete a nonexistent key
m.clear(); // Remove all keys and values from the map


// /Like the add() method of Set, the set() method of Map can be chained,
let m = new Map().set("one", 1).set("two", 2).set("three",3);
m.size // => 3
m.get("two") // => 2



//As with Set, any JavaScript value can be used as a key or a value in a Map.

//And as with the Set class, Map compares keys by identity, not by equality, so if you use an object or array as a key, it will be considered different from every other object and array, even those with exactly the same properties or elements://


let m = new Map(); // Start with an empty map.
m.set({}, 1); // Map one empty object to the number 1.
m.set({}, 2); // Map a different empty object to the number 2.
m.size // => 2: there are two keys in this map
m.get({}) // => undefined: but this empty object is not a key
m.set(m, undefined); // Map the map itself to the value undefined.
m.has(m) // => true: m is a key in itself
m.get(m) // => undefined: same value we'd get if m wasn't a key


//If you use the spread operator with a Map object, you’ll get an array of arrays like the ones that we passed to the Map() constructor.//

let m = new Map([["x", 1], ["y", 2]]);
[...m] // => [["x", 1], ["y", 2]]
for(let [key, value] of m) { // On the first iteration, key will be "x" and value will be 1
// On the second iteration, key will be "y" and value will be 2
}



//If you want to iterate just the keys or just the associated values of a map, use the keys() and values() methods: these return iterable objects that iterate keys and values, in insertion order.//

[...m.keys()] // => ["x", "y"]: just the keys
[...m.values()] // => [1, 2]: just the values
[...m.entries()] // => [["x", 1], ["y", 2]]: same as [...m]


//Map objects can also be iterated using the forEach() method that was first implemented by the Array class.//


m.forEach((value, key) => { // note value, key NOT key, value
    // On the first invocation, value will be 1 and key will be "x" 
    // On the second invocation, value will be 2 and key will be "y"
});


//11.1.3 WeakMap and WeakSet

//Garbage collection is the process by which the JavaScript interpreter 
//reclaims the memory of objects that are no longer “reachable” and
//cannot be used by the program.//


//WeakMap keys must be objects or arrays; primitive values are
//not subject to garbage collection and cannot be used as keys.

//   WeakMap implements only the get(), set(), has(), and delete() methods.

//WeakSet implements a set of objects that does not prevent those
//objects from being garbage collected.

//WeakSet does not allow primitive values as members.

//WeakSet implements only the add(), has(), and delete()
//methods and is not iterable.

//WeakSet does not have a size property.






//11.2 Typed Arrays and Binary Data


//11.2.1 Typed Array Types


//each with a different element type and constructor:

Int8Array() //signed bytes
Uint8Array() //unsigned bytes
Uint8ClampedArray( ) //unsigned bytes without rollover
Int16Array() //signed 16-bit short integers
Uint16Array() //unsigned 16-bit short integers
Int32Array() //signed 32-bit integers
Uint32Array() //unsigned 32-bit integers
BigInt64Array() //signed 64-bit BigInt values (ES2020)
BigUint64Array() //unsigned 64-bit BigInt values (ES2020)
Float32Array() //32-bit floating-point value
Float64Array() //64-bit floating-point value: a regular JavaScript number


//11.2.2 Creating Typed Arrays

/*The simplest way to create a typed array is to call the appropriate
constructor with one numeric argument that specifies the number of
elements you want in the array:
*/

let bytes = new Uint8Array(1024); // 1024 bytes
let matrix = new Float64Array(9); // A 3x3 matrix
let point = new Int16Array(3); // A point in 3D space
let rgba = new Uint8ClampedArray(4); // A 4-byte RGBA pixel value
let sudoku = new Int8Array(81); // A 9x9 sudoku board

/*Each of the typed array constructors has static from() and of() 
factory methods that work like Array.from() and Array.of(): */ 
let white = Uint8ClampedArray.of(255, 255, 255, 0); // RGBA opaque white


/*Note that both the constructor and the from() factory method allow you to
copy existing typed arrays, while possibly changing the type: */
let ints = Uint32Array.from(white); // The same 4 numbers, but as ints


// Floats truncated to ints, longer ints truncated to 8 bits
Uint8Array.of(1.23, 2.99, 45000) // => new Uint8Array([1, 2, 200])


/*An ArrayBuffer is an opaque reference to a chunk of memory.
You can create one with the constructor; just pass in the
number of bytes of memory you’d like to allocate: */

let buffer = new ArrayBuffer(1024*1024);
buffer.byteLength // => 1024*1024; one megabyte of memory


let asbytes = new Uint8Array(buffer); // Viewed as bytes
let asints = new Int32Array(buffer); // Viewed as 32-bit signed ints
let lastK = new Uint8Array(buffer, 1023*1024); // Last kilobyte as bytes
let ints2 = new Int32Array(buffer, 1024, 256); // 2nd kilobyte as 256 integers




//11.2.3 Using Typed Arrays


// Return the largest prime smaller than n, using the sieve of Eratosthenes
function sieve(n) {
    let a = new Uint8Array(n+1); // a[x] will be 1 if x is composite
    let max = Math.floor(Math.sqrt(n)); // Don't do factors higher than this
    let p = 2; // 2 is the first prime
    while(p <= max) { // For primes less than max
        for(let i = 2*p; i <= n; i += p) // Mark multiples of p as composite
            a[i] = 1;
        while(a[++p]) /* empty */; // The next unmarked index is prime
    }
    while(a[n]) n--; // Loop backward to find the last prime
    return n; // And return it
}



/*Typed arrays are not true arrays, but they re-implement most array
methods, so you can use them pretty much just like you’d use regular
arrays:*/

let ints = new Int16Array(10); // 10 short integers
ints.fill(3).map(x=>x*x).join("") // => "9999999999"




//11.2.4 Typed Array Methods and Properties

/*The set() method sets multiple elements of a typed array at once by copying 
the elements of a regular or typed array into a typed array:*/

let bytes = new Uint8Array(1024); // A 1K buffer
let pattern = new Uint8Array([0,1,2,3]); // An array of 4 bytes

bytes.set(pattern); // Copy them to the start of another byte array
bytes.set(pattern, 4); // Copy them again at a different offset
bytes.set([0,1,2,3], 8); // Or just copy values direct from a regular array
bytes.slice(0, 12) // => new

Uint8Array([0,1,2,3,0,1,2,3,0,1,2,3])


/*Typed arrays also have a subarray method that returns a portion of
the array on which it is called:*/


let ints = new Int16Array([0,1,2,3,4,5,6,7,8,9]); // 10 short integers
let last3 = ints.subarray(ints.length-3, ints.length); //= Last 3 of them
last3[0] // => 7: this is the same as ints[7]

//subarray() does not copy any memory; it just returns a new view
//of the same underlying values:

ints[9] = -1; // Change a value in the original array and...
last3[2] // => -1: it also changes in the subarray


//Every typed array has three properties that relate to the underlying buffer:

last3.buffer // The ArrayBuffer object for a typed array
last3.buffer === ints.buffer // => true: both are views of the same buffer
last3.byteOffset // => 14: this view starts at byte 14 of the buffer
last3.byteLength // => 6: this view is 6 bytes (3 16-bit ints) long
last3.buffer.byteLength // => 20: but the underlying buffer has 20 bytes

//The buffer property is the ArrayBuffer of the array.

//byteOffset is the starting position of the array’s data 
//within the underlying buffer.

a.length * a.BYTES_PER_ELEMENT === a.byteLength // => true


let bytes = new Uint8Array(8);
bytes[0] = 1; // Set the first byte to 1
bytes.buffer[0] // => undefined: buffer doesn't have index 0
bytes.buffer[1] = 255; // Try incorrectly to set a byte in the buffer
bytes.buffer[1] // => 255: this just sets a regular JS property
bytes[1] // => 0: the line above did not set the byte


let bytes = new Uint8Array(1024); // 1024 bytes
let ints = new Uint32Array(bytes.buffer); // or 256 integers
let floats = new Float64Array(bytes.buffer); // or 128 doubles



//11.3 Pattern Matching with Regular Expressions


//A regular expression is an object that describes a textual pattern.


//11.3.1 Defining Regular Expressions

/*RegExp objects may be created with the RegExp() constructor, of
course, but they are more often created using a special literal syntax.*/

//regular expression literals are specified as characters within a pair of
//slash (/) characters.

let pattern = /s$/;
//matching any string that ends with the letter “s.”


//This regular expression could have equivalently been defined with the RegExp() constructor,
let pattern = new RegExp("s$")

//regular expression /java/ matches any string that contains the substring “java”.

/*work. Flags are specified following the second slash character 
in RegExp literals, or as a second string argument to the RegExp() constructor.*/
let pattern = /s$/i;


//LITERAL CHARACTERS

//Table 11-1. Regular-expression literal characters

//Character   Matches
\0 //The NUL character (\u0000)
\t //Tab (\u0009)
\n //Newline (\u000A)
\v //Vertical tab (\u000B)
\f //Form feed (\u000C)
\r //Carriage return (\u000D)
\xnn //The Latin character specified by the hexadecimal number nn; for example,
//\x0A is the same as \n.
\uxxxx //The Unicode character specified by the hexadecimal number xxxx; for
//example, \u0009 is the same as \t.
\u{n} //The Unicode character specified by the codepoint n, where n is one to six
    //hexadecimal digits between 0 and 10FFFF. Note that this syntax is only
    //supported in regular expressions that use the u flag.
\cX //The control character ^X; for example, \cJ is equivalent to the newline
//character \n.

//the following regular expression matches any string that
//includes a backslash: /\\/.


//CHARACTER CLASSES

//A negated character class is specified by placing a caret (^) 
//as the first character inside the left bracket.

//To match any one lowercase character from the Latin alphabet, use /[a-z]/,
//and to match any letter or digit from the Latin alphabet, use /[a-zA-Z0-9]/.


//Table 11-2. Regular expression character classes

//Character               Matches
[...] //Any one character between the brackets.
[^...] //Any one character not between the brackets.
. /*Any character except newline or another Unicode line terminator. Or, if the
RegExp uses the s flag, then a period matches any character, including line
terminators.*/
\w // Equivalent to [a-zA-Z0-9_].
\W /*Any character that is not an ASCII word character. Equivalent to [^a-zA-Z0
-9_].*/
\s //Any Unicode whitespace character.
\S //Any character that is not Unicode whitespace.
\d //Equivalent to [0-9].
\D //Any character other than an ASCII digit. Equivalent to [^0-9].
[\b] //A literal backspace (special case).


//REPETITION

//Table 11-3. Regular expression repetition characters

//Character             Meaning
{n,m} //Match the previous item at least n times but no more than m times.
{n,} //Match the previous item n or more times.
{n} //Match exactly n occurrences of the previous item.
? //Match zero or one occurrences of the previous item. That is, the previous
//item is optional. Equivalent to {0,1}.
+ //Match one or more occurrences of the previous item. Equivalent to {1,}.
* //Match zero or more occurrences of the previous item. Equivalent to {0,}.




let r = /\d{2,4}/; // Match between two and four digits
r = /\w{3}\d?/; // Match exactly three word characters and an optional digit
r = /\s+java\s+/; // Match "java" with one or more spaces before and after
r = /[^(]*/; // Match zero or more characters that are not open parens


//NON-GREEDY REPETITION

/* The repetition characters listed in Table 11-3 match as many times as
possible while still allowing any following parts of the regular
expression to match. We say that this repetition is “greedy.” */

//Simply follow the repetition character or characters with a question
//mark: ??, +?, *?, or even {1,5}?.

//the regular expression /a+/ matches one or more occurrences of the letter a.
//When applied to the string “aaa”, it matches all three letters. 

//But /a+?/ matches one or more occurrences of the letter a, matching as
//few characters as necessary.


//the pattern /a+b/, which matches one or more a’s, followed by the letter b. 
//When applied to the string “aaab”, it matches the entire string.



///a+?b/. This should match the letter b preceded by the fewest number of a’s
//possible.

//this pattern matches the entire string, 
//just like the greedy version of the pattern.


//ALTERNATION, GROUPING, AND REFERENCES

//Table 11-4. Regular expression alternation, grouping, and reference characters

//Character         Meaning
| //Alternation: match either the subexpression to the left or  
//the subexpression to the right.

(...) /*Grouping: group items into a single unit that can be used 
with *, +, ?, |, and so on. Also remember the characters that match 
this group for use with later references. */

(?:...) /*Grouping only: group items into a single unit, but do not remember the characters
that match this group.*/

\n  /*Match the same characters that were matched when group number n was first
matched. Groups are subexpressions within (possibly nested) parentheses. Group
numbers are assigned by counting left parentheses from left to right. Groups
formed with (?: are not numbered.*/


/ab|cd|ef/ //matches the string “ab” or the string “cd” or the string “ef”.
//that alternatives are considered left to right until a match is found
//If the left alternative matches, the right alternative is ignored

/\d{3}|[a-z]{4}/ //matches either three digits or four lowercase letters.

/java(script)?/ //matches “java” followed by the optional “script”.

/(ab|cd)+|ef/ //matches either the string “ef” or one or 
//more repetitions of either of the strings “ab” or “cd”.


//A related use of parenthesized subexpressions is to allow you to refer back
//to a subexpression later in the same regular expression.

//subexpressions is the position of the left parenthesis that is counted.


/([Jj]ava([Ss]cript)?)\sis\s(fun\w*)/
 //the nested subexpression ([Ss]cript) is referred to as \2:
 
/*A reference to a previous subexpression of a regular expression does
not refer to the pattern for that subexpression but rather to the text that
matched the pattern.*/

//To require the quotes to match, use a reference:
/(['"])[^'"]*\1/

//The \1 matches whatever the first parenthesized subexpression matched.


//Instead of simply grouping the items within ( and ), 
//begin the group with (?: and end it with ). Consider the following pattern:
/([Jj]ava(?:[Ss]cript)?)\sis\s(fun\w*)/


//the subexpression (?:[Ss]cript) is used simply for grouping, 
//so the ? repetition character can be applied to the group.
//in this regular expression, \2 refers to the text matched by (fun\w*).





//SPECIFYING MATCH POSITION


//Table 11-5. Regular expression anchor characters

//Character                 Meaning

^//Match the beginning of the string or, with the m flag,
//the beginning of a line.

$ //Match the end of the string and, with the m flag, the end of a line.

\b /*Match a word boundary. That is, match the position between a \w character 
and  a \W character or between a \w character and the beginning or 
end of a string. (Note, however, that [\b] matches backspace.) */

\B //Match a position that is not a word boundary.

(?=p) /*A positive lookahead assertion. Require that the following 
characters match the pattern p, but do not include those characters in the match.*/

(?!p) /*A negative lookahead assertion. Require that the following characters 
do not match the pattern p. */


/^JavaScript$/. //matching  the word "JavaScript" 
/\sJava\s/   //searching for "Java" as a word