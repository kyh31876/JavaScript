//10.1 Modules with Classes, Objects, and Closures



const BitSet = (function() { // Set BitSet to the return value of this function
    // Private implementation details here
    function isValid(set, n) { ... }
    function has(set, byte, bit) { ... }
    const BITS = new Uint8Array([1, 2, 4, 8, 16, 32, 
64, 128]);
    const MASKS = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, 
~64, ~128]);
    // The public API of the module is just the BitSet class, which we define
    // and return here. The class can use the private functions and constants
    // defined above, but they will be hidden from users o the class
    return class BitSet extends AbstractWritableSet {
        // ... implementation omitted ...
};
}());





//defines a mini statistics module that exports mean() and stddev()
//functions while leaving the implementation details hidden:
// This is how we could define a stats module
const stats = (function() {
    // Utility functions private to the module
    const sum = (x, y) => x + y;
    const square = x => x * x;
    // A public function that will be exported
    function mean(data) {
        return data.reduce(sum)/data.length;
    }
    // A public function that we will export
    function stddev(data) {
        let m = mean(data);
        return Math.sqrt(
            data.map(x => x -
    m).map(square).reduce(sum)/(data.length-1)
        );
    }
    // We export the public function as properties of an object
    return { mean, stddev };
}());
    // And here is how we might use the module
stats.mean([1, 3, 5, 7, 9]) // => 5
stats.stddev([1, 3, 5, 7, 9]) // => Math.sqrt(10)

//10.1.1 Automating Closure-Based Modularity


//Imagine a tool that takes a set of files, wraps the content of each of those
//files within an immediately invoked function expression, keeps track of
//the return value of each function, and concatenates all of it into one big file.

const modules = {};
function require(moduleName) { return modules[moduleName]; }

modules["sets.js"] = (function() {
    const exports = {};
    // The contents of the sets.js file go here:
    exports.BitSet = class BitSet { ... };

    return exports;
}());

modules["stats.js"] = (function() {
    const exports = {};
    
    // The contents of the stats.js file go here:
    const sum = (x, y) => x + y;
    const square = x = > x * x;
    exports.mean = function(data) { ... };
    exports.stddev = function(data) { ... };

    return exports;
}());



//With modules bundled up into a single file like the one shown in the
//preceding example

// Get references to the modules (or the module content) that we need
const stats = require("stats.js");
const BitSet = require("sets.js").BitSet;
// Now write code using those modules
let s = new BitSet(100);
s.insert(10);
s.insert(20);
s.insert(30);
let average = stats.mean([...s]); // average is 20


//10.2 Modules in Node

// You can simply assign them to the properties of this object:
const sum = (x, y) => x + y;
const square = x => x * x;

exports.mean = data => data.reduce(sum)/data.length;
exports.stddev = function(d) {
    let m = exports.mean(d);
    return Math.sqrt(d.map(x => x -
m).map(square).reduce(sum)/(d.length-1));
};


//you want to define a module that exports only a single
//function or class rather than an object full of functions or classes.

module.exports = class BitSet extends AbstractWritableSet {
    // implementation omitted
};

//Another approach with modules like the stats module is
//to export a single object at the end of the module rather than
//exporting functions one by one as you go:

// Define all the functions, public and private
const sum = (x, y) => x + y;
const square = x => x * x;
const mean = data => data.reduce(sum)/data.length;
const stddev = d => {
    let m = mean(d);
    return Math.sqrt(d.map(x => x -
m).map(square).reduce(sum)/(d.length-1));
};

// Now export only the public ones
module.exports = { mean, stddev };

//10.2.2 Node Imports

//A Node module imports another module by calling the require() function.

/*you simply use the unqualified name of the module, without any “/”
characters that would turn it into a filesystem path: */

// These modules are built in to Node
const fs = require("fs"); // The built-in filesystem module
const http = require("http"); // The built-in HTTP module

// The Express HTTP server framework is a third-party module.
// It is not part of Node but has been installed locally
const express = require("express");

// Import the entire stats object, with all of its functions
const stats = require('./stats.js');

// We've got more functions than we need, but they're neatly
// organized into a convenient "stats" namespace.
let average = stats.mean(data);

// Alternatively, we can use idiomatic destructuring assignment to import
// exactly the functions we want directly into the local namespace:
const { stddev } = require('./stats.js');

// This is nice and succinct, though we lose a bit of context
// without the 'stats' prefix as a namspace for the stddev() function.
let sd = stddev(data);



//10.3 Modules in ES6
/*ES6 modules are different from regular JavaScript "scripts" in some 
important ways. Code inside an ES6 module is automatically in strict mode,
meaning you'll never have to write "use strict" again.      In modules,
code can't use the with statement or the arguments or undeclared variables. */



//10.3.1 ES6 Exports

//To export a constant, variable, function, or class from an ES6 module,
//simply add the keyword export before the declaration:

export const PI = Math.PI;
export function degreesToRadians(d) { return d * PI / 180; }


export class Circle {
    constructor(r) { this.r = r; }
    area() { return PI * this.r * this.r; }
}
//instead of writing three individual exports in the preceding code,
//we could have equivalently written a single line at the end:

export { Circle, degreesToRadians, PI };

//the curly braces do not actually define an object literal.
//This export syntax simply requires a comma-separated 
//list of identifiers within curly braces.

//It is common to write modules that export only one value
export default class BitSet {
    // implementation omitted
}
//if you use export default, you can export object literals.

//Finally, note that the export keyword can only appear at the top level
//of your JavaScript code.
//You may not export a value from within a class, function, loop, or conditional.


//10.3.2 ES6 Imports

//The import keyword is used to import values 
//that have been exported by other modules.

import BitSet from './bitset.js';

//The identifier to which the imported value is assigned is a constant,

//A module specifier string must be an absolute path starting with “/”,or 
//a relative path starting with “./” or “../”, or a complete URL a with protocol and hostname.


//To import values from a module that exports multiple values, 
//we use a slightly different syntax:

import { mean, stddev } from "./stats.js";
//we provide a local name when we import those values.


//An import statement that references that module can import any subset
//of those values simply by listing their names within curly braces.



//When importing from a module that defines many exports,
//you can easily import everything with an import statement like this:

import * as stats from "./stats.js";
//An import statement like this creates an object and assigns it to a
//constant named stats.


//Non-default exports always have names, 
//and those are used as property names within the object.

import Histogram, { mean, stddev } from "./histogramstats.js";


//To include a no-exports module into your program, 
//simply use the import keyword with the module specifier:

import "./analytics.js";


//10.3.3 Imports and Exports with Renaming

//If two modules export two different values using the same name and
//you want to import both of those values, you will have to rename one
//or both of the values when you import it.


//if you want to import a value whose name is already in use in your module,
//you will need to rename the imported value. You can use the "as" keyword with
//named imports to rename them as you import them:

import { render as renderImage } from "./imageutils.js";
import { render as renderUI } from "./ui.js";

//These lines import two functions into the current module. The
//functions are both named render() in the modules that define them.


import { default as Histogram, mean, stddev } from "./histogram-stats.js";

//the JavaScript keyword default serves as a placeholder and allows us to 
//indicate that we want to import and provide a name for the default 
//export of the module.

//that are less likely to conflict with other modules. 
//As with imports, you use the as keyword to do this:
export {
    layout as calculateLayout,
    render as renderLayout
};

//the curly braces look something like object literals, they are not, and
//the export keyword expects a single identifier before the as, not an expression.

export { Math.sin as sin, Math.cos as cos }; // SyntaxError


//10.3.4 Re-Exports

//only one function or the other

import { mean } from "./stats/mean.js";
import { stddev } from "./stats/stddev.js";
export { mean, stdev };

//ES6 modules anticipate this use case and provide a special syntax for it.

//Instead of importing a symbol simply to export it again, you can
//combine the import and the export steps into a single “re-export”
//statement that uses the "export" keyword and the "from" keyword:

export { mean } from "./stats/mean.js";
export { stddev } from "./stats/stddev.js";


//If we are not being selective with a re-export and simply want to
//export all of the named values from another module,

export * from "./stats/mean.js";
export * from "./stats/stddev.js";




//Suppose we wanted to re-export the mean() function 
//but also define average() as another name for the function.

export { mean, mean as average } from "./stats/mean.js";
export { stddev } from "./stats/stddev.js";




//the re-export syntax is a little more complicated because it needs to
//define a name for the unnamed default exports
export { default as mean } from "./stats/mean.js";
export { default as stddev } from "./stats/stddev.js";





//you could do an import followed by an export default, 
//or you could combine the two statements like this:


// Import the mean() function from ./stats.js and make it the
// default export of this module
export { mean as default } from "./stats.js"



// The average.js module simply re-exports the stats/mean.js default export
export { default } from "./stats/mean.js"
