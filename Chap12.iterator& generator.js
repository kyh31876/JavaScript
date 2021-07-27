//summary 


//The for/of loop and the ... spread operator work with iterable objects.

//An object is iterable if it has a method with the symbolic name
//[Symbol.iterator] that returns an iterator object.

//An iterator object has a next() method that returns an iteration result object.

/* An iteration result object has a value property that holds the
next iterated value, if there is one. If the iteration has
completed, then the result object must have a done property
set to true. */


/*  You can implement your own iterable objects by defining a
[Symbol.iterator]() method that returns an object
with a next() method that returns iteration result objects.
You can also implement functions that accept iterator
arguments and return iterator values. */



/* Generator functions (functions defined with function*
instead of function) are another way to define iterators. */ 

 
/* When you invoke a generator function, the body of the
function does not run right away; instead, the return value is
an iterable iterator object. Each time the next() method of
the iterator is called, another chunk of the generator function
runs. */ 


/* Generator functions can use the yield operator to specify the
values that are returned by the iterator. Each call to next()
causes the generator function to run up to the next yield
expression. The value of that yield expression then becomes
the value returned by the iterator. When there are no more
yield expressions, then the generator function returns, and
the iteration is complete. */




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
    has(x) { return typeof x === "number" && this.from <= x && x <= this.to; }
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









/* In addition to making your classes iterable, it can be quite useful to
define functions that return iterable values. Consider these iterablebased
alternatives to the map() and filter() methods of JavaScript arrays: */ 

// Return an iterable object that iterates the result of applying f()
// to each value from the source iterable
function map(iterable, f) {
    let iterator = iterable[Symbol.iterator]();
    return { // This object is both iterator and iterable
        [Symbol.iterator]() { return this; },
        next() {
            let v = iterator.next();
            if (v.done) {
                return v;
            } else {
                return { value: f(v.value) };
            }
        }
    };
}
// Map a range of integers to their squares and convert to an array
[...map(new Range(1,4), x => x*x)] // => [1, 4, 9, 16]

// Return an iterable object that filters the specified iterable,
// iterating only those elements for which the predicate returns true
function filter(iterable, predicate) {
    let iterator = iterable[Symbol.iterator]();
    return { // This object is both iterator and iterable
        [Symbol.iterator]() { return this; },
        next() {
            for(;;) {
                let v = iterator.next();
                if (v.done || predicate(v.value)) {
                    return v;
                }
            }
        }
    };
}
// Filter a range so we're left with only even numbers
[...filter(new Range(1,10), x => x % 2 === 0)] // => [2,4,6,8,10]


//when computation is required to compute the next value, 
//that computation can be deferred until the value is actually needed.

//for example, that you have a very long string of text
//that you want to tokenize into space-separated words. You could
//simply use the split() method of your string, but if you do this,
//then the entire string has to be processed before you can use even the
//first word.


function words(s) {
    var r = /\s+|$/g; // Match one or more spaces or end
    r.lastIndex = s.match(/[^ ]/).index; // Start matching at first nonspace
    return { // Return an iterable iterator object
        [Symbol.iterator]() { // This makes us iterable
            return this;
        },
        next() { // This makes us an iterator
        let start = r.lastIndex; // Resume where the last match ended
        if (start < s.length) { // If we're not done
            let match = r.exec(s); // Match the next word boundary
            if (match) { // If we found one, return the word
                return { value: s.substring(start,
match.index) };
                }
            }
            return { done: true }; // Otherwise, say that we're done
        }
    };
}
[...words(" abc def ghi! ")] // => ["abc", "def", "ghi!"]



//12.3 Generators

//it’s particularly useful when the values to be iterated are not the
//elements of a data structure, but the result of a computation.

/* To create a generator, you must first define a generator function. A
generator function is syntactically like a regular JavaScript function but
is defined with the keyword "function*" rather than "function".*/ 


//When you invoke a generator function, it does not actually execute 
//the function body, but instead returns a generator object.



// A generator function that yields the set of one digit (base-10) primes.
function* oneDigitPrimes() { // Invoking this function does not run the code
    yield 2; // but just returns a generator object. Calling
    yield 3; // the next() method of that generator runs
    yield 5; // the code until a yield statement provides
    yield 7; // the return value for the next() method.
}
// When we invoke the generator function, we get a generator
let primes = oneDigitPrimes();

// A generator is an iterator object that iterates the yielded values
primes.next().value // => 2
primes.next().value // => 3
primes.next().value // => 5
primes.next().value // => 7
primes.next().done // => true

// Generators have a Symbol.iterator method to make them iterable
primes[Symbol.iterator]() // => primes
// We can use generators like other iterable types
[...oneDigitPrimes()] // => [2,3,5,7]
let sum = 0;
for(let prime of oneDigitPrimes()) sum += prime;

/*This generator object is an iterator.
Calling its next() method causes the body of the generator function
to run from the start (or whatever its current position is) until it reaches
a yield statement. 
The value of the yield statement becomes the
value returned by the next() call on the iterator.*/




//we used a function* statement to define a generator.
const seq = function*(from,to) {
    for(let i = from; i <= to; i++) yield i;
};
[...seq(3,5)] // => [3, 4, 5]



/* In classes and object literals, we can use shorthand notation to omit the
function keyword entirely when we define methods. To define a
generator in this context, we simply use an * before the method
name where the function keyword would have been, had we used it: */

let o = {
    x: 1, y: 2, z: 3,
    // A generator that yields each of the keys of thisobject
    *g() {
        for(let key of Object.keys(this)) {
            yield key;
        }
    }
};
[...o.g()] // => ["x", "y", "z", "g"]
//Note that there is no way to write a generator function using arrow
//function syntax.

//Generators often make it particularly easy to define iterable classes.

//We can replace the [Symbol.iterator]() method show in Example 12-1 
//with a much shorter * [Symbol.iterator&rbrack;() generator function that looks
//like this:

*[Symbol.iterator](){
    for(let x = Math.cil(this.from); x <= this.to; x++)
yeild x;
}



//12.3.1 Generator Examples

//for example, is a generator function that yields Fibonacci numbers:
function* fibonacciSequence() {
    let x = 0, y = 1;
    for(;;) {
        yield y;
    [x, y] = [y, x+y]; // Note: destructuring assignment
    }
}
//Note that the fibonacciSequence() generator function here has
//an infinite loop and yields values forever without returning.

//If this generator is used with the ... spread operator, it will loop until
//memory is exhausted and the program crashes.


//With care, it is possible to use it in a "for/of" loop, howerver:
// Return the nth Fibonacci number
function fibonacci(n) {
    for(let f of fibonacciSequence()) {
        if (n-- <= 0) return f;
    }
}
fibonacci(20) // => 10946



//This kind of infinite generator becomes more useful with a take()
//generator like this:

// Yield the first n elements of the specified iterable object
function* take(n, iterable) {
    let it = iterable[Symbol.iterator](); // Get iterator for iterable object
        while(n-- > 0) { // Loop n times:
            let next = it.next(); // Get the next item from the iterator.
            if (next.done) return; // If there are no more values, return early
            else yield next.value; // otherwise, yield the value
    }
}
// An array of the first 5 Fibonacci numbers
[...take(5, fibonacciSequence())] // => [1, 1, 2, 3, 5]


//Here is another useful generator function that interleaves the elements
//of multiple iterable objects:

// Given an array of iterables, yield their elements in interleaved order.
function* zip(...iterables) {
// Get an iterator for each iterable
    let iterators = iterables.map(i => i[Symbol.iterator]());
    let index = 0;
    while(iterators.length > 0) { // While there are still some iterators
        if (index >= iterators.length) { // If we reached the last iterator
            index = 0; // go back to the first one.
        }
        let item = iterators[index].next(); // Get next item from next iterator.
            if (item.done) { // If that iterator is done
                iterators.splice(index, 1); // then remove it from the array.
            }
        else { // Otherwise,
            yield item.value; // yield the iterated value
            index++; // and move on to the next iterator.
        }
    }
}
// Interleave three iterable objects
[...zip(oneDigitPrimes(),"ab",[0])] // =>
[2,"a",0,3,"b",5,7]



//12.3.2 yield* and Recursive Generators

/*In addition to the zip() generator defined in the preceding example,
it might be useful to have a similar generator function that yields the
elements of multiple iterable objects sequentially rather than
interleaving them. */ 

function* sequence(...iterables){
    for(let iterable of iterables){
        for(let item of iterable){
            yield item;
        }
    }
}

[...sequence("abc",oneDigitPrimes())] // => ["a","b","c",2,3,5,7]



//The yield* keyword is like yield except that, rather than
//yielding a single value, it iterates an iterable object and yields each of
//the resulting values.

//The sequence() generator function that we’ve used can be simplified with yield* 
//like this:

function* sequence(...iterables) { 
    for(let iterable of iterables){
        yeild* iterable;
    }
}
[...sequence("abc",oneDigitPrimes())] // => ["a","b","c",2,3,5,7]


//The array forEach() method is often an elegant way to loop over
//the elements of an array, so you might be tempted to write the
//sequence() function like this:


function* sequence(...iterables){
    iterables.forEach(iterable => yeild* iterable); // Error
}
//yield and yield* can only be used within generator functions, but
//the nested arrow function in this code is a regular function 
//so yield is not allowed.

//This means that yield* allows us to define recursive generators, 
//and you might use this feature to allow simple non-recursive iteration 
//over a recursively defined tree structure,




//12.4.1 The Return Value of a Generator Function

//The generator functions we’ve seen so far have not had return statement,

//Like any function, though, a generator function can return a value.

//The return value of the next() function is an object that 
//has a value property and/or a done property.


function *oneAndDone() {
    yield 1;
    return "done";
}
// The return value does not appear in normal iteration.
[...oneAndDone()] // => [1]
// But it is available if you explicitly call next()
let generator = oneAndDone();
generator.next() // => { value: 1, done: false}
generator.next() // => { value: "done", done: true
} // If the generator is already done, the return value is not returned again
generator.next() // => { value: undefined, done: true }

//With typical iterators and generators, if the value property
//is defined, then the done property is undefined or is false. And if
//done is true, then value is undefined.

// But in the case of a generator that returns a value, 
//the final call to "next" returns an object that has both "value" and "done" defined.

/*The "value" property holds the return value of the generator function, 
and the "done" property is true, 
indicating that there are no more values to iterate. */

/*  This final value is ignored by the for/of loop and by the spread operator, 
but it is available to code that manually iterates with explicit calls to next(): 
*/






//12.4.2 The Value of a yield Expression


/* The generator and caller are two separate streams of
execution passing values (and control) back and forth. The following
code illustrates: */ 
function* smallNumbers() {
    console.log("next() invoked the first time; argument discarded");
    let y1 = yield 1; // y1 == "b"
    console.log("next() invoked a second time with argument",
y1);
    let y2 = yield 2; // y2 == "c"
    console.log("next() invoked a third time with argument",
y2);
    let y3 = yield 3; // y3 == "d"
    console.log("next() invoked a fourth time with argument",
y3);
    return 4;
    }
let g = smallNumbers();
console.log("generator created; no code runs yet");
let n1 = g.next("a"); // n1.value == 1
console.log("generator yielded", n1.value);
let n2 = g.next("b"); // n2.value == 2
console.log("generator yielded", n2.value);
let n3 = g.next("c"); // n3.value == 3
console.log("generator yielded", n3.value);
let n4 = g.next("d"); // n4 == { value: 4, done: true }
console.log("generator returned", n4.value);

//When the next() method of a generator is invoked, the generator
//function runs until it reaches a yield expression.

//the expression that folllows the "yeild" keyword is evaluatedm and that value 
//become the return value of the next() invocation. 

//At this point, the generator function stops executing right in the middle 
//of evaluating the yield expression.

//The next time the next() method of the generator is called,
//the argument passed to next() becomes the value of the 
//yield expression that was paused.




//When this code runs, it produces the following output that
//demonstrates the back-and-forth between the two blocks of code:

/*generator created; no code runs yet
next() invoked the first time; argument discarded
generator yielded 1
next() invoked a second time with argument b
generator yielded 2
next() invoked a third time with argument c
generator yielded 3
next() invoked a fourth time with argument d
generator returned 4 */

// The first invocation of next() starts the generator,
//but the value passed to that invocation is not accessible to the generator 



//12.4.4 A Final Note About Generators 

//They give us the ability to pause a computation with yield and 
//restart it again at some arbitrary later time with an arbitrary input value.


