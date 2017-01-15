====
Variables & Operators
====

**Reading**

* http://thomaswilburn.github.io/textbook/build/gettingStarted.html
* http://www.w3schools.com/js/js_syntax.asp thru data types

**Summary**

* variables
* expressions
* operators
* data types

**Variables**

Javascript has several 'primitive' data types. All other variables and objects are composed of these:
- number
- string
- bool

Variables are declared and assigned a value with this syntax:

    var <name> = <value>;

for example:

    var age = 32;
    var name = "jim";

* Variable names cannot match 'reserved' words (e.g. JavaScript commands)
* Full rules at http://www.w3schools.com/js/js_variables.asp

Value assigned to a variable can be literal or the result of an expression:

    var x = 10;
    var x = 5 + 5;

After a variable is declared, it can be redefined like so ('var' not needed):

    x = 15;

**Numbers**

Javascript numbers can be any valid number value:

    var x = 1;
    var y = 1.5;

Javascript has global methods that apply to numbers:

    Number() // returns a number

    parseInt(1.5) // returns integer portion of the number

    parseInt("XYZ-123") // returns NaN

    parseFloat(1.5) // returns 1.5

Javascript also has number-specific methods:

    var x = 1.2345
    x.toFixed(2) // returns 1.23

* Number methods return a new value. They do not change the original variable.
* see http://www.w3schools.com/js/js_number_methods.asp 


**Strings**

String values are delimited by single or double quotes. 

    var name = "john";
    var name2 = "John"; // values are case sensitive
    var name3 = "O\"Donnell" // double-quotes need to be escaped

* Note - use a consistent style for delimiters.

    var address = "1234 First ave, Seattle, WA, 981234";
    address.length // length is a property
    address.indexOf("1234") // positions numbered from zero
    address.lastIndexOf("1234")
    address.search("OR") // returns -1 if not found

    var city = "Seattle";
    city.toUpperCase() // returns SEATTLE
    city.toLowerCase() // returns seattle
    address.substring(16,23); // parameters are start and end indices

Note - This method extracts the characters between "start" and "end", not including "end" itself.

If "start" is greater than "end", this method will swap the two arguments, meaning str.substring(1,4) == str.substring(4,1)
 
var address2 = address.replace("Seattle", "Bellevue");

Replace returns a new string. By default, the replace() function replaces only the first match.

Strings can be combined with +

    var name = "dave" + " Jones";

String methods - full list at http://www.w3schools.com/js/js_string_methods.asp

**Boolean**

Bool variables take only true or false values

    var isWinter = true;
    var isSummer = false;
    var isMinor = (age < 18)

**null & undefined**

With JavaScript, null is for objects, undefined is for variables, properties, and methods. To be null, an object has to be defined, otherwise it will be undefined.

undefined

    var x; // console.log(x) returns ‘undefined’

null

    var person = null;     // Value is null, but type is still an object
 

**Expressions & Operators**

An expression is a combination of values, variables, and operators, which computes to a value.

Javascript uses arithmetic operators ( + - *  / ) to compute values

    var x = 3 + 4 - 2;
    var y = x/4;
    var z = 3*y;

Modulus (remainder) - %

    var x = 10;
    var y = x % 2; // returns 0
    var z = x % 3; // returns 1

Assignment operations: +=, -=, *=, /=, %=

    var x = 3;
    x += 5; // same as x = x + 5

Comments

JavaScript code can include comments that are not executed. Comments can be on the same line as code:

    var x = 5;   // some explanation here, not executed

or on a separate line:

    // var x = 6;   entire line ignored

Comments can span multiple lines:

    /*
    This is a really long comment
    that spans multiple lines
    */

Scripting

For the most part, JavaScript code runs in a web page. Code can be inline:

    <html>
    <body>
        <h2>Assignment 1</h2>
        <script>
            /* this is a comment
             */
            var x = 5;
            var firstname = "ted";
            document.write(y);
        </script>
    </body </html>

 

Code can also be included into a web page from an external source file:

    <html>
    <body>
        <h2>Assignment 1</h2>
        <script src="code.js"></script>
    </body </html>


Note - External script files do not contain <script></script> tags.


**User Input**

prompt - presents message and text-entry box. Text entry returned to script as string variable.

    var name = prompt(“What is your name?”);

Confirm - presents message along with ‘OK’ and ‘Cancel’ buttons . Returns ‘true’ if user selects OK and ‘false’ if user selects Cancel.

    var proceed = confirm("Do you want to proceed?");