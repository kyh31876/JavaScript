//9.1 Classes and Prototypes

//a class is a set of objects that inherit properties from the 
//same prototype object.

//Classes are a template for creating objects. 


// This is a factory function that returns a new range object.
function range(from, to) {
    // Use Object.create() to create an object that inherits from the
    // prototype object defined below. The prototype object is stored as
    // a property of this function, and defines the shared methods (behavior)
    // for all range objects.
    let r = Object.create(range.methods);
    // Store the start and end points (state) of this new range object.
    // These are noninherited properties that are unique to this object.
    r.from = from;
    r.to = to;

    // Finally return the new object
    return r;
}
    // This prototype object defines methods inherited by all range objects.
range.methods = {
    // Return tru`e if x is in the range, false otherwise
    // This method works for textual and Date ranges as well as numeric.
    includes(x) { return this.from <= x && x <= this.to; },
    // A generator function that makes instances of the class iterable.
    // Note that it only works for numeric ranges.
    *[Symbol.iterator]() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) 
yield x;
    },
    // Return a string representation of the range
    toString() { return "(" + this.from + "..." + this.to +
")"; }
};

// Here are example uses of a range object.
let r = range(1,3); // Create a range object
r.includes(2) // => true: 2 is in the range
r.toString() // => "(1...3)"
[...r] // => [1, 2, 3]; convert to an array via iterator



//9.2 Classes and Constructors


//A constructor is a function designed for the
// initialization of newly created objects.

//The constructor method is a special method of a class
//for creating and initializing an object of that class.

//it is function objects that have a prototype property. 
//This means that all objects created with the same constructor function 
//inherit from the same object and are therefore members of the same class.


//Example 9-2. A Range class using a constructor

// This is a constructor function that initializes new Range objects.
// Note that it does not create or return the object. It just initializes this.
function Range(from, to) {
// Store the start and end points (state) of this new range object.
// These are noninherited properties that are unique to this object.
    this.from = from;
    this.to = to;
}
// All Range objects inherit from this object.
// Note that the property name must be "prototype" for this to work.
Range.prototype = {
// Return true if x is in the range, false otherwise
// This method works for textual and Date ranges as well as numeric.
    includes: function(x) { return this.from <= x && x <= 
this.to; },
// A generator function that makes instances of the class iterable.
// Note that it only works for numeric ranges.
    [Symbol.iterator]: function*() {
        for(let x = Math.ceil(this.from); x <= this.to; x++)
yield x;
    },

    // Return a string representation of the range
    toString: function() { return "(" + this.from + "..." +
this.to + ")"; }
};

// Here are example uses of this new Range class
let r = new Range(1,3); // Create a Range object; note the use of new
r.includes(2) // => true: 2 is in the range
r.toString() // => "(1...3)"
[...r] // => [1, 2, 3]; convert to an array via iterator

//we renamed the range() factory function to Range() 
//when we converted it to a constructor. 

//constructor functions define, in a sense, classes 
//have names that (by convention) begin with capital letters.

//while Regular functions and methods have names that begin with lowercase
//letters.

//The new object is automatically created before the constructor is called,
//and it is accessible as the "this" value.


//CONSTRUCTORS AND NEW.TARGET

//If the value of that expression is defined, then you know that the
//function was invoked as a constructor, with the new keyword

function C() {
    if (!new.target) return new C();
    // initialization code goes here
}



//9.2.1 Constructors, Class Identity, and instanceof

//two constructor functions may have prototype properties that point to the same
//prototype object.

//If we have an object r and want to know if it is a Range object

r instanceof Range // => true: r inherits from Range.prototype
//it is checking whether r inherits from Range.prototype.


function Strange() {}
Strange.prototype = Range.prototype;
new Strange() instanceof Range // => true


//If you want to test the prototype chain of an object for a specific
//prototype and do not want to use the constructor function as an intermediary,

range.methods.isPrototypeOf(r); // range.methods is the prototype object.



//9.2.2 The constructor Property

//Any regular JavaScript function (excluding arrow functions, 
//generator functions, and async functions) can be used as a constructor

//constructor invocations need a prototype property.

//The value of the constructor property is the function object:
let F = function() {}; // This is a function object.
let p = F.prototype; // This is the prototype object associated with F.
let c = p.constructor; // This is the function associated with the prototype.
c === F // => true: F.prototype.constructor === F for any F

let o = new F(); // Create an object o of class F
o.constructor === F // => true: the constructor property specifies the class




//9.3 Classes with the class Keyword

//Example 9-3. The Range class rewritten using class

class Range {
    constructor(from, to) {
    // Store the start and end points (state) of this new range object.
    // These are noninherited properties that are unique to this object.
    this.from = from;
    this.to = to;
    }
    // Return true if x is in the range, false otherwise
    // This method works for textual and Date ranges as well as numeric.
    includes(x) { return this.from <= x && x <= this.to; }
    // A generator function that makes instances of the class iterable.
    // Note that it only works for numeric ranges.
    *[Symbol.iterator]() {
        for(let x = Math.ceil(this.from); x <= this.to; x++)
yield x;
    }
    // Return a string representation of the range
    toString() { return `(${this.from}...${this.to})`; }
}
// Here are example uses of this new Range class
let r = new Range(1,3); // Create a Range object
r.includes(2) // => true: 2 is in the range
r.toString() // => "(1...3)"
[...r] // => [1, 2, 3]; convert to an array via iterator



//The class is declared with the class keyword, which is
//followed by the name of class and a class body in curly braces.

//The keyword constructor is used to define the constructor 
//function for the class.

//The class declaration statement defines a new variable Range 
//and assigns the value of this special constructor function to that variable.

// A Span is like a Range, but instead of initializing it with
// a start and an end, we initialize it with a start and a length
class Span extends Range {
    constructor(start, length) {
        if (length >= 0) {
            super(start, start + length);
        } else {
            super(start + length, start);
        }
    }
}


//Like function declarations, class declarations have both statement and
//expression forms.
let square = function(x) { return x * x; };
square(3) // => 9

//we can also write:
let Square = class { constructor(x) { this.area = x * x; } };
new Square(3).area // => 9



//9.3.1 Static Methods

//Static methods are defined as properties of the constructor function 
//rather than properties of the prototype object

class Range {
    constructor(from, to) {
    // Store the start and end points (state) of this new range object.
    // These are noninherited properties that are unique to this object.
    this.from = from;
    this.to = to;
    }
    // Return true if x is in the range, false otherwise
    // This method works for textual and Date ranges as well as numeric.
    includes(x) { return this.from <= x && x <= this.to; }
    // A generator function that makes instances of the class iterable.
    // Note that it only works for numeric ranges.
    *[Symbol.iterator]() {
        for(let x = Math.ceil(this.from); x <= this.to; x++)
yield x;
    }
    // Return a string representation of the range
    toString() { return `(${this.from}...${this.to})`; }
    
    //suppose we added the following code to Example 9-3:
    static parse(s) {
        let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
        if (!matches) {
            throw new TypeError(`Cannot parse Range from
    "${s}".`)
        }
        return new Range(parseInt(matches[1]),parseInt(matches[2]));
}
}


//9.3.2 Getters, Setters, and other Method Forms

//Within a class body, you can define getter and setter methods
//just as you can in object literals.

//all of the shorthand method definition syntaxes allowed in
//object literals are also allowed in class bodies.



//9.3.3 Public, Private, and Static Fields


//Example 9-4. Complex.js: a complex number class
/**
* Instances of this Complex class represent complex numbers.
* Recall that a complex number is the sum of a real number and an
* imaginary number and that the imaginary number i is the square root of -1.
*/
class Complex {
// Once class field declarations are standardized, we could declare
// private fields to hold the real and imaginary parts of a complex number
// here, with code like this:
    //
    // #r = 0;
    // #i = 0;
    // This constructor function defines the instance fields r and i on every
    // instance it creates. These fields hold the real and imaginary parts of
    // the complex number: they are the state of the object.
    constructor(real, imaginary) {
        this.r = real; // This field holds the real part of the number.
        this.i = imaginary; // This field holds the imaginary part.
    }
    // Here are two instance methods for addition and multiplication
    // of complex numbers. If c and d are instances of this class, we
    // might write c.plus(d) or d.times(c)
{
        return new Complex(this.r + that.r, this.i + that.i);
    }
    times(that) {
        return new Complex(this.r * that.r - this.i * that.i,
            this.r * that.i + this.i * that.r);
    }
    // And here are static variants of the complex arithmetic methods.
    // We could write Complex.sum(c,d) and Complex.product(c,d)
    static sum(c, d) { return c.plus(d); }
    static product(c, d) { return c.times(d); }

    // These are some instance methods that are defined as getters
    // so they're used like fields. The real and imaginary getters would
    // be useful if we were using private fields this.#r and this.#i
    get real() { return this.r; }
    get imaginary() { return this.i; }
    get magnitude() { return Math.hypot(this.r, this.i); }
    // Classes should almost always have a toString() method
    toString() { return `{${this.r},${this.i}}`; }
    // It is often useful to define a method for testing whether
    // two instances of your class represent the same value
    equals(that) {
        return that instanceof Complex &&
        this.r === that.r &&
        this.i === that.i;
    }
// Once static fields are supported inside class bodies, we could
// define a useful Complex.ZERO constant like this:
// static ZERO = new Complex(0,0);
}


let c = new Complex(2, 3); // Create a new object with the constructor
let d = new Complex(c.i, c.r); // Use instance fields of c
c.plus(d).toString() // => "{5,5}"; use instance methods
c.magnitude // => Math.hypot(2,3); use a getter function
Complex.product(c, d) // => new Complex(0, 13); a static method
Complex.ZERO.toString() // => "{0,0}"; a static property


//9.4 Adding Methods to Existing Classes

//an object inherits properties from its prototype, 
//even if the properties of the prototype change after the object is created.


// Invoke the function f this many times, passing the iteration number
// For example, to print "hello" 3 times:
// let n = 3;
// n.times(i => { console.log(`hello ${i}`); });
Number.prototype.times = function(f, context) {
    let n = this.valueOf();
    for(let i = 0; i < n; i++) f.call(context, i);
};


//9.5 Subclasses


//Instances of B inherit the methods of A,
//We say that A is the superclass and B is the subclass.

// /The class B can define its own methods, 
//some of which may override methods of the same name defined by class A.


//9.5.1 Subclasses and Prototypes

//we’ll specify a start and a distance, or span.
//An instance of this Span class is also an instance of the Range superclass.

//Example 9-5. Span.js: a simple subclass of Range
// This is the constructor function for our subclass
function Span(start, span) {
    if (span >= 0) {
        this.from = start;
        this.to = start + span;
    } else {
        this.to = start;
        this.from = start + span;
    }
}
// Ensure that the Span prototype inherits from the Range prototype
Span.prototype = Object.create(Range.prototype);
// We don't want to inherit Range.prototype.constructor, so we
// define our own constructor property.
Span.prototype.constructor = Span;
// By defining its own toString() method, Span overrides the
// toString() method that it would otherwise inherit from Range.
Span.prototype.toString = function() {
    return `(${this.from}... +${this.to - this.from})`;
};


//key line of code 
Span.prototype = Object.create(Range.prototype);
//Objects created with the Span() constructor will inherit from the
//Span.prototype object. But we created that object to inherit from 
//Range.prototype, so Span objects will inherit from both
//Span.prototype and Range.prototype.


// A trivial Array subclass that adds getters for the first and last elements.
class EZArray extends Array {
    get first() { return this[0]; }
    get last() { return this[this.length-1]; }
}
let a = new EZArray();
a instanceof EZArray // => true: a is subclass instance
a instanceof Array // => true: a is also a superclass instance.
a.push(1,2,3,4); // a.length == 4; we can use inherited methods
a.pop() // => 4: another inherited method
a.first // => 1: first getter defined by subclass
a.last // => 3: last getter defined by subclass
a[1] // => 2: regular array access syntax still works.
Array.isArray(a) // => true: subclass instance really is an array
EZArray.isArray(a) // => true: subclass inherits static methods, too!


//This EZArray subclass defines two simple getter methods.

//Example 9-6. TypedMap.js: a subclass of Map that checks key and value types
class TypedMap extends Map {
    constructor(keyType, valueType, entries) {
    // If entries are specified, check their types
    if (entries) {
        for(let [k, v] of entries) {
            if (typeof k !== keyType || typeof v !==
valueType) {
                    throw new TypeError(`Wrong type for entry
[${k}, ${v}]`);
                }
            }
        }
    // Initialize the superclass with the (type-checked) initial entries
        super(entries);
        // And then initialize this subclass by storing the types
        this.keyType = keyType;
        this.valueType = valueType;
    }
// Now redefine the set() method to add type checking for any
    // new entries added to the map.
    set(key, value) {
        // Throw an error if the key or value are of the wrong type
        if (this.keyType && typeof key !== this.keyType) {
            throw new TypeError(`${key} is not of type
${this.keyType}`);
        }
        if (this.valueType && typeof value !== this.valueType)
{
        throw new TypeError(`${value} is not of type
${this.valueType}`);
        }
        // If the types are correct, we invoke the superclass's version of
        // the set() method, to actually add the entry to the map. And we
        // return whatever the superclass method returns.
        return super.set(key, value);
    }
}

//If you define a class with the extends keyword, then the constructor 
//for your class must use super() to invoke the superclass constructor.

//If you don’t define a constructor in your subclass, one will be
//defined automatically for you.

//The Map superclass defines a method named set() to add a new entry to the map.

//This set() method doesn’t have any way to add the key and value 
//to the map itself, but that is what the superclass set() method is for.




//9.5.3 Delegation Instead of Inheritance


//So instead of subclassing Set, we can create a class that defines a Set-like
//API but implements those methods by delegating to an internal Map object.


//Example 9-7. Histogram.js: a Set-like class implemented with delegation
/**
* A Set-like class that keeps track of how many times a value has
* been added. Call add() and remove() like you would for a Set, and
* call count() to find out how many times a given value has been added.
* The default iterator yields the values that have been added at least
* once. Use entries() if you want to iterate [value, count] pairs.
*/
class Histogram {
// To initialize, we just create a Map object to delegate to
    constructor() { this.map = new Map(); }
    // For any given key, the count is the value in the Map, or zero
    // if the key does not appear in the Map.
    count(key) { return this.map.get(key) || 0; }
    // The Set-like method has() returns true if the count is non-zero
    has(key) { return this.count(key) > 0; }
    // The size of the histogram is just the number of entries in the Map.
    get size() { return this.map.size; }
    // To add a key, just increment its count in the Map.
    add(key) { this.map.set(key, this.count(key) + 1); }
    // Deleting a key is a little trickier because we have to delete
    // the key from the Map if the count goes back down to= zero.
    delete(key) {
        let count = this.count(key);
        if (count === 1) {
            this.map.delete(key);
        } else if (count > 1) {
            this.map.set(key, count - 1);
        }
    }
    // Iterating a Histogram just returns the keys stored in it
    [Symbol.iterator]() { return this.map.keys(); }
    // These other iterator methods just delegate to the Map object
    keys() { return this.map.keys(); }
    values() { return this.map.values(); }
    entries() { return this.map.entries(); }
}

//All the Histogram() constructor does in Example 9-7 is create a Map object.



//9.5.4 Class Hierarchies and Abstract Classes


//Example 9-8. Sets.js: a hierarchy of abstract and concrete set classes
//The A bstractSet class defines a single abstract method,has().
class AbstractSet {
// Throw an error here so that subclasses are forced
// to define their own working version of this method.
    has(x) { throw new Error("Abstract method"); }
}
/**
* NotSet is a concrete subclass of AbstractSet.
* The members of this set are all values that are not members of some
* other set. Because it is defined in terms of another set it is not
* writable, and because it has infinite members, it is not enumerable.
* All we can do with it is test for membership and convert it to a
* string using mathematical notation.
*/
class NotSet extends AbstractSet {
constructor(set) {
    super();
    this.set = set;
    }
// Our implementation of the abstract method we inherited
    has(x) { return !this.set.has(x); }
// And we also override this Object method
    toString() { return `{ x| x ∉ ${this.set.toString()} }`; }
}
/**
* Range set is a concrete subclass of AbstractSet. Its members are
* all values that are between the from and to bounds, inclusive.
* Since its members can be floating point numbers, it is not
* enumerable and does not have a meaningful size.
*/
class RangeSet extends AbstractSet {
    constructor(from, to) {
        super();
        this.from = from;
        this.to = to;
}
    has(x) { return x >= this.from && x <= this.to; }
    toString() { return `{ x| ${this.from} ≤ x ≤ ${this.to} }`;
}
}
/*
* AbstractEnumerableSet is an abstract subclass of
AbstractSet. It defines
* an abstract getter that returns the size of the set and also
defines an
* abstract iterator. And it then implements concrete
isEmpty(), toString(),
* and equals() methods on top of those. Subclasses that
implement the
* iterator, the size getter, and the has() method get these
concrete
* methods for free.
*/
class AbstractEnumerableSet extends AbstractSet {
    get size() { throw new Error("Abstract method"); }
    [Symbol.iterator]() { throw new Error("Abstract method"); }
    isEmpty() { return this.size === 0; }
    toString() { return `{${Array.from(this).join(", ")}}`; }
    equals(set) {
    // If the other set is not also Enumerable, it isn't equal to this one
        if (!(set instanceof AbstractEnumerableSet)) return 
    false;
        // If they don't have the same size, they're not equal
        if (this.size !== set.size) return false;
        // Loop through the elements of this set
        for(let element of this) {
    // If an element isn't in the other set, they aren't equal
            if (!set.has(element)) return false;
        }
// The elements matched, so the sets are equal
        return true;
    }
}
/*
* SingletonSet is a concrete subclass of
AbstractEnumerableSet.
* A singleton set is a read-only set with a single member.
*/
class SingletonSet extends AbstractEnumerableSet {
    constructor(member) {
        super();
        this.member = member;
    }
// We implement these three methods, and inherit isEmpty, equals()
// and toString() implementations based on these methods.
    has(x) { return x === this.member; }
    get size() { return 1; }
    *[Symbol.iterator]() { yield this.member; }
}
/*
* AbstractWritableSet is an abstract subclass of
AbstractEnumerableSet.
* It defines the abstract methods insert() and remove() that
insert and
* remove individual elements from the set, and then implements
concrete
* add(), subtract(), and intersect() methods on top of those.
Note that
* our API diverges here from the standard JavaScript Set
class.
*/
class AbstractWritableSet extends AbstractEnumerableSet {
    insert(x) { throw new Error("Abstract method"); }
    remove(x) { throw new Error("Abstract method"); }
    add(set) {
        for(let element of set) {
            this.insert(element);
        }
    }
    subtract(set) {
        for(let element of set) {
            this.remove(element);
        }
    }
    intersect(set) {
        for(let element of this) {
            if (!set.has(element)) {
                this.remove(element);
            }
        }
    }
}
/**
* A BitSet is a concrete subclass of AbstractWritableSet with a
* very efficient fixed-size set implementation for sets whose
* elements are non-negative integers less than some maximum size.
*/
class BitSet extends AbstractWritableSet {
    constructor(max) {
        super();
        this.max = max; // The maximum integer we can store.
        this.n = 0; // How many integers are in the set
        this.numBytes = Math.floor(max / 8) + 1; // How many bytes we need
        this.data = new Uint8Array(this.numBytes); // The bytes
    }
// Internal method to check if a value is a legal member of this set
    _valid(x) { return Number.isInteger(x) && x >= 0 && x <=
this.max; }
// Tests whether the specified bit of the specified byte of our
// data array is set or not. Returns true or false.
    _has(byte, bit) { return (this.data[byte] &
BitSet.bits[bit]) !== 0; }
// Is the value x in this BitSet?
    has(x) {
        if (this._valid(x)) {
            let byte = Math.floor(x / 8);
            let bit = x % 8;
            return this._has(byte, bit);
        } else {
            return false;
        }
    }
// Insert the value x into the BitSet
    insert(x) {
        if (this._valid(x)) { // If the value is valid
            let byte = Math.floor(x / 8); // convert to byte and bit
            let bit = x % 8;
            if (!this._has(byte, bit)) { // If that bit is not set yet
                this.data[byte] |= BitSet.bits[bit]; // then set it
                this.n++; // and increment set size
            }
        } else {
            throw new TypeError("Invalid set element: " + x );
        }
    }
    remove(x) {
        if (this._valid(x)) { // If the value is valid
            let byte = Math.floor(x / 8); // compute the byte and bit
            let bit = x % 8;
            if (this._has(byte, bit)) { // If that bit is already set
                this.data[byte] &= BitSet.masks[bit]; // then unset it
                this.n--; // and decrement size
            }
        } else {
            throw new TypeError("Invalid set element: " + x );
        }
    }
// A getter to return the size of the set
    get size() { return this.n; }
// Iterate the set by just checking each bit in turn.
// (We could be a lot more clever and optimize this substantially)
    *[Symbol.iterator]() {
        for(let i = 0; i <= this.max; i++) {
            if (this.has(i)) {
                yield i;
            }
        }
    }
}
// Some pre-computed values used by the has(), insert() and remove() methods
BitSet.bits = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);
BitSet.masks = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128]);