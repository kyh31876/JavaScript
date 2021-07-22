//11.1 Sets and Maps

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