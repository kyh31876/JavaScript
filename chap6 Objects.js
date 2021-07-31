//6.1 Introduction to Objects

//it aggregates multiple values (primitivevalues or other objects) 
//and allows you to store and retrieve those values by name.

//An object is an unordered collection of properties,
//each of which has a name and a value.

//JavaScript object also inherits the properties
//of another object, known as its “prototype.”

//A property has a name and a value.

//A property name may be any string, including the empty string (or any Symbol), 
//but no object may have two properties with the same name.

//each property has three property attributes:
    //The writable attribute specifies whether the value of the
    //property can be set.

    //The enumerable attribute specifies whether the property name
    //is returned by a for/in loop.

    //The configurable attribute specifies whether the property can
    //be deleted and whether its attributes can be altered.



//JavaScript Primitives

//A primitive value is a value that has no properties or methods.

//string
//number
//boolean
//null
//undefined

//6.2 Creating Objects

//6.2.1 Object Literals

//an object literal is a commaseparated list of colon-separated name:value pairs,
//enclosed within curly braces.

//A property name is a JavaScript identifier or a string literal
//A property value is any JavaScript expression; 
//the value of the expression becomes the value of the property.

let empty = {}; // An object with no properties
let point = { x: 0, y: 0 }; // Two numeric properties
let p2 = { x: point.x, y: point.y+1 }; // More complex values
let book = {
    "main title": "JavaScript", // These property names include spaces,
    "sub-title": "The Definitive Guide", // and hyphens, so use string literals.
    for: "all audiences", // for is reserved, but no quotes.
    author: { // The value of this property is
    firstname: "David", // itself an object.
    surname: "Flanagan"
    }
};

//An object literal is an expression that creates and initializes a new and
//distinct object each time it is evaluated.




//6.2.2 Creating Objects with new


//The new keyword must be followed by a function invocation.

//A function used in this way is called a constructor 
//and serves to initialize a newly created object.
let o = new Object(); // Create an empty object: same as {}.
let a = new Array(); // Create an empty array: same as [].
let d = new Date(); // Create a Date object representing the current time
let r = new Map(); // Create a Map object for key/value mapping



//6.2.3 Prototypes
//Almost every JavaScript object has a second JavaScript object associated with it.

//This second object is known as a prototype, 
//and the first object inherits properties from the prototype.

//So the object created by new Object() inherits from Object.prototype, 
//just as the object created by {} does.

//Remember: almost all objects have a prototype, but only a relatively 
//small number of objects have a prototype property.


//Object.prototype is one of the rare objects that has no prototype:

//6.2.4 Object.create()
//The Object.create() method creates a new object,
//using an existing object as the prototype of the newly created object.
Object.create(proto)
Object.create(proto, propertiesObject)


let o1 = Object.create({x: 1, y: 2}); // o1 inherits properties x and y.
o1.x + o1.y // => 3

//You can pass null to create a new object that does not have a prototype,
//but if you do this, the newly created object will not inherit anything,

let o2 = Object.create(null); // o2 inherits no props or methods.

//If you want to create an ordinary empty object, pass Object.prototype:
let o3 = Object.create(Object.prototype); // o3 is like {} or new Object().



//Instead of passing the object directly to the function,
//you can pass an object that inherits from it. 

//If the function reads properties of that object, it will see the inherited values.
let o = { x: "don't change this value" };
library.function(Object.create(o)); // Guard against accidental modifications




//6.3 Querying and Setting Properties

//If using the dot operator, 
//the righthand side must be a simple identifier that names the property.

//If using square brackets, the value within the brackets must be an
//expression that evaluates to a string that contains the desired property name:

let author = book.author; // Get the "author" property of the book.
let name = author.surname; // Get the "surname" property of the author.
let title = book["main title"]; // Get the "main title" property of the book.


book.edition = 7; // Create an "edition" property of book.
book["main title"] = "ECMAScript"; // Change the "main title" property.

//When using square bracket notation, we’ve said that the expression
//inside the square brackets must evaluate to a string.


//6.3.1 Objects As Associative Arrays

//the following two JavaScript expressions have the same value:
object.property
object["property"]

//When you use the . operator to access a property of an object,
//h4owever, the name of the property is expressed as an identifier.


//hand, when you access a property of an object with the [] array notation, 
//the name of the property is expressed as a string.

let addr = "";
for(let i = 0; i < 4; i++) {
    addr += customer[`address${i}`] + "\n";
}
//This code reads and concatenates the address0, address1,
//address2, and address3 properties of the customer object.




//Part of this program might be a function for adding a new stock to the portfolio:
function addstock(portfolio, stockname, shares) {
    portfolio[stockname] = shares;
}

//Since you can’t know the property names when you write the program, 
//there is no way you can use the . operator to access the properties of the portfolio object.

//You can use the [] operator, however, because it uses a string value





//Here is how you would use it when computing the total value of a portfolio:
function computeValue(portfolio) {
    let total = 0.0;
    for(let stock in portfolio) { // For each stock in the portfolio:
        let shares = portfolio[stock]; // get the number of `shares
        let price = getQuote(stock); // look up share price
        total += shares * price; // add stock value to total value
    }
    return total; // Return total value.
}

//6.3.2 Inheritance
//that every time you create an instance of a class with new, 
//you are creating an object that inherits properties from a prototype object.

//If o does not have an own property with that name, 
//the prototype object of o is queried for the property x.

//This continues until the property x is found
// or until an object with a null prototype is searched.

//the prototype attribute of an object creates a chain or linked list
//from which properties are inherited:

let o = {}; // o inherits object methods from Object.prototype
o.x = 1; // and it now has an own property x.
let p = Object.create(o); // p inherits properties from o and Object.prototype
p.y = 2; // and has an own property y.
let q = Object.create(p); // q inherits properties from p, o, and...
q.z = 3; // ...Object.prototype and has an own property z.
let f = q.toString(); // toString is inherited from Object.prototype
q.x + q.y // => 3; x and y are inherited from o and p 1


let unitcircle = { r: 1 }; // An object to inherit from
let c = Object.create(unitcircle); // c inherits the property r
c.x = 1; c.y = 1; // c defines two properties of its own
c.r = 2; // c overrides its inherited property
unitcircle.r // => 1: the prototype is not affected

//There is one exception to the rule that a property assignment either
//fails or creates or sets a property in the original object.


//6.3.3 Property Access Errors

//If the property x is not found as an own property or an inherited property of o, 
//the property access expression o.x evaluates to undefined. 
//Recall that our book object has a “sub-title” property, but not a “subtitle” property:

book.subtitle // => undefined: property doesn't exist

let len = book.subtitle.length; // !TypeError: undefined doesn't have length
//Property access expressions will fail if the lefthand side of the . is null or undefined.

// A verbose and explicit technique
let surname = undefined;
if (book) {
    if (book.author) {
        surname = book.author.surname;
    }
}
// A concise and idiomatic alternative to get surname or null or undefined
surname = book && book.author && book.author.surname;

let surname = book?.author?.surname;
//?., which allows us to rewrite the previous assignment expression as:


//An attempt to set a property p of an object o fails in these circumstances:

//o has an own property p that is read-only: it is not possible to
//set read-only properties.

//o has an inherited property p that is read-only: 
//it is not possible to hide an inherited read-only property with an own
//property of the same name.



//6.4 Deleting Properties
delete book.author; // The book object now has no author property.
delete book["main title"]; // Now it doesn't have "main title", either.


//The delete operator only deletes own properties

// /A delete expression evaluates to true if the delete succeeded or 
//if the delete had no effect

let o = {x: 1}; // o has own property x and inherits property toString
delete o.x // => true: deletes property x
delete o.x // => true: does nothing (x doesn't exist) but true anyway
delete o.toString // => true: does nothing (toString isn't an own property)
delete 1 // => true: nonsense, but true anyway

//delete does not remove properties that have a configurable attribute of false.

//Certain properties of built-in objects are non-configurable,
//as are properties of the global object created by variable declaration 
//and function declaration.

// In strict mode, all these deletions throw TypeError instead of returning false
delete Object.prototype // => false: property is nonconfigurable
var x = 1; // Declare a global variable
delete globalThis.x // => false: can't delete this property
function f() {} // Declare a global function
delete globalThis.f // => false: can't delete this property either

//When deleting configurable properties of the global object in non-strict mode
globalThis.x = 1; // Create a configurable global property (no let or var)
delete x // => true: this property can be deleted



//In strict mode, however, delete raises a SyntaxError if its operand is
//an unqualified identifier like x,

delete x; // SyntaxError in strict mode
delete globalThis.x; // This works




//6.5 Testing Properties
//JavaScript objects can be thought of as sets of properties, 
//and it is often useful to be able to test for membership in the set

//The in operator expects a property name on its left side and an object
//on its right.

let o = { x: 1 };
"x" in o // => true: o has an own property "x"
"y" in o // => false: o doesn't have a property "y"
"toString" in o // => true: o inherits a toString property

//The hasOwnProperty() method of an object tests,
//It returns false for inherited properties:

let o = { x: 1 };
o.hasOwnProperty("x") // => true: o has an own property x
o.hasOwnProperty("y") // => false: o doesn't have a property y
o.hasOwnProperty("toString") // => false: toString is an inherited property



let o = { x: 1 };
o.propertyIsEnumerable("x") // => true: o has an own enumerable property x
o.propertyIsEnumerable("toString") // => false: not an own property
Object.prototype.propertyIsEnumerable("toString") // => false: not enumerable
//It returns true only if the named property is an own 
//property and its enumerable attribute is true.
//Certain built-in properties are not enumerable.



//Instead of using the in operator
let o = { x: 1 };
o.x !== undefined // => true: o has a property x
o.y !== undefined // => false: o doesn't have a property y
o.toString !== undefined // => true: o inherits a toString property


//in can distinguish between properties that do not exist 
//and properties that exist but have been set to undefined.
let o = { x: undefined }; // Property is explicitly set to undefined
o.x !== undefined // => false: property exists but is undefined
o.y !== undefined // => false: property doesn't even exist
"x" in o // => true: the property exists
"y" in o // => false: the property doesn't exist
delete o.x; // Delete the property x
"x" in o // => false: it doesn't exist anymore


//6.6 Enumerating Properties

let o = {x: 1, y: 2, z: 3}; // Three enumerable own properties
o.propertyIsEnumerable("toString") // => false: not enumerable
for(let p in o) { // Loop through theproperties
    console.log(p); // Prints x, y, and z, but not toString
}



//To guard against enumerating inherited properties with for/in, 
//you can add an explicit check inside the loop body:

for(let p in o) {
    if (!o.hasOwnProperty(p)) continue; // Skip inherited properties
    }
for(let p in o) {
    if (typeof o[p] === "function") continue; // Skip all methods
    }


//There are four functions you can use to get an array of property names:
    //Object.keys() returns an array of the names 
    //of the enumerable own properties of an object. 

    //Object.getOwnPropertyNames() works like
    //Object.keys() but returns an array of the names of nonenumerable
    //own properties as well, as long as their names are strings.

    //Object.getOwnPropertySymbols() returns own
    //properties whose names are Symbols, whether or not they are enumerable.


    //Reflect.ownKeys() returns all own property names, both
    //enumerable and non-enumerable, and both string and Symbol.



//6.7 Extending Objects

//A common operation in JavaScript programs is needing to copy the
//properties of one object to another object.

let target = {x: 1}, source = {y: 2, z: 3};
for(let key of Object.keys(source)) {
    target[key] = source[key];
}
target // => {x: 1, y: 2, z: 3}

//Object.assign() expects two or more objects as its arguments.
//It modifies and returns the first argument, which is the target object,
//but does not alter the second or any subsequent arguments, which are the
//source objects.


//Object.assign() copies properties with ordinary property 
//get and set operations,

Object.assign(o, defaults); // overwrites everything in o with defaults

//what you can do is to create a new object, copy the defaultsinto it, 
//and then override those defaults with the properties in o:

o = Object.assign({}, defaults, o);
// Like Object.assign() but doesn't override existing properties
// (and also doesn't handle Symbol properties)
function merge(target, ...sources) {
    for(let source of sources) {
        for(let key of Object.keys(source)) {
            if (!(key in target)) { // This is different than Object.assign()
                target[key] = source[key];
            }
        }
    }
    return target;
}
Object.assign({x: 1}, {x: 2, y: 2}, {y: 3, z: 4}) // => {x:2, y: 3, z: 4}
merge({x: 1}, {x: 2, y: 2}, {y: 3, z: 4}) // => {x: 1, y: 2, z: 4}



//6.8 Serializing Objects
//Object serialization is the process of converting an object’s state to a
//string from which it can later be restored.


let o = {x: 1, y: {z: [false, null, ""]}}; // Define a test object
let s = JSON.stringify(o); // s == '{"x":1,"y":{"z":[false,null,""]}}'
let p = JSON.parse(s); // p == {x: 1, y: {z: [false, null, ""]}}


//JSON syntax is a subset of JavaScript syntax, and it cannot represent
//all JavaScript values. Objects, arrays, strings, finite numbers, true,
///false, and null are supported and can be serialized and restored.

//If a property value cannot be serialized, 
//that property is simply omitted from the stringified output.



//6.9 Object Methods

//all JavaScript objects (except those explicitly
//created without a prototype) inherit properties from Object.prototype.

//These inherited properties are primarily methods, 
//and because they are universally available,

//6.9.1 The toString() Method

//The toString() method takes no arguments;
//the following line of code simply evaluates to the string “[object Object]”:
let s = { x: 1, y: 1 }.toString(); // s == "[object Object]"


//when an array is converted to a string, you obtain a list of the
//array elements, themselves each converted to a string, and when a
//function is converted to a string,you obtain the source code for the function.

let point = {
    x: 1,
    y: 2,
    toString: function() { return `(${this.x}, ${this.y})`; }
    };
String(point) // => "(1, 2)": toString() is used for string conversions



//6.9.2 The toLocaleString() Method

//In addition to the basic toString() method, objects all have a
//toLocaleString().


//The purpose of this method is to return a localized 
//string representation of the object.



//The Date and Number classes define customized versions of
//toLocaleString() that attempt to format numbers, dates, and
//times according to local conventions.


let point = {
    x: 1000,
    y: 2000,
    toString: function() { return `(${this.x}, ${this.y})`;
},
    toLocaleString: function() {
        return `(${this.x.toLocaleString()},
${this.y.toLocaleString()})`;
    }
};
point.toString() // => "(1000, 2000)"
point.toLocaleString() // => "(1,000, 2,000)": note thousands separators


//6.9.3 The valueOf() Method

//it is called when JavaScript needs to convert an object to some
//primitive type other than a string—typically, a number.

//JavaScript calls this method automatically 
//if an object is used in a context where a primitive value is required.


let point = {
    x: 3,
    y: 4,
    valueOf: function() { return Math.hypot(this.x, this.y);
}
};
Number(point) // => 5: valueOf() is used for conversions to numbers
point > 4 // => true
point > 5 // => false 


//6.9.4 The toJSON() Method

let point = {
    x: 1,
    y: 2,
    toString: function() { return `(${this.x}, ${this.y})`;
},
    toJSON: function() { return this.toString(); }
};
JSON.stringify([point]) // => '["(1, 2)"]'



//6.10 Extended Object Literal Syntax

//6.10.1 Shorthand Properties



//With basic object literal syntax, 
//you’d end up repeating each identifier twice:
let x = 1, y = 2;
let o = {
    x: x,
    y: y
};

//In ES6 and later,
let x = 1, y = 2;
let o = { x, y };
o.x + o.y // => 3


//6.10.2 Computed Property Names

//the name of that property is not a compile-time constant that you can
//type literally in your source code.


//You can’t use a basic object literal for this kind of property.
//Instead, you have to create an object and then add the desired
//properties as an extra step:

const PROPERTY_NAME = "p1";
function computePropertyName() { return "p" + 2; }

let o = {};
o[PROPERTY_NAME] = 1;
o[computePropertyName()] = 2;

//It is much simpler to set up an object like this with an ES6 feature
//known as computed properties

const PROPERTY_NAME = "p1";
function computePropertyName() { return "p" + 2; }

let p = {
    [PROPERTY_NAME]: 1,
    [computePropertyName()]: 2
};

p.p1 + p.p2 // => 3
c

//6.10.3 Symbols as Property Names

//If you assign a symbol to a variable or constant, then you can
//use that symbol as a property name using the computed property syntax:

const extension = Symbol("my extension symbol");
let o = {
    [extension]: { /* extension data stored in this object */
}
};
o[extension].x = 0; // This won't conflict with other properties of o





//6.10.4 Spread Operator

//you can copy the properties of an existing object into 
//a new object using the “spread operator” ... inside an object literal:

let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };
let rect = { ...position, ...dimensions };
rect.x + rect.y + rect.width + rect.height // => 175



//the properties of the position and dimensions objects 
//are “spread out” into the rect object literal as if they had been
//written literally inside those curly braces.


let o = { x: 1 };
let p = { x: 0, ...o };
p.x // => 1: the value from object o overrides the initial value
let q = { ...o, x: 2 };
q.x // => 2: the value 2 overrides the previous value from o.



//the spread operator only spreads the own properties of
//an object, not any inherited ones:
let o = Object.create({x: 1}); // o inherits the property x
let p = { ...o };
p.x // => undefined


//6.10.5 Shorthand Methods

//When a function is defined as a property of an object, we call that
//function a method.

let square = {
    area() { return this.side * this.side; },
    side: 10
};
square.area() // => 100

//The shorthand syntax makes it clearer that area()
//is a method and not a data property like side.

//the property name can take any of the forms that
// are legal in an object literal:


const METHOD_NAME = "m";
const symbol = Symbol();
let weirdMethods = {
    "method With Spaces"(x) { return x + 1; },
    [METHOD_NAME](x) { return x + 2; },
    [symbol](x) { return x + 3; }
};
weirdMethods["method With Spaces"](1) // => 2
weirdMethods[METHOD_NAME](1) // => 3
weirdMethods[symbol](1) // => 4


//6.10.6 Property Getters and Setters

//JavaScript also supports accessor properties,which do not have 
//a single value but instead have one or two accessor methods:

//getter (passing no arguments).
//the get syntax binds an object property to a function 
//that will be called when that property is looked up.

{get prop() { ... } }
{get [expression]() { ... } }


const obj = {
    log: ['a', 'b', 'c'],
    get latest() {
      if (this.log.length === 0) {
        return undefined;
      }
      return this.log[this.log.length - 1];
    }
};
  
  console.log(obj.latest);
  // expected output: "c"
  

//When a program sets the value of an accessor property, JavaScript
//invokes the setter method, passing the value of the righthand side of the
//assignment.


//This method is responsible for “setting,” in some sense, the property value. 
//The return value of the setter method is ignored.


//If a property has both a getter and a setter method, it is a read/write
//property.



//If it has only a getter method, it is a read-only property. 

//And if it has only a setter method, it is a write-only property, 
//and attempts to read it always evaluate to undefined.

//setter 
//The set syntax binds an object property to a function to be called
//when there is an attempt to set that property.

{set prop(val) { . . . }}
{set [expression](val) { . . . }}

const language = {
    set current(name) {
      this.log.push(name);
    },
    log: []
    };
  
language.current = 'EN';
language.current = 'FA';
  
console.log(language.log);
// expected output: Array ["EN", "FA"]


let o = {
    // An ordinary data property
    dataProp: value,
    // An accessor property defined as a pair of functions.
    get accessorProp() { return this.dataProp; },
    set accessorProp(value) { this.dataProp = value; }
};


//Accessor properties are defined as one or two methods whose name is
//the same as the property name.



//The accessor methods defined above simply get and set the value of a
//data property, and there is no reason to prefer the accessor property
//over the data property.


let p = {
    // x and y are regular read-write data properties.
    x: 1.0,
    y: 1.0,
    // r is a read-write accessor property with getter and setter.
    // Don't forget to put a comma after accessor methods.
    get r() { return Math.hypot(this.x, this.y); },
    set r(newvalue) {
        let oldvalue = Math.hypot(this.x, this.y), ratio = newvalue/oldvalue;
        this.x *= ratio; //this refers to the point object p.
        this.y *= ratio;
    },
    // theta is a read-only accessor property with getter only.
    get theta() { return Math.atan2(this.y, this.x); }
};
p.r // => Math.SQRT2
p.theta // => Math.PI / 4

//Accessor properties are inherited
let q = Object.create(p); // A new object that inherits getters and setters
q.x = 3; q.y = 4; // Create q's own data properties
q.r // => 5: the inherited accessor properties work
q.theta // => Math.atan2(4, 3)


//The code above uses accessor properties to define an API that provides
//two representations (Cartesian coordinates and polar coordinates) of a
//single set of data.


// This object generates strictly increasing serial numbers
const serialnum = {
    // This data property holds the next serial number.
    // The _ in the property name hints that it is for internal use only.
    _n: 0,
    // Return the current value and increment it
    get next() { return this._n++; },
    // Set a new value of n, but only if it is larger than current
    set next(n) {
        if (n > this._n) this._n = n;
        else throw new Error("serial number can only be set to a larger value");
    }
};
serialnum.next = 10; // Set the starting serial number
serialnum.next // => 10
serialnum.next // => 11: different value each time we get next  