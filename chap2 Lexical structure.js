//2.2 Comments

// Any text between a // and the end of a line 
// is treated as a comment and is ignored by JavaScript. 
//Any text between the characters /* and */ is also treated as a comment; 


//2.3 Literals

//A "literal" is a data value that appears directly in a program. 
//The following are all literals:

12 // The number twelve
1.2 // The number one point two
"hello world" // A string of text
'Hi' // Another string
true // A Boolean value
false // The other Boolean value
null // Absence of an object


//2.4 Identifiers and Reserved Words

//An "identifier" is simply a name.

//identifiers are used to name constants, variables, properties, functions, and
//classes and to provide labels for certain loops in JavaScript code.

//A JavaScript identifier must begin with a letter, 
//an underscore (_), or a dollar sign ($).


//These are all legal identifiers:
i my_variable_name
v13
_dummy
$str

//2.4.1 Reserved Words
/*Many of these (such as if, while, and for) are reserved keywords that must
not be used as the names of constants, variables, functions, or classes */

//Others (such as from, of, get, and set) are used in limited
//contexts with no syntactic ambiguity and are perfectly legal as
//identifiers.

/*The simplest course is to avoid using any of these words as identifiers, 
except for from, set, and target, which are safe to use and are already 
in common use. */
as 
const 
export 
get 
null 
target
void
async 
continue 
extends 
if 
of 
this
while
await 
debugger 
false 
import 
return 
throw
with
break 
default 
finally 
in 
set 
true
yield
case 
delete 
for 
instanceof 
static 
try
catch 
do 
from 
let 
super 
typeof
class 
else 
function 
new 
switch 
var




//2.6 Optional Semicolons

//The rules of JavaScript Automatic Semicolon Insertion


//1 when the next line starts with code that breaks the current one 
//(code can spawn on multiple lines)
const hey = 'hey';
const you = 'hey';
const heyYou = hey + ' ' + you['h', 'e', 'y'].forEach((letter) => console.log(letter))
//2. when the next line starts with a }, closing the current block

//3. when the end of the source code file is reached

//4. when there is a return statement on its own line

//5. when there is a break statement on its own line

//6. when there is a throw statement on its own line

//7. when there is a continue statement on its own line



function foo() {
} // No semicolon

//...if it's an assignment:
var foo = function() {

}; // Semicolon

//...or a self invoking function:

(function () {

})(); // Semicolon


//if a statement begins with (, [, /, +, or -, there is a chance
//that it could be interpreted as a continuation of the statement before.

let x = 0 // Semicolon omitted here
;[x,x+1,x+2].forEach(console.log) // Defensive ; keeps this statement separate