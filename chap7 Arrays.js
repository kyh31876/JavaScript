//7.1 Creating Arrays

//An array is an object that can store multiple elements. For example,
var myArray = ['hello', 'world', 'welcome'];


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
const array = [1, 2, 3, 4, 5]
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

/* all of these methods accept a function as their first argument 
and invoke that function once for each element of the array. */



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

/* delete() method returns true if a specified 'key/value' pair 
exists and has been removed or else returns false. */

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

/*You can iterate through the Map elements using the 'for...of' 
loop or 'forEach()' method. The elements are accessed in the insertion order. */
let map1 = new Map();
map1.set('name', 'Jack');
map1.set('age', '27');

// looping through Map
for (let [key, value] of map1) {
    console.log(key + '- ' + value);
}




//FILTER()
/* filter() method returns a new array with all elements that pass 
the test defined by the given function. */

//Syntax
arr.filter(callback(element), thisArg)

//Parameters
/*
callback - The test function to execute on each array element; 
returns true if element passes the test, else false. It takes in:

element - The current element being passed from the array.

thisArg (optional) - The value to use as this when executing callback. 
By default, it is undefined. */


//Return Value
//Returns a new array with only the elements that passed the test.


/*filter() does not change the original array.
filter() does not execute callback for array elements without values */


let a = [5, 4, 3, 2, 1];
a.filter(x => x < 3) // => [2, 1]; values less than 3
a.filter((x,i) => i%2 === 0) // => [5, 3, 1]; every other value

//Note that 'filter()' skips missing elements in sparse arrays and that
//its return value is always dense. 
let dense = sparse.filter(() => true);

//And to close gaps and remove undefined and null elements, you can
//use filter, like this:
a = a.filter(x => x !== undefined && x !== null);



//FIND()

/*find() method returns the value of the first array element that 
satisfies the provided test function. */

//Syntax

arr.find(callback(element, index, arr),thisArg)

//Parameters
/*
callback - Function to execute on each element of the array. It takes in:
element - The current element of array.

thisArg (optional) - Object to use as this inside callback. */

//Return Value
/*
Returns the value of the first element in the array that satisfies the given function.
Returns undefined if none of the elements satisfy the function.
*/
function isEven(element) {
    return element % 2 == 0;
}
let randomArray = [1, 45, 8, 98, 7];

let firstEven = randomArray.find(isEven);
console.log(firstEven); // 8
// using arrow operator
let firstOdd = randomArray.find((element) => element % 2 == 1);
console.log(firstOdd); // 1



//findindex()

/*findIndex() method returns the index of the first array element 
that satisfies the provided test function or else returns -1. */

//Syntax
arr.findIndex(callback(element, index, arr),thisArg)

//Parameters
/*
callback - Function to execute on each element of the array. It takes in:
element - The current element of array.

thisArg (optional) - Object to use as this inside callback.*/

//Return value 
/*Returns the index of the first element in the array that satisfies the given function.
Returns -1 if none of the elements satisfy the function. */

function isEven(element) {
    return element % 2 == 0;
}
let randomArray = [1, 45, 8, 98, 7];

firstEven = randomArray.findIndex(isEven);
console.log(firstEven); // 2
// using arrow operator
firstOdd = randomArray.findIndex((element) => element % 2 == 1);
console.log(firstOdd); // 0


//EVERY()
//every() method checks if all the array elements pass the given test function.

//Syntax
arr.every(callback(currentValue), thisArg)

//Parameters
/*
callback - The function to test for each array element. It takes in:
currentValue - The current element being passed from the array.

thisArg (optional) - Value to use as this when executing callback. 
By default, it is undefined */


//Return value 
/*Returns true if all array elements pass 
the given test function (callback returns a truthy value). Otherwise, it returns false.

every() does not change the original array.
every() does not execute callback for array elements without values. */

//Check Value of Array Element
function checkAdult(age) {
    return age >= 18;
}
const ageArray = [34, 23, 20, 26, 12];
let check = ageArray.every(checkAdult); // false
if (!check) {
    console.log("All members must be at least 18 years of age.")
}
// using arrow function
let check1 = ageArray.every(age => age >= 18); // false
console.log(check1);





//some()

//some() method tests whether any of the array elements pass the given test function.

//Syntax
arr.some(callback(currentValue), thisArg)

//Parameters
/*
callback - The function to test for each array element. It takes in:
currentValue - The current element being passed from the array.

thisArg (optional) - Value to use as this when executing callback. 
By default, it is undefined */


//Return value
/*Returns true if an array element passes the given test function 
(callback returns a truthy value). Otherwise, it returns false */


//Check Value of Array Element
function checkMinor(age) {
    return age < 18;
}

var ageArray = [34, 23, 20, 26, 12];
let check = ageArray.some(checkMinor); // true
if (check) {
    console.log("All members must be at least 18 years of age.")
}
// using arrow function
let check1 = ageArray.some(age => age >= 18); // true
console.log(check1)



//REDUCE()

/* reduce() method executes a reducer function on each element 
of the array and returns a single output value. */

//Syntax
arr.reduce(callback(accumulator, currentValue), initialValue)

//Parameters
/*
callback - The function to execute on each array element 
(except the first element if no initialValue is provided). It takes in
accumulator - It accumulates the callback's return values.
currentValue - The current element being passed from the array.

initialValue (optional) - A value that will be passed to callback() on first call. 
If not provided, the first element acts as the accumulator 
on the first call and callback() won't execute on it. */

//Return Value
/*
Returns the single value resulting after reducing the array.

reduce() executes the given function for each value from left to right.
reduce() does not change the original array. */

//Sum of All Values of Array
const numbers = [1, 2, 3, 4, 5, 6];

function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

let sum = numbers.reduce(sum_reducer);
console.log(sum); // 21

// using arrow function
let summation = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(summation); // 21




//7.8.2 Flattening arrays with flat() and flatMap()

//flat()

/* flat() method creates a new array with all sub-array elements 
concatenated into it recursively up to the specified depth. */

//Syntax
arr.flat(depth)

//Parameters
//depth (optional) - Integer specifying how deep a nested array should be flattened.


//Return value 
//Returns a new array with the sub-array elements concatenated into it.
var arr1 = [1, [2, 3, 4], 5];
var flattened1 = arr1.flat();
console.log(flattened1); // [ 1, 2, 3, 4, 5 ]

var arr2 = [1, 2, [3, 4, [5, 6]]];

var flattened2 = arr2.flat();
console.log(flattened2); // [1, 2, 3, 4, [5, 6]]

var flattened3 = arr2.flat(2);
console.log(flattened3); //  [ 1, 2, 3, 4, 5, 6 ]

var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
var flattened4 = arr4.flat(Infinity);
console.log(flattened4); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// flat() removes holes
var numArr = [1, , 3];
console.log(numArr.flat()); // [ 1, 3 ]



//flatMap()
/* flatMap() method first maps each element using a mapping function, 
then flattens it into a new array. */

//Syntax
arr.flatMap(callback(currentValue),thisArg)

//Parameters
/*
callback - The function to initially execute on each array element. It takes in:
currentValue - The current element being passed from the array.

thisArg (optional) - Value to use as this when executing callback */

//Return value 
/* Returns a new array after mapping every element using callback and flattening 
it to a depth of 1. */
const arr1 = [1, 2, 3, 4, 5];

const newArr1 = arr1.flatMap((x) => [x ** 2]);
console.log(newArr1); // [ 1, 2, 3, 4, 5 ]

// can also be done as
const intermediate = arr1.map((x) => [x ** 2]);
console.log(intermediate); // [ [ 1 ], [ 4 ], [ 9 ], [ 16 ], [ 25 ] ]

const newArr2 = intermediate.flat();
console.log(newArr2); // [ 1, 4, 9, 16, 25 ]
const numbers = [1, 2, 3, 4, 5, 6, 7];
// remove odd and split even element to two half elements
function func(n) {
    if (n % 2 === 0) {
        return [n / 2, n / 2];
  } else {
        return [];
  }
}
const newArr3 = numbers.flatMap(func);
console.log(newArr3); // [ 1, 1, 2, 2, 3, 3 ]



//Concat()
/* concat() method returns a new array by merging two or more values/arrays. */

/*Syntax
arr.concat(value1, value2, ..., valueN)

Parameters
concat() method takes in an arbitrary number of arrays and/or values as arguments. */

//Return Value
/*Returns a newly created array after merging all arrays/values passed in the argument. */


//Using concat() method
var languages1 = ["JavaScript", "Python", "Java"],languages2 = ["C", "C++"];

// concatenating two arrays
var new_arr = languages1.concat(languages2);
console.log(new_arr); // [ 'JavaScript', 'Python', 'Java', 'C', 'C++' ]

// concatenating a value and array
var new_arr1 = languages2.concat("Lua", languages1);
console.log(new_arr1); // [ 'C', 'C++', 'Lua', 'JavaScript', 'Python', 'Java' ]

//Concatenating nested arrays
/* It copies object references to the new array.
So if the referenced object is modified, the changes are visible in the returned new array.
It copies the value of strings and numbers to the new array. */

var randomList = [1, 2, 3];
var randomNestedList = [[4, 5], [6, 7],];
var combined = randomList.concat(randomNestedList);
console.log(combined); // [ 1, 2, 3, [ 4, 5 ], [ 6, 7 ] ]

// changing the value 1 to 0
randomList[0] = 0;
console.log(randomList); // [ 0, 2, 3 ]
// changes not reflected in concatenated array
console.log(combined); // [ 1, 2, 3, [ 4, 5 ], [ 6, 7 ] ]
// modifying nested list (adding 6 to first element)
randomNestedList[0].push(6);
console.log(randomNestedList); // [ [ 4, 5, 6 ], [ 6, 7 ] ]

// changes are reflected in concatenated array
// since it is a reference to the object
console.log(combined); // [ 1, 2, 3, [ 4, 5, 6 ], [ 6, 7 ] ]



//7.8.4 Stacks and Queues with push(), pop(), shift(), and unshift()

//1
//Pop()
/* pop() method removes the last element from an array and returns that element. */
//Syntax  arr.pop()
/* Parameters //The pop() method does not have any parameters. */

/*Return Value
Removes the last element from array and returns that value.
Returns undefined if the array is empty.

This method changes the original array and its length. */

var languages = ["JavaScript", "Python", "Java", "C++", "Lua"];
var popped = languages.pop();

console.log(languages); // [ 'JavaScript', 'Python', 'Java', 'C++' ]
console.log(popped); // Lua

// pop returns any type of object
var numbers = [ [1, 2, 3],[4, 5, 6],[-5, -4, -3],];
console.log(numbers.pop()); // [ -5, -4, -3 ]
console.log(numbers); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]



//2
//Shift()
/* shift() method removes the first element from an array and returns that element. */

//Syntax //arr.shift()
//Parameters  //shift() method does not accept any arguments.

/*Return Value
Removes the first element from array and returns that value.

Returns undefined if the array is empty. 
This method changes the original array and its length. */


var languages = ["JavaScript", "Python", "Java", "C++", "Lua"];
var shifted = languages.shift();

console.log(languages); // [ 'Python', 'Java', 'C++', 'Lua' ]
console.log(shifted); // JavaScript
// shift returns any type of object
var numbers = [
    [1, 2, 3],[4, 5, 6],[-5, -4, -3]
];
console.log(numbers.shift()); // [ 1, 2, 3 ]
console.log(numbers); // [ [ 4, 5, 6 ], [ -5, -4, -3 ] ]


//3 
//Unshift()
/* unshift() method adds one or more elements to 
the beginning of an array and returns the new length of the array. */

//Syntax   arr.unshift(element1, element2, ..., elementN)

//Parameters
// unshift() method takes in an arbitrary number of elements to add to the array.

/*Return Value
Returns the new (after adding arguments to the beginning of array) length of the array 
upon which the method was called.

This method changes the original array and its length. */

var languages = ["JavaScript", "Python", "Java", "Lua"];
var count = languages.unshift("C++");
console.log(languages); // [ 'C++', 'JavaScript', 'Python', 'Java', 'Lua' ]
console.log(count); // 5

var priceList = [12, 21, 35];
var count1 = priceList.unshift(44, 10, 1.6);
console.log(priceList); // [ 44, 10, 1.6, 12, 21, 35 ]
console.log(count1); // 6


//4
//Push()
/* push() method adds zero or more elements to the end of an array 
and returns the new length of the array.*/

//Syntax   //arr.push(element1, element2, ..., elementN)

//Parameters //push() method takes in an arbitrary number of elements to add to the array.

//Return Value
/*Returns the new (after appending the arguments) 
length of the array upon which the method was called. 

This method changes the original array and its length. */

var languages = ["JavaScript", "Python", "Java", "Lua"];
var count = languages.push("C++");
console.log(languages); // [ 'JavaScript', 'Python', 'Java', 'Lua', 'C++' ]
console.log(count); // 5

var priceList = [12, 21, 35];
var count1 = priceList.push(44, 10, 1.6);
console.log(priceList); // [ 12, 21, 35, 44, 10, 1.6 ]
console.log(count1); // 6





//7.8.5 Subarrays with slice(), splice(), fill(), and copyWithin()

//1
//SLICE()
/* slice() method returns a shallow copy of a portion 
of an array into a new array object. */

//Syntax  //arr.slice(start, end)

//Parameters
/*start (optional)
Starting index of the selection. If not provided, the selection starts at start 0.

end (optional)
Ending index of the selection (exclusive). 
If not provided, the selection ends at the index of the last element. */


//Return Value
//Returns a new array containing the extracted elements.

let languages = ["JavaScript", "Python", "C", "C++", "Java"];
// slicing the array (from start to end)
let new_arr = languages.slice();
console.log(new_arr); // [ 'JavaScript', 'Python', 'C', 'C++', 'Java' ]

// slicing from the third element
let new_arr1 = languages.slice(2);
console.log(new_arr1); // [ 'C', 'C++', 'Java' ]

// slicing from the second element to fourth element
let new_arr2 = languages.slice(1, 4);
console.log(new_arr2); // [ 'Python', 'C', 'C++' ]






//2
//SPLICE()
/* splice() method returns an array by changing (adding/removing) its elements in place. */

//Syntax   
//arr.splice(start, deleteCount, item1, ..., itemN)

/*//Parameters
start - The index from where the array is changed.

deleteCount (optional) - The number of items to remove from start.

item1,..., itemN (optional) - The elements to add to the start index. 
If not specified, splice() will only remove elements from the array. */

/*Return Value
Returns an array containing the deleted elements.
The splice() method changes the original array. */


let languages = ["JavaScript", "Python", "Java", "Lua"];
// replacing "Java" & "Lua" with "C" & "C++"
let removed = languages.splice(2, 2, "C", "C++");
console.log(removed); // [ 'Java', 'Lua' ]
console.log(languages); // [ 'JavaScript', 'Python', 'C', 'C++' ]

// adding elements without deleting existing elements
let removed1 = languages.splice(1, 0, "Java", "Lua");
console.log(removed1); // []
console.log(languages); // [ 'JavaScript', 'Java', 'Lua', 'Python', 'C', 'C++' ]
// removing 3 elements
let removed2 = languages.splice(2, 3);
console.log(removed2); // [ 'Lua', 'Python', 'C' ]
console.log(languages); // [ 'JavaScript', 'Java', 'C++' ]



/*Using splice() for different deleteCount values
If start > array.length,   splice() does not delete anything and 
starts appending arguments to the end of the array.

If start < 0, the index is counted from backward (array.length + start). 
For example, -1 is the last element.

If array.length + start < 0, it will begin from index 0. */

let languages = ["JavaScript", "Python", "Java", "Lua"];

// does not removes, only appends to the end
let removed = languages.splice(5, 2, "C++");
console.log(removed); // []
console.log(languages); // ["JavaScript", "Python", "Java", "Lua", "C++"]

// remove last element and add 3 more elements
let removed1 = languages.splice(-1, 1, "Swift", "Scala", "Go");
console.log(removed1); // [ "C++" ]
console.log(languages); 
// ["JavaScript", "Python", "Java", "Lua", "Swift", "Scala", "Go"]

/*Using splice() for different start values
If deleteCount is omitted or is greater than the number of elements 
left in the array, it deletes all elements from start to end of the array.  

If deleteCount is 0 or negative, no elements are removed. 
But, at least one new element should be specified. */

let languages = ["JavaScript", "Python", "Java", "Lua"];
// removes everything from start
let removed = languages.splice(1);
console.log(removed); // [ "Python", "Java", "Lua" ]
console.log(languages); // [ "JavaScript" ]

// remove none & add 3 more element
let removed1 = languages.splice(1, -2, "Swift", "Scala", "Go");
console.log(removed1); // [ ]
console.log(languages); // [ "JavaScript", "Swift", "Scala", "Go" ]




//3
//FILL()

// fill() method returns an array by filling all elements with a static value.

//Syntax    //arr.fill(value, start, end)

/*Parameters
value - Value to fill the array with.
start (optional) - Start index (default is 0).
end (optional) - End index (default is Array.length) (exclusive). */

/*Return value 
Returns the modified array, filled with value from start to end.

If start or end is negative, indexes are counted from backwards.
Since fill() is a mutator method, it changes the array itself (not a copy)
and returns it. */

var prices = [651, 41, 4, 3, 6];
// if only one argument, fills all elements
new_prices = prices.fill(5);
console.log(prices); // [ 5, 5, 5, 5, 5 ]
console.log(new_prices); // [ 5, 5, 5, 5, 5 ]
// start and end arguments specify what range to fill
prices.fill(10, 1, 3);
console.log(prices); // [ 5, 10, 10, 5, 5 ]

// -ve start and end to count from back
prices.fill(15, -2);
console.log(prices); // [ 5, 10, 10, 15, 15 ]
// invalid indexed result in no change
prices.fill(15, 7, 8);
console.log(prices); // [ 5, 10, 10, 15, 15 ]

prices.fill(15, NaN, NaN);
console.log(prices); // [ 5, 10, 10, 15, 15 ]




//COPYWITHIN()

/* copyWithin() method shallow copies array elements to another position 
in the array, overwriting the existing values. */

//Syntax    //arr.copyWithin(target, start, end)

/* Parameters
target - The index position to copy the elements to.

start (optional) - The index position to start copying elements from. 
If omitted, it will copy from index 0.

end (optional) - The index position to end copying elements from. 
(exclusive) If omitted, it will copy until last index. */

//If any of the arguments are negative, index will be counted from backwards.

/* Return value from 
Returns the modified array after copying the elements.

This method overwrites the original array.
This method does not change the length of the original array. */

let array = [1, 2, 3, 4, 5, 6];
// target: from second-to-last element, start: 0, end: array.length
let returned_arr = array.copyWithin(-2);
console.log(returned_arr); // [ 1, 2, 3, 4, 1, 2 ]
// modifies the original array
console.log(array); // [ 1, 2, 3, 4, 1, 2 ]
array = [1, 2, 3, 4, 5, 6];
// target: 0, start copying from 5th element
array.copyWithin(0, 4);
console.log(array); // [ 5, 6, 3, 4, 5, 6 ]
array = [1, 2, 3, 4, 5, 6];
// target: 1, start copying from 3rd element to second-to-last element
array.copyWithin(1, 2, -1); // -1 = last element (exclusive)
console.log(array); // [ 1, 3, 4, 5, 5, 6 ]



//7.8.6 Array Searching and Sorting Methods



//indexOF()

//Syntax   //arr.indexOf(searchElement, fromIndex)

/* Parameters

searchElement - The element to locate in the array.
fromIndex (optional) - The index to start the search at. By default, it is 0. */

/* Return Value
Returns the first index of the element in the array if it is present at least once.
Returns -1 if the element is not found in the array. */







//LASTINDEXOF()





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
s[1] // => "e"
s.charAt(0) // => "t"