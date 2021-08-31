//6.1 Introduction to Objects

// an 'object' is a value in memory which is possibly referenced by an identifier.




/* JavaScript object is a non-primitive data-type 
that allows you to store multiple collections of data. */

//'student' is an object that stores values such as strings and numbers.
var student = {
    firstName: 'ram',
    class: 10
};

// Properties
//"key: value" pairs are called properties. For example,
let person = { 
    name: 'John',
    age: 20
};
//Here, name: 'John' and age: 20 are properties.

//A property has a name and a value.

/*A property name may be any string, including the empty string (or any Symbol), 
but no object may have two properties with the same name. */


//Data property
//Associates a key with a value, and has the following attributes:

//Attributes of a data property

/*Attribute	        Type	Description                             	Default value
[[Value]]	                Any type The value retrieved 
                            by a get access of the property.	        undefined

[[Writable]]	Boolean	    If false, the property's 
                            [[Value]] cannot be changed.	            false


[[Enumerable]]	Boolean	                                                false
                            If true, the property will be enumerated 
                            in for...in loops.
                            

                            
[[Configurable]] Boolean	If false, the property cannot be deleted,   false
                            cannot be changed to an accessor property, 
                            and attributes other than 
                            [[Value]] and [[Writable]] cannot be changed.	
*/

//Accessor property
/*Associates a key with one of two accessor functions (get and set) 
to retrieve or store a value. */

/*Note: It’s important to recognize it’s accessor property — not accessor method. We can give a JavaScipt object class-like accessors by using a function as a value — but that doesn't make the object a class.

An accessor property has the following attributes:

Attribute	        Type	        Description	                        Default value
[[Get]]	        Function object     The function is called              undefinded
                or undefined        with an empty argument list
                                    and retrieves the property value 
                                    whenever a get access to the value 
                                    is performed. 


[[Set]]	        Function object     The function is called with an argument  undefined
                or undefined        that contains the assigned value and is 
                                    executed whenever a specified property is 
                                    attempted to be changed. 	


[[Enumerable]]	Boolean	If true,    the property will be 
                                    enumerated in for...in loops.	        false

[[Configurable]] Boolean If false, the property can't be deleted and        false
                                   can't be changed to a data property.
*/




//JavaScript Primitives

//A primitive value is a value that has no properties or methods.

//string
//number
//boolean
//null
//undefined




//6.2 Creating Objects

//6.2.1 Object Literals

//an object literal is a comma separated list of colon-separated name:value pairs,
//enclosed within curly braces({}).

//JavaScript Object Declaration
const object_name = {
    key1: value1,
    key2: value2
 }
/* an object 'object_name' is defined. 
Each member of an object is a key: value pair separated by commas 
and enclosed in curly braces {}. */

/*A property name(Key) is a JavaScript identifier or a string literal
A property value is any JavaScript expression; 
the value of the expression becomes the value of the property. */


//Unassigned properties of an object are undefined 
object_name.key3 //undefined






/*an object object_name is defined. Each member of an object is a key: value
pair separated by commas and enclosed in curly braces {}.*/

var empty = {}; // An object with no properties
let point = {x: 0, y: 0 }; // Two numeric properties
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



//Property accessors
//You can access the 'value' of a property by using its 'key'.

//Using dot Notation
objectName.key

var person = { 
    name: 'John', 
    age: 20, 
};
// accessing property
console.log(person.name); // John


//Using bracket Notation
objectName["propertyName"]

var person = { 
    name: 'John', 
    age: 20, 
};

// accessing property
console.log(person["name"]); // John


/* In the object[property_name] syntax, the property_name is just a string or Symbol */
const variable = object[property_name]
object[property_name] = value;

document['createElement']('pre')
document.createElement('pre') // it just same thing 



//Property names

/*Property names are string or Symbol. Any other value, including a number, 
is coerced to a string. This outputs 'value', since 1 is coerced into '1'. */
var object = {}
object['1'] = 'value'
console.log(object[1])

/* This also outputs 'value', since both 'foo' and 'bar' 
are converted to the same string. */

var foo = {unique_prop: 1}, bar = {unique_prop: 2}, object = {};
object[foo] = 'value'
console.log(object[bar])

//Function objects:
stringify(function (){}) //-> [object Function]

//Array objects:
stringify([]) //-> [object Array]

//RegExp objects
stringify(/x/) //-> [object RegExp]

//Date objects
stringify(new Date)  //-> [object Date]

//and Object objects!
stringify({}) //-> [object Object]







//6.2.2 Object() constructor



//The Object constructor creates an object wrapper for the given value.
/* If the value is null or undefined, it will create and return an empty object.

Otherwise, it will return an object of a Type that corresponds to the given value.

If the value is an object already, it will return the value. */

//Syntax
new Object()
new Object(value)


//A function used in this way is called a 'constructor' 
//and serves to initialize a newly created object.

let o = new Object(); // Create an empty object: same as {}.
let a = new Array(); // Create an empty array: same as [].
let d = new Date(); // Create a Date object representing the current time
let r = new Map(); // Create a Map object for key/value mapping



//a constructor function is used to create objects. For example,
// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// create an object
const person = new Person();

/*function 'Person()' is an object constructor function.
To create an object from a constructor function, we use the 'new' keyword. */


//'this' Keyword

/*  when 'this' keyword is used in a constructor function, 
this refers to the object when the object is created. For example,*/
// constructor function
function Person () {
    this.name = 'John',
}
// create object
const person1 = new Person();
// access properties
console.log(person1.name);  // John

/* when an object accesses the properties, 
it can directly access the property as 'person1.name' */



//Constructor Function Parameters

//You can also create a constructor function with parameters. For example,
// constructor function
function Person (person_name, person_age, person_gender) {
    // assigning  parameter values to the calling object
    this.name = person_name,
    this.age = person_age,
    this.gender = person_gender,
    this.greet = function () {
        return ('Hi' + ' ' + this.name);
    }
}
// creating objects
const person1 = new Person('John', 23, 'male');
const person2 = new Person('Sam', 25, 'female');
// accessing properties
console.log(person1.name); // "John"
console.log(person2.name); // "Sam"


/* we have passed arguments to the constructor function 
during the creation of the object. */

const person1 = new Person('John', 23, 'male');
const person2 = new Person('Sam', 25, 'male');
//This allows each object to have different properties. As shown above,
console.log(person1.name); //gives John
console.log(person2.name); //gives Sam







//6.2.4 Object.create()

//The Object.create() method creates a new object,
//using an existing object as the prototype of the newly created object.

Object.create(proto)
Object.create(proto, propertiesObject)



//proto
//The object which should be the prototype of the newly-created object.

/* propertiesObject //Optional

it is optional parameter. It specifies the enumerable properties 
to be added to the newly created object.*/

var o1 = Object.create({x: 1, y: 2}); // o1 inherits properties x and y.
o1.x + o1.y // => 3

let o1 = obe

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


//The lefthand side should be an expression whose value is an object.

//If using the dot operator(.),the righthand side must be a simple identifier 
//that names the property.

let author = book.author; // Get the "author" property of the book.
let name = author.surname; // Get the "surname" property of the author.

//If using square brackets, the value within the brackets must be an expression 
//that evaluates to a string that contains the desired property name:

let title = book["main title"]; // Get the "main title" property of the book


//To create or set a property, use a dot or square brackets as you would
//to query the property,
book.edition = 7; // Create an "edition" property of book.
book["main title"] = "ECMAScript"; // Change the "main title" property.



//6.3.1 Objects As Associative Arrays

//the following two JavaScript expressions have the same value:
object.property
object["property"]
//Properties of JavaScript objects can also be accessed or set using a []


/* Objects are sometimes called 'associative arrays' 
,since each property is associated with a string value that can be used to access. */

myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;

/* a property name that has a space or a - , or that starts with a number)
can only be accessed using the [].  */



/*On the other hand, when you access a property of an object with the []
array notation, the name of the property is expressed as a string. Strings
are JavaScript datatypes,*/


let addr = "";
for(let i = 0; i < 4; i++) {
    addr += customer[`address${i}`] + "\n";
}
/*This code reads and concatenates the address0, address1,
address2, and address3 properties of the customer object. */


/* This brief example demonstrates the flexibility of using array notation
to access properties of an object with string expressions. This code
could be rewritten using the dot notation, but there are cases in which
only the array notation will do. */



//Own properties

var myObject = {
    myProp: 'Value'
};
myObject.myProp; // => 'Value'

// The property myProp is defined directly on myObject, being an 'own property'.

/*To list the own properties of an object use the built-in utility function 
Object.getOwnPropertyNames(object) */

const myObject = {
    myProp: 'Value'
};
  
Object.getOwnPropertyNames(myObject); // => ['myProp']

/* Object.getOwnPropertyNames(myObject) returns an array having one 
own property name: ['myProp']. */



//6.3.2 Inheritance

//inherited properties

/* All objects inherit from at least one other object. 
The object being inherited from is calles the 'prototype' , 
and the inherited properties can be found in the prototype object of the constructor.  
*/

var myObject = {
    myProp: 'Value'
};
  
myObject.toString; // => function() {...}

//The property accessor myObject.toString evaluates to a function.

/* toString is an inherited property. 
In other words, myObject inherits toString property from its prototype object. */


/* When JavaScript evaluates the expression myObject.toString, 
first, it tries to find the property toString within the own properties -
however it cannot find one (myObject has just one own property myProp).

Then JavaScript looks inside the prototype object of myObject, 
and finally finds a property toString. */

/* Inherited toString property of myObject equals 
to the same property access directly from the prototype object: */

var myObject = {
    myProp: 'Value'
};
  
const myObjectProto = Object.getPrototypeOf(myObject);
  
myObject.toString === myObjectProto.toString; // => true
/*Object.getPrototypeOf(object) is an utility function 
that returns the object’s prototype. */




//Own vs inherited

const myObject = {
    myProp: 'Value',
    toString() {
        return `[object MyObject]`;
    }
};
const myObjectProto = Object.getPrototypeOf(myObject);
myObject.toString === myObjectProto.toString; // => false

/* Because myObject has an own property toString, 
the object does no longer inherit toString from the prototype object.

When an object has an own property and inherits a property with the same name, 
the own property takes precedence over the inherited one. */


//If an own property gets deleted, then the inheritance re-activates:
var myObject = {
    myProp: 'Value',
    toString() {
      return `[object MyObject]`;
    }
};


// Own properties
myObject.toString(); // => '[object MyObject]'
myObject.myProp;     // => 'Value'

delete myObject.toString;
delete myObject.myProp;

/* invocating myObject.toString() uses the own property. 
Then delete myObject.toString deletes the own property. */


// Inherited property
myObject.toString(); // => '[object Object]'
// No inherited property
myObject.myProp;     // => undefined

/* invocating myObject.toString(), even having the own property toString deleted, 
uses the inherited toString property from the prototype object. */



//JavaScript Prototype

//every function and object has a property named prototype by default.
function Person () {
    this.name = 'John',
    this.age = 23
}
const person = new Person();

// checking the prototype value
console.log(Person.prototype); // { ... }
//Since the prototype property has no value at the moment, 
//it shows an empty object { ... }.





//Prototype Inheritance

/* a prototype can be used to add properties and methods to a constructor function. 
And objects inherit properties and methods from a prototype. */


// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// creating objects
const person1 = new Person();
const person2 = new Person();

// adding property to constructor function
Person.prototype.gender = 'male';

// prototype value of Person
console.log(Person.prototype); //{ gender: 'male' }  undefined

// inheriting the property from prototype
console.log(person1.gender); //male undefined
console.log(person2.gender); //male undefined


//we have added a new property gender to the Person constructor function using:
Person.prototype.gender = 'male';

/*Then object person1 and person2 inherits the property gender from 
the prototype property of Person constructor function.
Hence, both objects person1 and person2 can access the gender property. */


// The syntax to add the property to an object constructor function 
objectConstructorName.prototype.key = 'value';

/* Prototype is used to provide additional property to all 
the objects created from a constructor function. */




//6.3.3 Property Access Errors


//An attempt to set a property p of an object o fails in these circumstances:

/* o has an own property p that is read-only:

o has an inherited property p that is read-only

o does not have an own property p; o does not inherit a
property p with a setter method, and o’s extensible attribute is false. */



//6.4 Deleting Properties

delete book.author; // The book object now has no author property.
delete book["main title"]; // Now it doesn't have "main title", either.

//The delete operator only deletes own properties, not inherited ones.

/* A delete expression evaluates to 'true' if the delete succeeded or 
if the delete had no effect.
delete also evaluates to true when used (meaninglessly) with an
expression that is not a property access expression: */



let o = {x: 1}; // o has own property x and inherits property toString
delete o.x // => true: deletes property x
delete o.x // => true: does nothing (x doesn't exist) but true anyway
delete o.toString // => true: does nothing (toString isn't an own property)
delete 1 // => true: nonsense, but true anyway

//delete does not remove properties that have a configurable attribute of false.


//Certain properties of built-in objects are non-configurable,
//as are properties of the global object created by variable declaration 
//and function declaration.

//In non strict mode, all these deletions throw TypeError instead of returning false
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
    
//hasOwnProperty() method


/*Every JavaScript object has a special method object.hasOwnProperty('myProp') 
that returns a boolean indicating whether object has a property myProp. */

const hero = {
    name: 'Batman'
};

hero.hasOwnProperty('name');     // => true
hero.hasOwnProperty('realName'); // => false

/* hero.hasOwnProperty('name') returns 'true' because the property name 
exists in the object */

/*The method name hasOwnProperty() suggests that it looks in 
the own properties of the object. 
The own properties are those defined directly upon the object. */

//Because of that hasOwnProperty() doesn’t detect the inherited toString property:
const hero = {
    name: 'Batman'
};
  
hero.toString; // => function() {...}
hero.hasOwnProperty('toString'); // => false
  
//in operator

const hero = {
    name: 'Batman'
};

'name' in hero;     // => true
'realName' in hero; // => false
//  " 'name' in hero   " evaluates to true because 'hero' has a property name.

/* in contrast to hasOwnProperty(), the 'in' operator 
detects that 'hero' object contains the inherited property toString: */

const hero = {
    name: 'Batman'
};
hero.toString; // => function() {...}

'toString' in hero;              // => true
hero.hasOwnProperty('toString'); // => false



//Comparing with undefined

//Accessing a non-existing property from an object results in 'undefined':

const hero = {
    name: 'Batman'
};

hero.name;     // => 'Batman'
hero.realName; // => undefined

// 'hero.realName' evaluates to 'undefined' because 'realName' property is missing.


const hero = {
    name: 'Batman'
};

hero.name !== undefined;     // => true
hero.realName !== undefined; // => false

/* "hero.name !== undefined"  evaluates to true, 
which shows the existence of property. */


/* be aware of false-negatives. 
If the property exists, but has undefined value (case, however, rarely happening), 
comparing against undefined evaluates incorrectly to false: */

const hero = {
    name: undefined
};

hero.name !== undefined; // => false

/* Even if the property name exists (but has undefined value),
"hero.name !== undefined" evaluates to false: 
w hich incorrectly indicates a missing property. */




//6.6 Enumerating Properties

JSON.stringify({ a: 2 }, null, ' ');
// '{
//  "a": 2
// }'
/* Instead of testing for the existence of individual properties, 
wesometimes want to iterate through or obtain a list of all the properties
of an object. */




/* 'for/in' loop runs the body of the loop once for each enumerable property 
(own or inherited) of the specified object, assigning the name of the property 
to the loop variable. Built-in methods that objects inherit are not enumerable,
but the properties that your code adds to objects are enumerable by default. */

var  o = {x: 1, y: 2, z: 3}; // Three enumerable own properties
o.propertyIsEnumerable("toString") // => false: not enumerable
for(let p in o) { // Loop through theproperties
    console.log(p); // Prints x, y, and z, but not toString
}



//To guard against enumerating inherited properties with 'for/in' , 
//you can add an explicit check inside the loop body:

for(let p in o) {
    if (!o.hasOwnProperty(p)) continue; // Skip inherited properties
}

for(let p in o) {
    if (typeof o[p] === "function") continue; // Skip all methods
}






//There are four functions you can use to get an array of property names:




//Object.keys() 


//returns an array of the names  of the enumerable own properties of an object. 

//Syntax
Object.keys(obj)

obj
//The object of which the enumerable's own properties are to be returned.

//Return value

/* An array of strings 
that represent all the enumerable properties of the given object. */







//Object.getOwnPropertyNames() 


/*working like Object.keys() but returns an array of the names of nonenumerable
own properties as well, as long as their names are strings. */

//Syntax
Object.getOwnPropertyNames(obj)

obj
//The object whose enumerable and non-enumerable properties are to be returned.

//Return value

/*An array of strings that corresponds to the properties found directly 
in the given object. */



//Object.getOwnPropertySymbols() 

//returns own properties whose names are Symbols, whether or not they are enumerable.


//Syntax
Object.getOwnPropertyNames(obj)

obj 
//The object whose enumerable and non-enumerable properties are to be returned.

//Return value
/*An array of strings that corresponds to the properties found directly 
in the given object. */





//6.7 Extending Objects

/* A common operation in JavaScript programs is needing to copy the
properties of one object to another object. */
let target = {x: 1}, source = {y: 2, z: 3};
for(let key of Object.keys(source)) {
    target[key] = source[key];
}
target // => {x: 1, y: 2, z: 3}


//Object.assign() 

/* copy all enumerable own properties from one or more source objects 
to a target object. It returns the modified target object. */

//Syntax
Object.assign(target, ...sources)

target
//what to apply the sources’ properties to, which is returned after it is modified.

sources
//objects containing the properties you want to apply.

//Return value
//The target object.


//Using JavaScript Object.assign() to clone an object


let widget = {
    color: 'red'
};

let clonedWidget = Object.assign({}, widget);

console.log(clonedWidget); //{ color: 'red' }


//Using JavaScript Object.assign() to merge objects

let box = {
    height: 10,
    width: 20
};
let style = {
    color: 'Red',
    borderStyle: 'solid'
};

let styleBox = Object.assign({}, box, style);
console.log(styleBox); 
/* {
    height: 10,
    width: 20,
    color: 'Red',
    borderStyle: 'solid'
} */



//6.9 Object Methods


/* Object Methods in JavaScript can be accessed by using functions. 
Functions in JavaScript are stored as property values. 
The objects can also be called without using bracket().  */


//Accessing Object Methods
//You create an object method with the following syntax:
methodName : function() { /*code lines*/ }

//You access an object method with the following syntax:
objectName.methodName()

/* You will typically describe fullName() as a method of the person object, 
and fullName as a property. */

//This example accesses the fullName() method of a person object:
name = person.fullName();

/* If you access the fullName property, without (), 
it will return the function definition: */
name = person.fullName;





//6.9.1 The toString() Method

//The JavaScript Object toString() method returns the object as a string.

//Syntax        //obj.toString()

//Return value
//Returns a string representing the object.

// Parameters
//The toString() method does not take any parameters.

/*Return value 
Returns a string representing the object. 

Every object descended from Object inherits toString() 
and if not overridden, it returns "[object <type>]" */

//The toString() method does not take any parameters.

/*Every object has a toString() method that is automatically called 
when the object is to be represented as a text value or 
when an object is referred to in a manner in which a string is expected. */

// built-in objects
var num = 10;

// number takes in optional radix argument (numeral base)
console.log(num.toString(2)); // "1010" in binary
console.log(new Date().toString()); 
//Sun Aug 29 2021 15:56:32 GMT+0900 (Korean Standard Time)

// overriding default toString(), custom object
function Dog(name, breed, sex) {
  this.name = name;
  this.breed = breed;
  this.sex = sex;
}

dog1 = new Dog("Daniel", "bulldog", "male");
console.log(dog1.toString()); // [object Object]

Dog.prototype.toString = function dogToString() {
  return `${this.name} is a ${this.sex} ${this.breed}.`;
};

console.log(dog1.toString()); // Daniel is a male bulldog.




//6.9.2 The toLocaleString() Method

/*The JavaScript Object toLocaleString() method returns 
a string representing the object. */

//Syntax
obj.toLocaleString()

//locales Optional. 
//Which language specific format to use.

//options	Optional. 
//An object were you can set some properties.

// toLocaleString for Array
const arr = [4, 7, 10];
let string = arr.toLocaleString("fr", { style: "currency", currency: "EUR" });
console.log(string); // 4,00 €,7,00 €,10,00 €

// toLocaleString for Number
const num = 123456.789;
// India uses thousands/lakh/crore separators
console.log(num.toLocaleString("en-IN")); // 1,23,456.789

// toLocaleString for Date
const date = new Date(Date.now());
console.log(date); // Wed Jul 29 2020 15:37:00 GMT+0545 (Nepal Time)

let dateStr = date.toLocaleString("de");
console.log(dateStr); // 29.7.2020, 15:37:00

/* Object's toLocaleString returns the result of calling toString(). 
This method is meant to be overridden by derived objects 
for locale-specific purposes, even though all may not use it. */




//6.9.3 The valueOf() Method

//The valueOf() method returns the primitive value of the specified object.

//Syntax
obj.valueOf()

//Return value 
//Returns the primitive value of the specified object.

/* For objects of type Object, there is no primitive value, 
so valueOf() method simply returns the object itself.
For objects of type Number, Boolean, or String, however, 
valueOf() returns the primitive value represented by the corresponding object. */

//Custom valueOf()
function customNum(n, fact) {
    this.number = n;
    this.fact = fact;
}
customNum.prototype.valueOf = function () {
return this.number;
};
var num1 = new customNum(2, "First Prime Number");
console.log(num1 + 3); // 5


// built-in valueOf()
const num = 5;
// string.toString() changes string to number
console.log(+"5" + num); // 10
console.log(+[1] + num); // 6
console.log(+true + num); // 6
console.log(+false + num); // 5
console.log(+undefined + num); // NaN
console.log(+null + num); // 5





//6.9.4 JSON.stringify() method

/* JSON.stringify() method converts JavaScript objects into strings.
When sending data to a web server the data has to be a string.*/


//Syntax
JSON.stringify(value)
JSON.stringify(value, replacer)
JSON.stringify(value, replacer, space)


//Parameters
value
//The value to convert to a JSON string.

//replacer Optional
/* Either a function or an array used to transform the result. 
The replacer is called for each item. */

//space Optional
/* Either a String or a Number.
A string to be used as white space (max 10 characters),
or a Number, from 0 to 10, to indicate how many space characters to use as white space. */

JSON.stringify({});                    // '{}'
JSON.stringify(true);                  // 'true'
JSON.stringify('foo');                 // '"foo"'
JSON.stringify([1, 'false', false]);   // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 });              // '{"x":5}'

JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)) // '"2006-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 }); // '{"x":5,"y":6}'
JSON.stringify([new Number(3), new String('false'), new Boolean(false)]);
// '[3,"false",false]'

// String-keyed array elements are not enumerable and make no sense in JSON
let a = ['foo', 'bar'];
a['baz'] = 'quux';      // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
JSON.stringify(a);
// '["foo","bar"]'

JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] });
// '{"x":[10,null,null,null]}'

// Standard data structures
JSON.stringify([new Set([1]), new Map([[1, 2]]), 
new WeakSet([{a: 1}]), new WeakMap([[{a: 1}, 2]])]);
// '[{},{},{},{}]'





//The replacer parameter

//The replacer parameter can be either a function or an array.


/* As a function, it takes two parameters: 
the key and the value being stringified. 
The object in which the key was found is provided as the replacer's this parameter. */

/* You cannot use the replacer function to remove values from an array. 
If you return undefined or a function then null is used instead. */

//Example replacer, as a function
function replacer(key, value) {
  // Filtering out properties
  if (typeof value === 'string') {
    return undefined;
  }
  return value;
}

var foo = {foundation: 'Mozilla', model: 'box', 
week: 45, transport: 'car', month: 7};
JSON.stringify(foo, replacer);
// '{"week":45,"month":7}'


//Example replacer, as an array

/* If replacer is an array, the array's values indicate the names of the properties 
in the object that should be included in the resulting JSON string. */

JSON.stringify(foo, ['week', 'month']);
// '{"week":45,"month":7}', only keep "week" and "month" properties



//The space argument

//The space argument may be used to control spacing in the final string.

/*If it is a number, successive levels in the stringification 
will each be indented by this many space characters (up to 10).

If it is a string, successive levels will be indented by this string 
(or the first ten characters of it). */ 


JSON.stringify({ a: 2 }, null,'');
// '{
//  "a": 2
// }'



//6.10 Extended Object Literal Syntax

/* Recent versions of JavaScript have extended the syntax for object
literals in a number of useful ways. */




//6.10.1 Shorthand Properties

//an object literal is a collection of name-value pairs. like that: 
function createMachine(name, status) {
    return {
        name: name,
        status: status
    };
}

/* The createMachine() function takes two arguments 'name' and 'status' 
and returns a new object literal with two properties: 'name' and 'status'.*/

/* 'name' and 'status' properties take the values of the name and status parameters.
This syntax looks redundant because 'name' and 'status' mentioned twice 
in both the name and value of properties. */


//you can rewrite the createMachine() function 
function createMachine(name, status) {
    return {
        name,
        status
    };
}
/* the JavaScript engine assigns the name and status property 
values of the 'name' and 'status' arguments. */


//you can construct an object literal from local variables
let name = 'Computer',
    status = 'On';
let machine = {
   name,
   status
};






//6.10.2 Computed Property Names

/* you could use the ([]) to enable the 'computed property names' 
for the properties on objects.

The square brackets allow you to use the string literals and variables as the property names. 
*/

let name = 'machine name';
let machine = {
    [name]: 'server',
    'machine hours': 10000
};

console.log(machine[name]); // server
console.log(machine['machine hours']); // 10000

/* The 'name' variable was initialized to a value of 'machine name'. 
Since both properties of the machine object contains a space, 
you can only reference them using the square brackets. */

/*When a property name is placed inside [] , 
the JavaScript engine evaluates it as a string. 
It means that you can use an expression as a property name.  */

let prefix = 'machine';
let machine = {
    [prefix + ' name']: 'server',
    [prefix + ' hours']: 10000
};

console.log(machine['machine name']); // server
console.log(machine['machine hours']); // 10000

/* The machine object’s properties evaluate to 'machine name' and 'machine hours', 
therefore you can reference them as the properties of the machine object. */



//Concise Method
/*Prior to ES6, when defining a method for an object literal, 
you need to specify the name and full function definition as shown 
in the following example:  */

let server = {
	name: "Server",
	restart: function () {
		console.log("The" + this.name + " is restarting...");
	}
};


/* ES6 makes the syntax for making a method of the object literal 
more succinct by removing the colon (:) and the function keyword. */
let server = {
    name: 'Server',
    restart() {
        console.log("The" + this.name + " is restarting...");
    }
};

//the method 'starting up' has spaces in its name. 
//To call the method, you use the following syntax:
object_name['property name']();




//6.10.3 Symbols as Property Names

//property names can be strings or symbols.


/* If you assign a symbol to a variable or constant, then you can
use that symbol as a property name using the computed property syntax: */

const extension = Symbol("my extension symbol");
let o = {
    [extension]: { /* extension data stored in this object */
}
};
o[extension].x = 0; // This won't conflict with other properties of o





//6.10.4 Spread Operator

/* The spread operator ... is used to expand or spread an iterable or an array. */
const arrValue = ['My', 'name', 'is', 'Jack'];

console.log(arrValue);   // ["My", "name", "is", "Jack"]
console.log(...arrValue); // My name is Jack

console.log(...arrValue)
//is equivalent to:
console.log('My', 'name', 'is', 'Jack');

//Copy Array Using Spread Operator

//You can also use the spread syntax ... to copy the items into a single array.

const arr1 = ['one', 'two'];
const arr2 = [...arr1, 'three', 'four', 'five'];

console.log(arr2); //  ["one", "two", "three", "four", "five"]


//Clone Array Using Spread Operator
//objects are assigned by reference and not by values.
let arr1 = [ 1, 2, 3];
let arr2 = arr1;

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]

// append an item to the array
arr1.push(4);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]


/* both variables 'arr1' and 'arr2 are referring to the same array.
Hence the change in one variable results in the change in both variables*/



/*  if you want to copy arrays so that they do not refer to the same array,
you can use the spread operator.
This way, the change in one array is not reflected in the other.*/

let arr1 = [ 1, 2, 3];
// copy using spread syntax
let arr2 = [...arr1];
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]

// append an item to the array
arr1.push(4);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3]


//Spread Operator with Object

//You can also use the spread operator with object literals.
const obj1 = { x : 1, y : 2 };
const obj2 = { z : 3 };
// add members obj1 and obj2  to obj3
const obj3 = {...obj1, ...obj2};

console.log(obj3); // {x: 1, y: 2, z: 3}
//both 'obj1' and 'obj2' properties are added to obj3 using the spread operator.


//Rest Parameter
//When the spread operator is used as a parameter, it is known as the rest parameter.
let func = function(...args) {
    console.log(args);
}
//Using the rest parameter will pass the arguments as array elements.
func(3); // [3]
func(4, 5, 6); // [4, 5, 6]


/*When a single argument is passed to the 'func()' function,
the rest parameter takes only one parameter.

When three arguments are passed, the rest parameter takes all three parameters. */

function sum(x, y ,z) {
    console.log(x + y + z);
}

const num1 = [1, 3, 4, 5];

sum(...num1); // 8
/* If you pass multiple arguments using the spread operator, 
the function takes the required arguments and ignores the rest. */





//6.10.5 Shorthand Methods

/*When a function is defined as a property of an object,  
we call that function a 'method'.  */


let square = {
    area: function() { return this.side * this.side; },
    side: 10
};
square.area() // => 100

/* the object literal syntax has been extended to allow a shortcut
where the function keyword and the colon are omitted, resulting in code like this: */

let square = {
    area() { return this.side * this.side; },
    side: 10
};
square.area() // => 100

/* The shorthand syntax makes it clearer that area() is a method 
and not a data property like side. */






//6.10.6 Property Getters and Setters

//here are two kinds of object properties:

//Data properties
//Accessor properties


//Data properties
//Here's an example of data property
var student = {
    // data property
    firstName: 'Monica';
};


//Accessor Property

/*accessor properties are methods that get or set the value of an object. 
For that, we use these two keywords:

get - to define a getter method to get the property value
set - to define a setter method to set the property value */



//getter (passing no arguments).

/*Syntax
{get prop() { ... } }
{get [expression]() { ... } } */


//Parameters

//prop
//The name of the property to bind to the given function.

//expression
/*you can also use expressions for a computed property name 
to bind to the given function. */


//getter methods are used to access the properties of an object. For example,
var student = {
    // data property
    firstName: 'Monica',
    // accessor property(getter)
    get getName() {
        return this.firstName;
    }
};

// accessing data property
console.log(student.firstName); // Monica
//also when accessing the value, we access the value as a property.
console.log(student.getName); // Monica

//When you try to access the value as a method, an error occurs.
console.log(student.getName()); // error

//a getter method 'getName()' is created to access the property of an object.

get getName() {
    return this.firstName;
}
// To create a getter method, the 'get' keyword is used.






//setter 

//setter methods are used to change the values of an object. For example

/* Syntax
{set prop(val) { . . . }}
{set [expression](val) { . . . }}

Parameters
prop
The name of the property to bind to the given function.

val
An alias for the variable that holds the value attempted to be assigned to prop.

expression
you can also use expressions for a computed property name to bind 
to the given function. */

const student = {
    firstName: 'Monica',  
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};
console.log(student.firstName); // Monica
// change(set) object property using a setter
student.changeName = 'Sarah';
console.log(student.firstName); // Sarah


//the setter method is used to change the value of an object.
set changeName(newName) {
    this.firstName = newName;
}
//To create a setter method, the 'set' keyword is used.
//the value of firstName is Monica.

//Then the value is changed to Sarah.
student.chageName = 'Sarah';
//Setter must have exactly one formal parameter.



//Object.defineProperty()
/* you can also use 'Object.defineProperty()' method 
to add getters and setters. */


//Syntax
Object.defineProperty(obj, prop, descriptor)

/*The first argument is the objectName.
The second argument is the name of the property.
The third argument is an object that describes the property. */

const student = {
    firstName: 'Monica'
}

// getting property
Object.defineProperty(student, "getName", {
get : function () {
        return this.firstName;
    }
});
// setting property
Object.defineProperty(student, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student.firstName); // Monica
// changing the property value
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah
Object.defineProperty() is used to access and change the property of an object.