//7.1 Creating Arrays

//7.1.1 Array Literals

//which is simply a comma-separated list of array elements within square brackets.

let empty = []; // An array with no elements
let primes = [2, 3, 5, 7, 11]; // An array with 5 numeric elements
let misc = [ 1.1, true, "a", ]; // 3 elements of various types + trailing comma

//Array literals can contain object literals or other array literals:
let b = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]];

//Array elements for which values 
//are omitted do not exist but appear to be undefined if you query them:

let count = [1,,3]; // Elements at indexes 0 and 2. No element at index 1
let undefs = [,,]; // An array with no elements but a length of 2



//7.1.2 The Spread Operator

//you can use the “spread operator,” ..., to include
//the elements of one array within an array literal:

let a = [1, 2, 3];
let b = [0, ...a, 4]; // b == [0, 1, 2, 3, 4]


let original = [1,2,3];
let copy = [...original];
copy[0] = 0; // Modifying the copy does not change the original
original[0] // => 1


//7.1.3 The Array() Constructor

//Call it with no arguments:
let a=new Array();
// /This method creates an empty array with no elements and is
//equivalent to the array literal [].

//Call it with a single numeric argument, which specifies a length:
let a = new Array(10);

//Explicitly specify two or more array elements or a single nonnumeric
//element for the array:

let a = new Array(5, 4, 3, 2, 1,"testing, testing");


//7.1.4 Array.of()


Array.of() // => []; returns empty array with no arguments
Array.of(10) // => [10]; can create arrays with a single numeric argument
Array.of(1,2,3) // => [1, 2, 3]


//7.1.5 Array.from()

//With an iterable argument, Array.from(iterable) works like the spread operator
//[...iterable] does. It is also a simple way to make a copy of an array:

let copy = Array.from(original);

let truearray = Array.from(arraylike);





//7.2 Reading and Writing Array Elements

let a = ["world"]; // Start with a one-element array
let value = a[0]; // Read element 0
a[1] = 3.14; // Write element 1
let i = 2;
a[i] = 3; // Write element 2
a[i + 1] = "hello"; // Write element 3
a[a[i]] = a[0]; // Read elements 0 and 2, write element 3

//The square brackets used to access array elements work 
//just like the square brackets used to access object properties.

let o = {}; // Create a plain object
o[1] = "one"; // Index it with an integer 32
o["1"] // => "one"; numeric and string property names are the same


//All indexes are property names, but only property
//names that are integers between 0 and 2 –2 are indexes.

let a = [true, false]; // This array has elements at indexes 0 and 1
a[2] // => undefined; no element at this index.
a[-1] // => undefined; no property with this name.


//7.3 Sparse Arrays
let a = new Array(5); // No elements, but a.length is 5.
a = []; // Create an array with no elements and length = 0.
a[1000] = 0; // Assignment adds one element but sets length to 1001.



let a1 = [,]; // This array has no elements and length 1
let a2 = [undefined]; // This array has one undefined element
0 in a1 // => false: a1 has no element with index 0
0 in a2 // => true: a2 has the undefined value at index 0


//7.4 Array Length

[].length // => 0: the array has no elements
["a","b","c"].length // => 3: highest index is 2, length is 3 

// /if you set the length property to a nonnegative
//integer n smaller than its current value, any array elements
//whose index is greater than or equal to n are deleted from the array:

a = [1,2,3,4,5]; // Start with a 5-element array.
a.length = 3; // a is now [1,2,3].
a.length = 0; // Delete all elements. a is [].
a.length = 5; // Length is 5, but no elements, like new Array(5)


//7.5 Adding and Deleting Array Elements
let a = []; // Start with an empty array.
a[0] = "zero"; // And add elements to it.
a[1] = "one";


let a = []; // Start with an empty array
a.push("zero"); // Add a value at the end. a = ["zero"]
a.push("one", "two"); // Add two more values. a = ["zero","one", "two"]

let a = [1,2,3];
delete a[2]; // a now has no element at index 2
2 in a // => false: no array index 2 is defined
a.length // => 3: delete does not affect array length

//Note that using delete on an array element does not alter 
//the length property and does not shift elements with higher
//indexes down to fill in the gap that is left by the deleted property.


//7.6 Iterating Arrays
let letters = [..."Hello world"]; // An array of letters
let string = "";
for(let letter of letters) {
    string += letter;
}
string // => "Hello world"; we reassembled the original text

//If you want to use a for/of loop for an array and need to know the
//index of each array element, use the entries() method of the array,
//along with destructuring assignment,

let everyother = "";
for(let [index, letter] of letters.entries()) {
    if (index % 2 === 0) everyother += letter; // letters at even indexes
}
everyother // => "Hlowrd"

//You pass a function to the forEach() method of an array,
//and forEach() invokes your function once on each element of the array:
let uppercase = "";
letters.forEach(letter => { // Note arrow function syntax here
    uppercase += letter.toUpperCase();
});
uppercase // => "HELLO WORLD"

//You can also loop through the elements of an array with a good oldfashioned
//for loop

let vowels = "";
for(let i = 0; i < letters.length; i++) { // For each index in the array
    let letter = letters[i]; // Get the element at that index
    if (/[aeiou]/.test(letter)) { // Use a regular expression test
    vowels += letter; // If it is avowel, remember it
    }
}
vowels // => "eoo"



//Both of the following for loop forms are idiomatic, 
//though not particularly common, and with modern JavaScript interpreters, 
//it is not at all clear that they have any performance impact:

// Save the array length into a local variable
for(let i = 0, len = letters.length; i < len; i++) {
// loop body remains the same
}
// Iterate backwards from the end of the array to the start
for(let i = letters.length-1; i >= 0; i--) {
// loop body remains the same
}

//If you want to skip undefined and nonexistent elements, you might write:
for(let i = 0; i < a.length; i++) {
    if (a[i] === undefined) continue; // Skip undefined + nonexistent elements
    // loop body here
}

//7.7 Multidimensional Arrays

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


//FOREACH()

//array.forEach(function(currentValue, index, arr), thisValue)

let data = [1,2,3,4,5], sum = 0;
// Compute the sum of the elements of the array
data.forEach(value => { sum += value; }); // sum == 15
// Now increment each array element
data.forEach(function(v, i, a) { a[i] = v + 1; }); // data ==[2,3,4,5,6]

//MAP()

//array.map(function(currentValue, index, arr), thisValue)


//The map() method passes each element of the array on which it is
//invoked to the function you specify and returns an array containing the
//values returned by your function.

let a = [1, 2, 3];
a.map(x => x*x) // => [1, 4, 9]: the function takes input x and returns x*x



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