//7.1 Creating Arrays

//An array is an object that can store multiple elements. For example,
const myArray = ['hello', 'world', 'welcome'];




//7.1.1 Array Literals

//The easiest way to create an array is by using an array literal []. 

var empty = []; // An array with no elements
var primes = [2, 3, 5, 7, 11]; // An array with 5 numeric elements
var misc = [ 1.1, true, "a", ]; // 3 elements of various types + trailing comma

//Array literals can contain object literals or other array literals:
var b = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]];

/* Array elements for which values are omitted do not exist 
but appear to be undefined if you query them: */
let count = [1,,3]; //[ 1, <1 empty item>, 3 ]
let undefs = [,,]; // An array with no elements but a length of 2



//7.1.2 The Spread Operator

//you can use the “spread operator,” ..., to include
//the elements of one array within an array literal:

var a = [1, 2, 3];
var b = [0, ...a, 4]; // c == [0, 1, 2, 3, 4]


let original = [1,2,3];
let copy = [...original];
copy[0] = 0; // Modifying the copy does not change the original
original[0] // => 1


//7.1.3 The Array() Constructor(Using the new keyword)

//You can also create an array using JavaScript's 'new' keyword.

const array2 = new Array("eat", "sleep");
/*In both of the above examples, we have created an array having two elements. */

// empty array
const myList = [ ];
// array of numbers
const numberArray = [ 2, 4, 6, 8];
// array of strings
const stringArray = [ 'eat', 'work', 'sleep'];
// array with mixed data types
const newData = ['work', 'exercise', 1, true];

//You can also store arrays, functions and other objects inside an array.

newData = [
    {'task1': 'exercise'},
    [1, 2 ,3],
    function hello() { console.log('hello')}
];





//7.1.4 Array.of()

//Array of() method creates a new Array instance from the given arguments.


//Syntax
//Array.of(element0, element1, ..., elementN)

//of() Parameters
/* of() method takes in an arbitrary number of elements 
that is then used to create the array. */

//Return value from of()
//Returns a new Array instance.

Array.of(5);       // [5] 
Array(5);          // array of 5length

Array(1, 2, 3);    // [1, 2, 3]
Array.of(1, 2, 3); // [1, 2, 3]


Array.of() // => []; returns empty array with no arguments
Array.of(10) // => [10]; can create arrays with a single numeric argument
Array.of(1,2,3) // => [1, 2, 3]


//7.1.5 Array.from()



/*Array.from() static method creates a shallow-copied Array instance 
from an array-like or iterable object. */

//Syntax
Array.from(arraylike, mapFunc, thisArg)


/*from() Parameters

arraylike - Array-like or iterable object to convert to an array.
mapFunc (optional) - Map function that is called on each element.
thisArg (optional) - Value to use as this when executing mapFunc. */

//Return value 
//Returns a new Array instance.

/*This method can create Array from:

Array-like objects - The objects that have length property 
and have indexed elements like strings. 
Iterable objets like Map or Set. */


//Using from() method
// Array from String
let arr1 = Array.from("abc");
console.log(arr1); // [ 'a', 'b', 'c' ]
// Array from Map
let mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
let arr2 = Array.from(mapper);
console.log(arr2); // [ [ '1', 'a' ], [ '2', 'b' ] ]
let arr3 = Array.from(mapper.keys());
console.log(arr3); // [ '1', '2' ]

// Array from Set
varset = new Set(["JavaScript", "Python", "Go"]);
vararr4 = Array.from(set);
console.log(arr4); // [ 'JavaScript', 'Python', 'Go' ]

//Using from() method with mapFunc
function createArr(arraylike, mapFunc) {
  return Array.from(arraylike, mapFunc);
}
// using arrow function for mapFunc
var arr5 = createArr("123456", (x) => 2 * x);
console.log(arr5); // [ 2, 4, 6, 8, 10, 12 ]




//7.2 Reading and Writing Array Elements

//You access an element of an array using the [] operator.
/* An arbitrary expression that has a non-negative integer value 
should be inside the brackets. */

//Accessing elements
var arr=['a', 'b', 'c', 'd', 'e'];
arr[1] // b
arr[4] // e
arr[-1] // undefined

//Populating an array
let emp = []
emp[0] = 'Casey Jones'
emp[1] = 'Phil Lesh'
emp[2] = 'August West'

var o = {}; // Create a plain object
o[1] = "one"; // Index it with an integer 32
o["1"] // => "one"; numeric and string property names are the same


//All indexes are property names, but only property
//names that are integers between 0 and 2 –2 are indexes.

var a = [true, false]; // This array has elements at indexes 0 and 1
a[2] // => undefined; no element at this index.
a[-1] // => undefined; no property with this name.


//7.3 Sparse Arrays

/* A sparse array is one in which the elements are not sequential, and they don't always start at 0 */



//How do you get a sparse array?


//Use the Array object
var array = new Array(10); // array initialized with no elements
array.length // 10

//Insert a key/value at a certain index
array[1000] = 0; // Assignment adds one element 
array.length // But .length returns 1001

//Use the delete operator
var array = [1, 2, 3, 4, 5]
delete array[0]
array.length // .length returns 5

//Initialize an Array with holes
/*[,,,,] //You have created an array with nothing but holes
[1,2,3,4,,5] //you mistyped a comma and entered a hole between 4 and 5! */



//7.4 Array Length

//The length property returns or sets the number of elements in an array.


//Syntax
arr.length

//Finding Number of Elements in an Array
var companyList = ["Apple", "Google", "Facebook", "Amazon"];
console.log(companyList.length); // Output: 4

var randomList = ["JavaScript", 44];
console.log(randomList.length); // Output: 2

var emptyArray = [];
console.log(emptyArray.length); // Output: 0
/* we can see that length property returns the number of items in each array. 
It returns the integer just greater than the highest index in an Array. */


//Using Array length in for loop
var languages = ["JavaScript", "Python", "C++", "Java", "Lua"];
// languages.length can be used to find out 
// the number of times to loop over an array
for (i = 0; i < languages.length; i++){
    console.log(languages[i]);
}
/*You can also reassign the length property of an Array
using the assignment operator =. */

//Syntax to assign the Array length:
//array.length = <Integer>

//Changing length property of Array
var languages = ["JavaScript", "Python", "C++", "Java", "Lua"];
// truncate the Array to 3 elements
languages.length = 3
// Output: [ 'JavaScript', 'Python', 'C++' ]
console.log(languages)
// extend the Array to length 6
languages.length = 6
// Output: [ 'JavaScript', 'Python', 'C++', <3 empty items> ]
console.log(languages)



//7.5 Adding and Deleting Array Elements

/* push() method adds zero or more elements to the end of an array and returns the new length of the array.*/

//Syntax
arr.push(element1, element2, ..., elementN)

//Parameters
//push() method takes in an arbitrary number of elements to add to the array.

//Return Value
/*Returns the new (after appending the arguments) length of the array upon which the method was called. */

let a = []; // Start with an empty array
a.push("zero"); // Add a value at the end. a = ["zero"]
a.push("one", "two"); // Add two more values. a = ["zero","one", "two"]




//delete
/* You can delete array elements with the delete operator, just as you
can delete object properties: */

let a = [1,2,3];
delete a[2]; // a now has no element at index 2
2 in a // => false: no array index 2 is defined
a.length // => 3: delete does not affect array length



//7.6 Iterating Arrays

//Using 'for/of' loop

var letters = [..."Hello world"]; // An array of letters
var string = "";
for(let letter of letters) {
    string += letter;
}
string // => "Hello world";
/* for/of loop uses returns the elements of an array in ascending order. */


//Array entries()
/* Array entries() method returns a new Array Iterator object containing key/value pairs for each array index. */

//Syntax
arr.entries()

//Parameters
//entries() method does not have any parameters.

//Return value from entries()
//Returns a new Array iterator object.

var everyother = "",letters = [..."Hello world"];
for(let [index, letter] of letters.entries()) {
    if (index % 2 === 0) everyother += letter; // letters at even indexes
}
everyother //'Hlowrd'

//7.7 Multidimensional Arrays
/* JavaScript does not support true multidimensional arrays, but you can
approximate them with arrays of arrays. */

//Every element in matrix[x] is an array of numbers.

//concrete example that uses a two-dimensional array as a multiplication table:
// Create a multidimensional array
let table = new Array(10); // 10 rows of the table
    for(let i = 0; i < table.length; i++) {
        table[i] = new Array(10); // Each row has 10 columns
}

// Initialize the array
for(let row = 0; row < table.length; row++) {
    for(let col = 0; col < table[row].length; col++) {
        table[row][col] = row*col;
    }
}

// Use the multidimensional array to compute 5*7
table[5][7] // => 35





//7.8.1 Array Iterator Methods

/* all of these methods accept a function as their first argument and invoke that function once for each element of the array. */



//FOREACH()

/*forEach() method calls a function and iterates over the elements of an array. 
The forEach() method can also be used on Maps and Sets.*/

//Syntax

array.forEach(function(currentValue, index, arr))
/* 
function(currentValue, index, arr) - a function to be run for each element of an array

currentValue - the value of an array

index (optional) - the index of the current element */

//forEach with Arrays
let students = ['John', 'Sara', 'Jack'];
//using forEach
students.forEach(myFunction);
function myFunction(item) {
    console.log(item);
} //John Sara Jack


//MAP()

/* Map is similar to objects in JavaScript that allows us to store elements 
in a 'key/value' pair. */

//Create JavaScript Map
//we use the new Map() constructor. For example,

var map1 = new Map(); // an empty map
console.log(map1); // Map {}

//Insert Item to Map


/*After you create a map, you can use the 'set()' method to insert elements to it. */
// create a set
var map1 = new Map();
// insert key-value pair
map1.set('info', {name: 'Jack', age: 26});
console.log(map1); // Map {"info" => {name: "Jack", age: 26}}




//Access Map Elements


//You can access Map elements using the 'get()' method. 
let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});
// access the elements of a Map
console.log(map1.get('info')); // {name: "Jack", age: "26"}



//Check Map Elements

//You can use the 'has()' method to check if the element is in a Map.
var set1 = new Set([1, 2, 3]);
let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});
// check if an element is in Set
console.log(map1.has('info')); // true


//Removing Elements

/*You can use clear() and  delete() method to remove elements from a Map. */

/* delete() method returns true if a specified 'key/value' pair exists and has been removed or else returns false. */

var map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});
// removing a particular element
map1.delete('address'); // false
console.log(map1); // Map {"info" => {name: "Jack", age: "26"}} 
map1.delete('info'); // true
console.log(map1); // Map {}

//clear() method removes all 'key/value' pairs from a Map object.
let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});
// removing all element
map1.clear();
console.log(map1); // Map {}


//JavaScript Map Size

//You can get the number of elements in a Map using the 'size' property.

let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

console.log(map1.size); // 1


//Iterate Through a Map

/*You can iterate through the Map elements using the 'for...of' loop or 'forEach()' method. The elements are accessed in the insertion order. */





//FILTER()

//array.filter(function(currentValue, index, arr), thisValue)


//The filter() method returns an array containing a subset of the
//elements of the array on which it is invoked.
let a = [5, 4, 3, 2, 1];
a.filter(x => x < 3) // => [2, 1]; values less than 3
a.filter((x,i) => i%2 === 0) // => [5, 3, 1]; every other value

//Note that filter() skips missing elements in sparse arrays and that
//its return value is always dense. 
let dense = sparse.filter(() => true);

//And to close gaps and remove undefined and null elements, you can
//use filter, like this:
a = a.filter(x => x !== undefined && x !== null);



//FIND() AND FINDINDEX()


//array.find(function(currentValue, index, arr),thisValue)

let a = [1,2,3,4,5];
a.findIndex(x => x === 3) // => 2; the value 3 appears at index 2
a.findIndex(x => x < 0) // => -1; no negative numbers in the array
a.find(x => x % 5 === 0) // => 5: this is a multiple of 5
a.find(x => x % 7 === 0) // => undefined: no multiples of 7 in the array


//EVERY() AND SOME()

//array.every(function(currentValue, index, arr), thisValue)

let a = [1,2,3,4,5];
a.every(x => x < 10) // => true: all values are < 10.
a.every(x => x % 2 === 0) // => false: not all values are even.

//array.some(function(currentValue, index, arr), thisValue)

let a = [1,2,3,4,5];
a.some(x => x%2===0) // => true; a has some even numbers.
a.some(isNaN) // => false; a has no non-numbers.




//REDUCE() AND REDUCERIGHT()

//array.reduce(function(total, 
//currentValue, currentIndex, arr), initialValue)


//The reduce() and reduceRight() methods combine the
//elements of an array, using the function you specify, to produce a
//single value.


//reduce() takes two arguments. The first is the function that
//performs the reduction operation

//The second (optional) argument is an initial value
//to pass to the function.


let a = [1,2,3,4,5];
a.reduce((x,y) => x+y, 0) // => 15; the sum of the values
a.reduce((x,y) => x*y, 1) // => 120; the product of the values
a.reduce((x,y) => (x > y) ? x : y) // => 5; the largest of the values


//7.8.2 Flattening arrays with flat() and flatMap()
[1, [2, 3]].flat() // => [1, 2, 3]
[1, [2, [3]]].flat() // => [1, 2, [3]]

let a = [1, [2, [3, [4]]]];
a.flat(1) // => [1, 2, [3, [4]]]
a.flat(2) // => [1, 2, 3, [4]]
a.flat(3) // => [1, 2, 3, 4]
a.flat(4) // => [1, 2, 3, 4]


let phrases = ["hello world", "the definitive guide"];
let words = phrases.flatMap(phrase => phrase.split(" "));
words // => ["hello", "world", "the", "definitive", "guide"];
//a.flatMap(f) is the same as a.map(f).flat():



//7.8.3 Adding arrays with concat()

//array1.concat(array2, array3, ..., arrayX)

let a = [1,2,3];
a.concat(4, 5) // => [1,2,3,4,5]
a.concat([4,5],[6,7]) // => [1,2,3,4,5,6,7]; arrays are flattened
a.concat(4, [5,[6,7]]) // => [1,2,3,4,5,[6,7]]; but not nested arrays
a // => [1,2,3]; the original array is unmodified



//7.8.4 Stacks and Queues with push(), pop(), shift(), and unshift()

//The Array.push() method adds new items to the end of an array.
//Array.push() changes the length of the array and returns the new length.

//array.push(item1, item2, ..., itemX)



//The Array.pop() method removes the last element of an array.
//Array.pop() returns the element it removes.

//array.pop()

let stack = []; // stack == []
stack.push(1,2); // stack == [1,2];
stack.pop(); // stack == [1]; returns 2
stack.push(3); // stack == [1,3]
stack.pop(); // stack == [1]; returns 3
stack.push([4,5]); // stack == [1,[4,5]]
stack.pop() // stack == [1]; returns [4,5]
stack.pop(); // stack == []; returns 1



//The Array.shift() method removes the first item of an array.
//Array.shift() returns the element it removes.

//array.shift()


//The Array.unshift() method adds new items to the beginning of an array,
// and returns the new length.

//array.unshift(item1, item2, ..., itemX)


let q = []; // q == []
q.push(1,2); // q == [1,2]
q.shift(); // q == [2]; returns 1
q.push(3) // q == [2, 3]
q.shift() // q == [3]; returns 2
q.shift() // q == []; returns 3


let a = []; // a == []
a.unshift(1) // a == [1]
a.unshift(2) // a == [2, 1]
a = []; // a == []
a.unshift(1,2) // a == [1, 2]


//7.8.5 Subarrays with slice(), splice(), fill(), and copyWithin()


//SLICE()
//array.slice(start, endarray.slice(start, end))

//Its two arguments specify the start and end of the slice to be
//returned.
let a = [1,2,3,4,5];
a.slice(0,3); // Returns [1,2,3]
a.slice(3); // Returns [4,5]
a.slice(1,-1); // Returns [2,3,4]
a.slice(-3,-2); // Returns [3]


//SPLICE()

//Unlike slice() and concat(),
//splice() modifies the array on which it is invoked.


//splice() returns an array of the deleted elements, 
//or an empty array if no elements were deleted.
let a = [1,2,3,4,5,6,7,8];
a.splice(4) // => [5,6,7,8]; a is now [1,2,3,4]
a.splice(1,2) // => [2,3]; a is now [1,4]
a.splice(1,1) // => [4]; a is now [1]


//The first two arguments to splice() specify which array elements
//are to be deleted.

let a = [1,2,3,4,5];
a.splice(2,0,"a","b") // => []; a is now [1,2,"a","b",3,4,5]
a.splice(2,2,[1,2],3) // => ["a","b"]; a is now [1,2,[1,2],3,3,4,5]


//FILL()

//array.fill(value, start, end)
//The Array.fill() method fills specified elements 
//in an array with a static value.


let a = new Array(5); // Start with no elements and length 5
a.fill(0) // => [0,0,0,0,0]; fill the array with zeros
a.fill(9, 1) // => [0,9,9,9,9]; fill with 9 starting at index 1
a.fill(8, 2, -1) // => [0,9,8,8,9]; fill with 8 at indexes 2, 3




//COPYWITHIN()

//array.copyWithin(target, start, end)

//The Array.copyWithin() method copies array elements 
//to another position in an array, overwriting the existing values.


let a = [1,2,3,4,5];
a.copyWithin(1) // => [1,1,2,3,4]: copy array elements up one
a.copyWithin(2, 3, 5) // => [1,1,3,4,4]: copy last 2 elements to index 2
a.copyWithin(0, -2) // => [4,4,3,4,4]: negative offsets work, too



//7.8.6 Array Searching and Sorting Methods

//INDEXOF() AND LASTINDEXOF()

//The Array.indexOf() method searches an array 
//for a specified item and returns its position.

//array.indexOf(item, start)



//The Array.lastIndexOf() method 
//returns the last index (position) of a specified value.

//array.lastIndexOf(item, start)


let a = [0,1,2,1,0];
a.indexOf(1) // => 1: a[1] is 1
a.lastIndexOf(1) // => 3: a[3] is 1
a.indexOf(3) // => -1: no element has value 3

// Find all occurrences of a value x in an array a and return an array
// of matching indexes
function findall(a, x) {
    let results = [], // The array of indexes we'll return
        len = a.length, // The length of the array to be searched
        pos = 0; // The position to search from
    while(pos < len) { // While more elements to search...
        pos = a.indexOf(x, pos); // Search
        if (pos === -1) break; // If nothing found, we're done.
        results.push(pos); // Otherwise, store index in array
        pos = pos + 1; // And start next search at next element
    }
    return results; // Return array of indexes
}

//INCLUDES()

//The Array.includes() method returns true 
//if an array contains a specified element, otherwise false.

//array.includes(element, start)


//SORT()

//The Array.sort() method sorts the elements of an array.

//array.sort(compareFunction)


//When sort() is called with no arguments, it sorts the array
//elements in alphabetical order.


let a = ["banana", "cherry", "apple"];
a.sort(); // a == ["apple", "banana", "cherry"]

//If an array contains undefined elements, they are sorted to the end of
//the array.


let a = [33, 4, 1111, 222];
a.sort(); // a == [1111, 222, 33, 4]; alphabetical order
a.sort(function(a,b) { // Pass a comparator function
    return a-b; // Returns < 0, 0, or > 0, depending on order
}); // a == [4, 33, 222, 1111]; numerical order
a.sort((a,b) => b-a); // a == [1111, 222, 33, 4]; reverse numerical order


let a = ["ant", "Bug", "cat", "Dog"];
a.sort(); // a == ["Bug","Dog","ant","cat"]; casesensitive sort
a.sort(function(s,t) {
    let a = s.toLowerCase();
    let b = t.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}); // a == ["ant","Bug","cat","Dog"]; case-insensitive sort


//REVERSE()

let a = [1,2,3];
a.reverse(); // a == [3,2,1]

//7.8.7 Array to String Conversions

//The Array.join() method returns an array as a string.
//array.join(separator)


let a = [1, 2, 3];
a.join() // => "1,2,3"
a.join(" ") // => "1 2 3"
a.join("") // => "123"
let b = new Array(10); // An array of length 10 with no elements
b.join("-") // => "---------": a string of 9 hyphens

//The join() method is the inverse of the String.split()
//method, which creates an array by breaking a string into pieces

[1,2,3].toString() // => "1,2,3"
["a", "b", "c"].toString() // => "a,b,c"
[1, [2,"c"]].toString() // => "1,2,c"


//7.9 Array-Like Objects

//The following code takes a regular object, adds properties 
//to make it an array-like object, and then
//iterates through the “elements” of the resulting pseudo-array:


let a = {}; // Start with a regular empty object

// Add properties to make it "array-like"
let i = 0;
while(i < 10) {
    a[i] = i * i;
    i++;
}
a.length = i;


// Now iterate through it as if it were a real array
let total = 0;
for(let j = 0; j < a.length; j++) {
    total += a[j];
}


//7.10 Strings as Arrays


//chatAt()

//The charAt() method returns the character at a specified index in a string.
//string.charAt(index)

let s = "test";
s.charAt(0) // => "t"
s[1] // => "e"