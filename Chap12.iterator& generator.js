//Arrays (including TypedArrays) are iterable, 
//as are strings and Set and Map objects.

let sum = 0;
for(let i of [1,2,3]) { // Loop once for each of these values
    sum += i;
}


//Iterators can also be used with the ... operator to expand or “spread”
//an iterable object into an array initializer or function invocation,

let chars = [..."abcd"]; 
let data =[1,2,3,4,5];
Math.max(...data)


///Iterators can be used with destructuring assignment:
let purpleHaze = Uint8Array.of(255, 0, 255, 128);
let [r,g,b,a]= purpleHaze;



/* When you iterate a Map object, the returned values are [key,
value] pairs, which work well with destructuring assignment in a
for/of loop: */ 
let m = new Map([["one", 1], ["two", 2]]);
for(let [k,v] of m) console.log(k, v); // Logs 'one 1' and 'two 2'

//If you want to iterate just the keys or just the values rather than the
//pairs, you can use the keys() and values() methods:


[...m] // => [["one", 1], ["two", 2]]: default iteration
[...m.entries()] // => [["one", 1], ["two", 2]]: entries() method is the same

[...m.keys()] // => ["one", "two"]: keys() method iterates just map keys
[...m.values()] // => [1, 2]: values() method iterates just map values

//a number of built-in functions and constructors that are commonly used with
//Array objects are actually written to accept arbitrary iterators instead.

// Strings are iterable, so the two sets are the same:
new Set("abc") // => new Set(["a", "b", "c"]


//How iterators WORK

//there are the iterable objects: these are types like Array, Set, and Map 
//that can be iterated.

//there is the iterator object itself, which performs the iteration.

//there is the iteration result object that holds 
//the result of each step of the iteration.


//An iterable object is any object with a special iterator method that 
//returns an iterator object.

//An iterator is any object with a next() method 
//that returns an iteration result object.

//And an iteration result object is an object 
//with properties named value and done.


/* To iterate an iterable object, you first call its iterator method 
to get an iterator object. Then, you call the next() method of the iterator 
object repeatedly until the returned value has its done property set to true. */

let iterable = [99];
let iterator = iterable[Symbol.iterator]();
for(let result = iterator.next(); !result.done; result =
iterator.next()) { 
    console.log(result.value)
}


//The iterator object of the built-in iterable datatypes is itself iterable.

let list = [1,2,3,4,5];
let iter = list[Symbol.iterator]();
let head= iter.next().value;
let tail=[...iter];


//12.2 Implementing Iterable Objects

/* In order to make a class iterable, you must implement a method whose
name is the Symbol Symbol.iterator. That method must return
an iterator object that has a next() method. And the next() method
must return an iteration result object that has a value property and/or
a boolean done property. */ 

/* Example 12-1 implements an iterable Range class and demonstrates how to 
create iterable, iterator, and iteration result objects. */ 

//Example 12-1. An iterable numeric Range class 
/** A Range object represents a range of numbers {x: from <= x <= to}
* Range defines a has() method for testing whether a given
number is a member
* of the range. Range is iterable and iterates all integers
within the range. */
class Range {
    constructor (from, to) {
        this.from = from;
        this.to = to;
    }

    // Make a Range act like a Set of numbers
    has(x) { return typeof x === "number" && this.from <= x &&
x <= this.to; }
    // Return string representation of the range using set notation
    toString() { return `{ x | ${this.from} ≤ x ≤ ${this.to}
}`; }
    // Make a Range iterable by returning an iterator object.
    // Note that the name of this method is a special symbol not a string.
    [Symbol.iterator]() {
    // Each iterator instance must iterate the range independently of
    // others. So we need a state variable to track our location in the
    // iteration. We start at the first integer >= from.
        let next = Math.ceil(this.from); // This is the next value we return
        let last = this.to; // We won't return anything > this
        return { // This is the iterator object
        // This next() method is what makes this an iterator object.
        // It must return an iterator result object.
        next() {
            return (next <= last) // If we haven't returned last value yet
                ? { value: next++ } // return next value and increment it
                : { done: true }; // otherwise indicate that we're done.
            },
    // As a convenience, we make the iterator itself iterable.
            [Symbol.iterator]() { return this; }
        };
    }
}
for(let x of new Range(1,10)) console.log(x); // Logs numbers 1 to 10
[...new Range(-2,2)] // => [-2, -1, 0, 1, 2]