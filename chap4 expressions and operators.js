
//expression
//an expression is a snippet of code that evaluates to a value.
//Wherever JavaScript expects a statement, you can write an expression.

//The below code snippets are all expressions. They all evaluate to a value.
0 // 0
1 + 1 // 2
'Hello' + ' ' + 'World' // 'Hello World'
{ answer: 42 } // { answer: 42 }
Object.assign({}, { answer: 42 }) // { answer: 42 }
answer !== 42 ? 42 : answer // 42
answer = 42 // 42



//The below snippets are all statements. They do not evaluate to a value.

// `if` statement
if (answer !== 42) { answer = 42 }
// `for` is a statement
for (;;) { console.log('Hello, World'); }
// Declaring a variable is a statement
let answer = 42



//4.1 Primary Expressions

//Primary expressions in JavaScript are constant or literal values,
//Basic keywords and general expressions in JavaScript.


//Literals are constant values that are embedded directly in your program.
1.23 // A number literal
"hello" // A string literal
/pattern/ // A regular expression literal

//Some of JavaScript’s reserved words are primary expressions:
true // Evalutes to the boolean true value
false // Evaluates to the boolean false value
null // Evaluates to the null value
this // Evaluates to the "current" object

//The "this" keyword is used in object-oriented programming.

//Within the body of a method, "this" evaluates 
//to the object on which the method was invoked.


//The this keyword is used to different values in different places in the program

i // Evaluates to the value of the variable i.
sum // Evaluates to the value of the variable sum.
undefined // The value of the "undefined" property of the global object



this //The this keyword refers to a special property of an execution context.

function //The function keyword defines a function expression.

class //The class keyword defines a class expression.

function* //The function* keyword defines a generator function expression.

yield //Pause and resume a generator function.

yield* //Delegate to another generator function or iterable object.

async function //The async function defines an async function expression.

await //Pause and resume an async function and wait for the promise's resolution/rejection.

[] //Array initializer/literal syntax.

{} //Object initializer/literal syntax.

/ab+c/i //Regular expression literal syntax.
( ) //Grouping operator.





//4.2 Object and Array Initializers

//Object and array initializers are expressions whose value is a newly
//created object or array.

//they are not primary expressions, because they include a number of
//subexpressions that specify property and element values.


//These initializer expressions are sometimes called 
//"object literals" and "array literals".


/*An array initializer is a comma-separated list of expressions contained
within square brackets. */
[] // An empty array: no expressions inside brackets means no elements
[1+2,3+4] // A 2-element array. First element is 3, second is 7


//they can arrange nested arrays:
let matrix = [[1,2,3], [4,5,6], [7,8,9]];//the value of an array initializer 
//expression may be different each time it is evaluated.

let sparseArray = [1,,,,5]; /*A single trailing comma is allowed after
the last expression in an array initializer and does not create an undefined element */

let p = { x: 2.3, y: -1.2 }; // An object with 2 properties
let q = {}; // An empty object with no properties
q.x = 2.3; q.y = -1.2; // Now q has the same properties as p

//Object literals can be nested.
let rectangle = {
    upperLeft: { x: 2, y: 2 },
    lowerRight: { x: 4, y: 5 }
    };

//4.3 Function Definition Expressions

//a function definition expression is a “function literal” in the same way
//that an object initializer is an “object literal.”


// This function returns the square of the value passed to it.
let square = function(x) { return x * x; };




//4.4 Property Access Expressions

/* A property access expression evaluates to the value of an object
property or an array element. */

object.property
object['property']


//In the object.property syntax, the property must be a valid JavaScript identifier.


let o = {x: 1, y: {z: 3}}; // An example object
let a = [o, 4, [5, 6]]; // An example array that contains the object
o.x // => 1: property x of expression o
o.y.z // => 3: property z of expression o.y
o["x"] // => 1: property x of object o
a[1] // => 4: element at index 1 of expression a
a[2]["1"] // => 6: element at index 1 of expression a[2]
a[0].x // => 1: property x of expression a[0]

//If the object expression is followed by another expression in square
//brackets, that second expression is evaluated and converted to a string

//If the value is null or undefined, the expression throws a TypeError




//4.4.1 Conditional Property Access

/*The optional chaining ?. stops the evaluation if the value before ?. is undefined 
or null and returns undefined. */

//we’ll be saying that something “exists” if it’s not null and not undefined.

object?.property
//returns obj.prop if obj exists, otherwise undefined.
object?['property']
//returns obj['prop'] if obj exists, otherwise undefined.



var a = {b:null}
a?.b //If a is null or undefined, then the expression evaluates 
//to undefined without any attempt to access the property b


let a = { b: {} }; //object has no property named c, then a.b?.c.d 
//will again throw a TypeError

a.b?.c?.d // => undefined


a?.b.c//value of a is null or undefined, then the entire expression immediately evaluates to
//undefined, and subexpressions b and c are never even evaluated


let a; // Oops, we forgot to initialize this variable!
let index = 0;
try {
    a[index++]; // Throws TypeError
} catch(e) {
    index // => 1: increment occurs before TypeError is thrown
}
a?.[index++] // => undefined: because a is undefined
index // => 1: not incremented because ?.[] shortcircuits
a[index++] // !TypeError: can't index undefined.





//4.5 Invocation Expressions


//An invocation expression is JavaScript’s syntax for calling 
//(or executing) a function or method.

f(0) // f is the function expression; 0 is the argument expression.
Math.max(x,y,z) // Math.max is the function; x, y, and z are the arguments.
a.sort() // a.sort is the function; there are no arguments.





//4.5.1 Conditional Invocation


/* instead of (), you can invoke a function using ?.() 
With the new ?.() invocation syntax, if the expression to the left of the ?. 
evaluates to null or undefined, then the entire invocation expression evaluates 
to undefined and no exception is thrown. */

function square(x, log) { // The second argument is an optional function
    if (log) { // If the optional function is passed
        log(x); // Invoke it
    }
return x * x; // Return the square of the argument
}

//you can simply write the function invocation using ?.(),

function square(x, log) { // The second argument is an optional function
    log?.(x); // Call the function if there is one
    return x * x; // Return the square of the argument
}
//Note, however, that ?.() only checks whether the lefthand side is null or undefined.


//if the value to the left of ?. is null or undefined,
//then none of the argument expressions within the parentheses are evaluated:
let f = null, x = 0;
try {
    f(x++); // Throws TypeError because f is null
} catch(e) {
    x // => 1: x gets incremented before the exception is thrown
}
f?.(x++) // => undefined: f is null, but no exception thrown
x // => 1: increment is skipped because of shortcircuiting

/* A method invocation also involves property access, 
it is worth taking a moment to make sure you understand 
the difference between the following expressions. */ 

o.m() // Regular property access, regular invocation
// o must be a function 
o?.m() // Conditional property access, regular invocation
//if o is null or undefined then the expression evaluates to undefined. 
//if o has any other value, then it must have a property m whose value is a function.

o.m?.() // Regular property access, conditional invocation
//o must not be null or undefined. 
//if it doesn`t have a property m or value of property is null
//then the entire expression evaluates to undefined.







//4.6 Object Creation Expressions

//An object creation expression creates a new object and invokes a function 
//(called a constructor) to initialize the properties of that object.

/* Object creation expression are like invocation expressions except that 
they are prefixed with the keyword "new" */
new Object()
new Point(2,3)

/*If no arguments are passed to the constructor function in an object
creation expression, the empty pair of parentheses can be omitted: */

new Object
new Date


//4.7 Operator Overview





//Table 4-1. JavaScript operators


/*Operator   Operation    A    N     Types
++  Pre- or post-increment R 1 lval→num
--  Pre- or post-decrement R 1 lval→num
-   Negate number R 1 num→num
+   Convert to number   R 1 any→num
~   Invert bits R 1 int→int
!   Invert boolean value R 1 bool→bool
delete   Remove a property R 1 lval→bool
typeof  Determine type of operand   R 1 any→str
void    Return undefined value      R 1 any→undef
**      Exponentiate    R 2 num,num→num
*, /, %     Multiply, divide, remainder     L 2 num,num→num
+, -    Add, subtract L 2 num,num→num
+       Concatenate strings         L  2  str,str→str
<<      Shift left L 2 int,int→int
>>      Shift right with sign extension     L 2 int,int→int
>>>     Shift right with zero extension     L 2 int,int→int
<, <=,>, >=     Compare in numeric order    L 2 num,num→bool
<, <=,>, >=     Compare in alphabetical order   L 2 str,str→bool
instanceof      Test object class       L 2 obj,func→bool
in      Test whether property exists    L 2 any,obj→bool
==      Test for non-strict equality    L 2 any,any→bool
!=      Test for non-strict inequality  L 2 any,any→bool
===     Test for strict equality        L 2 any,any→bool
!==     Test for strict inequality      L 2 any,any→bool
&       Compute bitwise AND         L 2 int,int→int
^       Compute bitwise XOR         L 2 int,int→int
|       Compute bitwise OR          L 2 int,int→int
&&      Compute logical AND         L 2 any,any→any
||      Compute logical OR          L 2 any,any→any
??      Choose 1st defined operand      L 2 any,any→any
?:      Choose 2nd or 3rd operand       R 3 bool,any,any→any
=       Assign to a variable or property      R 2 lval,any→any

**=, *=, /=, %=, Operate and assign R 2 lval,any→any
+=, -=, &=, ^=,
|=,
<<=, >>=, >>>=


,   Discard 1st operand,return 2nd      L 2 any,any→any

*/





//4.7.3 Operator Side Effects


/* Evaluating a simple expression like 2 * 3 never affects the state of
your program,and any future computation your program performs will
be unaffected by that evaluation. */


/* Some expression have side effects, 
and their evaluation may affect the result of future evaluations. */


/* The assignment operators = are the most obvious example: 
if you assign a value to a variable or property, that changes the value of
any expression that uses that variable or property. */

/* The delete operator also has side effects:
deleting a property is like (but not the same as) assigning undefined
to the property. */


//4.7.4 Operator Precedence

//Precedence	Operator type	Associativity	Individual operators
/*
21	            Grouping	    n/a	            ( … )
20	            Member Access	left-to-right	… . …
                Computed Member Access	left-to-right	… [ … ]
                new(with argument list)	n/a	    new … ( … )
                Function Call	left-to-right	… ( … )
                Optional chaining	left-to-right	        ?.
19	            new (without argument list)	    right-to-left	    new …
18	            Postfix Increment	            n/a     … ++
                Postfix Decrement	                    … --
17	            Logical NOT(!)  right-to-left	! …
                Bitwise NOT(~)	                ~ …
                Unary plus(+)	                + …
                Unary negation(-)	            - …
                Prefix Increment	            ++ …
                Prefix Decrement	            -- …
                typeof	                        typeof …
                void	                        void …
                delete	                        delete …
                await                       	await …
16	            Exponentiation(**)	right-to-left	… ** …
15	            Multiplication(*)	left-to-right	… * …
                Division (/)	… / …
                Remainder (%)	… % …
14	            Addition (+)	left-to-right	… + …
                Subtraction (-)	… - …
13	            BitwiseLeftShift(<<)	left-to-right	… << …
                Bitwise Right Shift(>>)	                … >> …
                Bitwise Unsigned Right Shift(>>>)	    … >>> …
12	            LessThan(<)	        left-to-right	    … < …
                LessThan Or Equal(<=)	                … <= …
                Greater Than(>)	                        … > …
                GreaterThan Or Equal(>=)	            … >= …
                in	                                … in …
                instanceof	                        … instanceof …
11	            Equality(==)	left-to-right	    … == …
                Inequality(!=)	                    … != …
                StrictEquality(===)	                … === …
                StrictInequality(!==)	            … !== …
10	            Bitwise AND(&)	left-to-right	    … & …
9	            Bitwise XOR(^)	left-to-right	… ^ …
8	            Bitwise OR(|)	left-to-right	… | …
7	            Logical AND(&&)	left-to-right	… && …
6	            Logical OR(||)	left-to-right	… || …
5	 Nullish coalescing operator(??)	left-to-right	… ?? …
4	Conditional (ternary) operator	right-to-left	… ? … : …
3	            Assignment	    right-to-left	    … = …
                                                    … += …
                                                    … -= …
                                                    … **= …
                                                    … *= …
                                                    … /= …
                                                    … %= …
                                                    … <<= …
                                                    … >>= …
                                                    … >>>= …
                                                    … &= …
                                                    … ^= …
                                                    … |= …
                                                    … &&= …
                                                    … ||= …
                                                    … ??= …
2	            yield	right-to-left	            yield …
                yield*	                            yield* …
1	            Comma/Sequence	left-to-right	    … , …


//4.7.5 Operator Associativity      

//Left-to-right associativity means that operations are
//performed from left to right

w = x - y - z;
//is the same as:
w = ((x - y) - z);

y = a ** b ** c;
x = ~-y;
w = x = y = z;
q = a?b:c?d:e?f:g;
//are equivalent to:
y = (a ** (b ** c));
x = ~(-y);
w = (x = (y = z));
q = a?b:(c?d:(e?f:g));


//4.8.1 The + Operator

//binary + operator adds numeric operands or concatenates string operands:
1 + 2 // => 3
"hello" + " " + "there" // => "hello there"
"1" + "2" // => "12"



/* The conversion rules for + give priority to string concatenation: 
if either of the operands is a string or an object that converts to a string,
the other operand is converted to a string and concatenation is performed. */

//Addition is performed only if neither operand is string-like.




/* Date objects are converted by their toString() method, 
and all other objects are converted via valueOf(),
if that method returns a primitive value. However, most objects 
do not have a useful valueOf() method, so they are
converted via toString() as well. */



/* After object-to-primitive conversion, if either operand is a string, 
the other is converted to a string and concatenation is performed. */

1 + 2 // => 3: addition
"1" + "2" // => "12": concatenation
"1" + 2 // => "12": concatenation after number-tostring
1 + {} // => "1[object Object]": concatenation after object-to-string
true + true // => 2: addition after boolean-to-number
2 + null // => 2: addition after null converts to 0
2 + undefined // => NaN: addition after undefined converts to NaN




//when the + operator is used with strings and numbers, it may not be associative.
1 + 2 + " blind mice" // => "3 blind mice"
1 + (2 + " blind mice") // => "12 blind mice"



//4.8.2 Unary Arithmetic Operators

//the unary operators all have high precedence and are all right-associative

//the arithmetic unary operators descirbed for (+,-,++,--) all convert 
//their single operand to a number if necessary.



//Unary plus (+)

/* The unary plus operator converts its operand to a number (or to
NaN) and returns that converted value.



//Unary minus (-)
/*it converts its operand to anumber,
if necessary, and then changes the sign of the result. */


//Increment (++)
/* The ++ operator increments (i.e., adds 1 to) its single operand,
which must be an lvalue (a variable, an element of an array, or a
property of an object). */

let i = 1, j = ++i;  //i and j are both 2 
/*it is known as the pre-increment operator, 
it increments the operand and evaluates to the incremented value of that operand.*/

let n = 1, m = n++;  //n is 2, m is 1 
//is known as the post-increment operator, it
//increments its operand but evaluates to the unincremented value of that operand.

//The ++ operator never performs string concatenation:
//It always convers it operand to a number and increments it. 
//IF x is the string "1" ,++ x is the numver 2 , but x+1 is "11"

var x = String(1);

++x //2
x+1 //'11'


//Decrement (--)
//Like the ++ operator, the return value of
//-- depends on its position relative to the operand.
1 + 2 // => 3: addition.
"1" + "2" // => "12": concatenation.
"1" + 2 // => "12": 2 is converted to "2".
11 < 3 // => false: numeric comparison.
"11" < "3" // => true: string comparison.
"11" < 3 // => false: numeric comparison, "11" converted to 11.
"one" < 3 // => false: numeric comparison, "one" converted to NaN.






//4.9 Relational Expressions


//4.9.1 Equality and Inequality Operators

/* equality operator (==) checks whether its two operands are equal, 
returning a Boolean result. 
it attempts to convert and compare operands that are of different types.*/

//Comparison with no type conversion
1 == 1;              // true
"hello" == "hello";  // true

//Comparison with type conversion
"1" ==  1;            // true
1 == "1";             // true
0 == false;           // true
0 == null;            // false
0 == undefined;       // false
0 == !!null;          // true, look at Logical NOT operator
0 == !!undefined;     // true, look at Logical NOT operator
null == undefined;    // true

const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3;         // true
number1 == number2;   // false

//Comparison of objects
const object1 = {"key": "value"}
const object2 = {"key": "value"};

object1 == object2 // false
object2 == object2 // true


/* nequality operator (!=) checks whether its two operands are not equal,
returning a Boolean result.
it attempts to convert and compare operands that are of different types. */

//the following two lines will always give the same result:

x != y
!(x == y)

//STRICT EQUALITY

/* strict equality operator === evaluates its operands, then compares
the two values as follows, performing no type conversion: */



//Comparing operands of the same type
console.log("hello" === "hello");   // true
console.log("hello" === "hola");    // false

console.log(3 === 3);               // true
console.log(3 === 4);               // false

console.log(true === true);         // true
console.log(true === false);        // false

console.log(null === null);         // true

//Comparing operands of different types
console.log("3" === 3);           // false

console.log(true === 1);          // false

console.log(null === undefined);  // false

Comparing objects
const object1 = {
  name: "hello"
}

const object2 = {
  name: "hello"
}
console.log(object1 === object2);  // false
console.log(object1 === object1);  // true



//4.9.2 Comparison Operators

//The comparison operators test the relative order 
//(numerical or alphabetical) of their two operands:



/* Both the + operator and the comparison operators behave differently
for numeric and string operands. */

/* + favors strings: it performs concatenation if either operand is a string. 
The comparison operators favor numbers and only perform string comparison 
if both operands are strings: */
1 + 2 // => 3: addition.
"1" + "2" // => "12": concatenation.
"1" + 2 // => "12": 2 is converted to "2".
11 < 3 // => false: numeric comparison.
"11" < "3" // => true: string comparison.
"11" < 3 // => false: numeric comparison, "11" converted to 11.
"one" < 3 // => false: numeric comparison, "one" converted to NaN.




//4.9.3 The in Operator
/* "in" operator returns true if the specified property 
is in the specified object or its prototype chain. */

prop
//A string or symbol representing a property name or array index 

object
//Object to check if it (or its prototype chain) contains 
//the property with specified name (prop).

prop in object 

let point = {x: 1, y: 1}; // Define an object
"x" in point // => true: object has property named "x"
"z" in point // => false: object has no "z" property.
"toString" in point // => true: object inherits toString method
let data = [7,8,9]; // An array with elements (indices) 0, 1, and 2
"0" in data // => true: array has an element "0"
1 in data // => true: numbers are converted to strings
3 in data // => false: no element 3




//4.9.4 The instanceof Operator
/* instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. */

object instanceof constructor



object
//The object to test.

constructor
//Function to test against


let d = new Date(); // Create a new object with the Date() constructor
d instanceof Date // => true: d was created with Date()
d instanceof Object // => true: all objects are instances of Object
d instanceof Number // => false: d is not a Number object
let a = [1, 2, 3]; // Create an array with array literal syntax
a instanceof Array // => true: a is an array
a instanceof Object // => true: all arrays are objects
a instanceof RegExp // => false: arrays are not regular expressions

//If the left-side operand of instanceof is not an object, instanceof returns false. 
//If the righthand side is not a class of objects, it throws a TypeError.




//4.10.1 Logical AND (&&)
/*The logical AND (&&) operator (logical conjunction) for a set of operands is true if and only if all of its operands are true. */


expr1 && expr2

//Examples of expressions that can be converted to false are:
null;
NaN;
0;
empty string ("" or '' or ``);
undefined


x === 0 && y === 0 // true if, and only if, x and y are both 0

let o = {x: 1};
let p = null;
o && o.x // => 1: o is truthy, so return value of o.x
p && p.x // => null: p is falsy, so return it and don't evaluate p.x

if (a === b) stop(); // Invoke stop() only if a === b
(a === b) && stop(); // This does the same thing



//4.10.2 Logical OR (||)
/*The logical OR (||) operator (logical disjunction) for a set of operands is true if and only if one or more of its operands is true. */

expr1 || expr2


//4.10.3 Logical NOT (!)
//Returns false if its single operand can be converted to true; otherwise, return true.


//4.11 Assignment Expressions

//JavaScript uses the = operator to assign a value to a variable or property.


i = 0; // Set the variable i to 0.
o.x = 1; // Set the property x of object o to 1.

//The = operator expects its left-side operand to be an l-value
//It expects its right-side operand to be an arbitrary value of any type.

/* As a side effect, the = operator assigns the value on the 
right to the variable or property on the left so that future references 
to the variable or property evaluate to the value. */

/* The assignment operator has right-to-left associativity, 
which means that when multiple assignment operators appear in an expression, 
they are evaluated from right to left. */
i=j=k=0;



//4.11.1 Assignment with Operation

//Table 4-2. Assignment operators
/*Operator Example Equivalent
+=      a += b      a = a + b
-=      a -= b      a = a - b
*=      a *= b      a = a * b
/=      a /= b      a = a / b
%=      a %= b      a = a % b
**=     a **= b     a = a ** b
<<=     a <<= b     a = a << b
>>=     a >>= b     a = a >> b
>>>=    a >>>= b    a = a >>> b
&=      a &= b      a = a & b
|=      a |= b      a = a | b
^=      a ^= b      a = a ^ b
*/




//In most cases, the expression 
a op= b 
// is equivalent to the expression 
a = a op b 
//the expression a is evaluated once. In the second, it is evaluated twice.
//the two cases will differ only if a includes side effects such as a function 
//call or an increment operator.


//4.12 Evaluation Expressions
//4.12.1 eval()

eval(string)
//The eval() function evaluates or executes an argument.


//Return value

/*The completion value of evaluating the given code. If the completion value is empty,
undefined is returned.*/


//the String constructor is specified and eval() returns a String object 
//rather than evaluating the string.

eval(new String('2 + 2')); // returns a String object containing "2 + 2"
eval('2 + 2');             // returns 4


eval("var y=3;") //undefined
//if the function calls eval("var y = 3;"), it declares a new local variable y.

eval("let x=3;")
/* if the evaluated string uses let or const, the variable or constant 
declared will be local to the evaluation and will not be defined in the calling
environment. */

//Using eval

var x = 2;
var y = 39;
var z = '42';
eval('x + y + 1'); // returns 42
eval(z);           // returns 42

//The first evaluates the string "x + y + 1"; the second evaluates the string "42".



//Using eval to evaluate a string of JavaScript statements

/*This string consists of JavaScript statements that assigns z a value of 42 
if x is five, and assigns 0 to z otherwise.
When the second statement is executed, eval() will cause these statements
to be performed, and it will also evaluate the set of statements 
and return the value that is assigned to z. */


var x = 5;
var str = "if (x == 5) {console.log('z is 42'); z = 42;} else z = 0;";

console.log('z is ', eval(str)); // z is 42


//Last expression is evaluated

var str = 'if ( a ) { 1 + 1; } else { 1 + 2; }';
var a = true;
var b = eval(str);  // returns 2

console.log('b is : ' + b);

a = false;
b = eval(str);  // returns 3

console.log('b is : ' + b);





//4.13 Miscellaneous Operators

//4.13.1 The Conditional Operator (?:)

condition ? exprIfTrue : exprIfFalse

condition //An expression whose value is used as a condition.

exprIfTrue //An expression which is evaluated if the condition evaluates to a truthy value 
//(one which equals or can be converted to true).

exprIfFalse //An expression which is executed if the condition is falsy 
//(that is, has a value which can be converted to false).



//Besides false, possible falsy expressions are: 
//null, NaN, 0, the empty string (""), and undefined.


var x =0;
x > 0 ? x : -x; // -0

var age = 26;
var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer"


greeting = "hello " + (username ? username : "there");

//This is equivalent to,the following if statement: 
greeting = "hello ";
if (username) {
greeting += username;
} else {
greeting += "there";
}


//4.13.2 First-Defined (??) ,nullish coalescing

/*The nullish coalescing operator (??) is a logical operator
that returns its right-hand side operand when its left-hand side operand 
is null or undefined, and otherwise returns its left-hand side operand. */

leftExpr ?? rightExpr





/*  If the expression a has no side effects, 
then the expression a ?? b is equivalent to: */

a ?? b //is equivalent to:
(a !== null && a !== undefined) ? a : b



/* e to || being a boolean logical operator, the left hand-side operand 
was coerced to a boolean for the evaluation and 
any falsy value (0, '', NaN, null, undefined) was not returned.  */
let count = 0;
let text = "";

let qty = count || 42;
let message = text || "hi!";
console.log(qty);     // 42 and not 0
console.log(message); // "hi!" and not ""



(a ?? b) || c // ?? first, then ||
a ?? (b || c) // || first, then ??
a ?? b || c // SyntaxError: parentheses are required



//4.13.3 The typeof Operator


//The type of operator returns a string indicating the type of the unevaluated operand.

typeof operand
typeof(operand)



typeof(undefined) //'undefined'
typeof(null) //'object'
typeof(true) && typeof(false) //'boolean'
typeof(NaN) //'number'
typeof(Number(1)); //'number'
typeof(String()) //'string'
typeof(Function(a)) //'function'
typeof(Object())  //'object'


// If the value is a string, wrap it in quotes, otherwise, convert
(typeof value === "string") ? "'" + value + "'" : value.toString()




//4.13.4 The delete Operator

//delete operator removes a property from an object; 


delete expression
// Where expression should evaluate to a property reference, e.g.:

delete object.property
delete object['property']


object //The name of an object, or an expression evaluating to an object.


let o = { x: 1, y: 2}; // Start with an object
delete o.x; // Delete one of its properties
"x" in o // => false: the property does not exist anymore

let a = [1,2,3]; // Start with an array
delete a[2]; // Delete the last element of the array
2 in a // => false: array element 2 doesn't exist anymore
a.length // => 3: note that array length doesn't change, though

let o = {x: 1, y: 2};
delete o.x; // Delete one of the object properties; returns true.
typeof o.x; // Property does not exist; returns "undefined".
delete o.x; // Delete a nonexistent property; returns true.
delete 1; // This makes no sense, but it just returns true.
// Can't delete a variable; returns false, or SyntaxError in strict mode.
delete o;
// Undeletable property: returns false, or TypeError in strict mode.
delete Object.prototype;


//4.13.7 The comma Operator (,)

/*The comma operator (,) evaluates each of its operands (from left to right)
 and returns the value of the last operand.  */
 
expr1, expr2, expr3...
//One or more expressions,the lastof which 
//is returned as the value of the compound expression.


var x = 1;
x = (x++, x);
console.log(x); // expected output: 2


i=0, j=1, k=2;
//basically equivalent to:
i = 0; j = 1; k = 2;
