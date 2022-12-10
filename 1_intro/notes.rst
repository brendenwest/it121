====
Intro to JavaScript
====

**Reading**

* JavaScript from Beginner to Professional, Ch. 1 - 2
* http://www.w3schools.com/js/js_syntax.asp (read up thru data types)

**Summary**

* JavaScript Intro
* variables
* expressions
* operators
* data types

**JavaScript Intro**

JavaScript (JS) is a general-purpose programming language developed around 1995. As an *interpreted* language, JS is relatively easy to for beginning developers and for many years it has been the de facto language of web pages (software that runs in a web browser).

Since 2009, with the introduction of **node.js**, JS has also become popular for developing high-performance web services and for automating IT processes.

*Classic* JS has loose syntax rules. Changes introduced in 2015 (known as *ES6*) are stricter and examples in this class will use the newer format.

**Developer Console**

Most modern web browsers (e.g. Safari, Chrome, Edge) have developer tools, including a *console* that allows one to run JavaScript commands directly. Use the console to practice simple JS commands and expressions.


**Expressions**

Programs are usually composed of expressions - code that evaluates to a single value. The most basic expression is a single value, but expressions usually involve some combination of basic expressions & operators.

**Variables**

JavaScript has several *primitive* data types for storing values. All other variables and objects are composed of these:

- number
- character
- bool

Variables are declared and assigned a value in a statement with this basic syntax:
::

    let <name> = <value>;  // defines a variable that may change
    const <name> = <value>;  // defines a constand value that cannot change

for example:
::

    let age = 32;
    const pi = 3.14;
    let name = "jim";  // this is a *string* composed of multiple character values

* Variable names cannot match **reserved** words (e.g. JavaScript commands)
* Variable names must begin with a letter and cannot contain spaces or special characters
* Unlike many languages, JS does not require you specify the data **type**
* Full rules at http://www.w3schools.com/js/js_variables.asp
* Value assigned to a variable can be literal or the result of an **expression**:
::

    let x = 10;
    let x = 5 + 5;

After a variable is declared, it can be redefined like so:
::

    x = 15;

**Numbers** - can be any valid numeric value:
::

    let x = 1;
    let y = 1.5;
    let z = -3;

Javascript has global methods that apply to numbers:
::

    Number("123") // returns a number
    parseInt(1.5) // returns integer portion of the number
    parseInt("XYZ-123") // returns NaN
    parseFloat(1.5) // returns floating-point value

Javascript also has many number-specific methods:
::

    let x = 1.2345
    x.toFixed(2) // returns 1.23

* Number methods return a new value. They do not change the original variable
* See a full list of numeric methods at - http://www.w3schools.com/js/js_number_methods.asp 


**Strings** - encapsulate a sequence of characters

* Strings are delimited by single or double quotes
* Characters can be letters, numbers, or symbols
::

    let name = "john";
    let name2 = "John"; // values are case sensitive
    let name3 = "O\"Donnell" // characters matching the delimiter need to be escaped

* Note - please use a consistent style for delimiters.


JavaScript provides a range of string-specific methods, such as: 
::

    let address = "1234 First ave, Seattle, WA, 981234";
    address.length // length is a property, not a method
    address.toUpperCase() // returns uppercase version of string
    address.toLowerCase() // returns lowercase version of string
    address.replace("Seattle", "Bellevue"); // replaces first instance of 'Seattle'    

JavaScript strings are sequences of characters, so you can access & change portions of the string based on their **index** (position). The first character in a string has an index of zero.
::

    address.charAt(2); // returns '3' which is the 3nd letter
    address.indexOf("1234");  // returns zero because address begins with '1234' 
    address.lastIndexOf(","); // returns 27 for position of last comma in address
    address.search("OR"); // returns -1 if not found
    address.substring(16,23); // returns 'Seattle' (characters 16 thru 22)

**Note** - This method extracts the characters between "start" and "end", not including "end" itself.

If "start" is greater than "end", this method will swap the two arguments, meaning str.substring(1,4) == str.substring(4,1)
::
 
    let address2 = address.replace("Seattle", "Bellevue");

Replace returns a new string. By default, the replace() function replaces only the first match.

Strings can be combined with +
::

    let name = "dave" + " Jones";

See a full list of string methods at -  http://www.w3schools.com/js/js_string_methods.asp

**Boolean** variables take only true or false values
::

    let isWinter = true;
    let isSummer = false;
    let isMinor = (age < 18)

**null & undefined**

JavaScript has several ways to indicate a variable has no value.

**undefined** - means the variable hasn't yet been assigned a value
::

    let x; // console.log(x) returns ‘undefined’

**null** - means the variable has been defined but has no value. Important for distinguishing from a value of zero.
::

    let person = null;     // Value is null, but type is still an object
 

**Expressions & Operators**

An expression is a combination of values, variables, and operators which evaluates to a single value.

Javascript uses arithmetic operators ( + - *  / %) to compute values
::

    let x = 3 + 4 - 2;
    let y = x/4;
    let z = 3*y;

Modulus (remainder) - %
::

    let y = 10 % 2; // returns 0
    let z = 10 % 3; // returns 1

Increment operators: +=, -=, \*=, /=, %=
::

    let x = 3;
    x += 5; // same as x = x + 5

**String Contatenation**

Strings can be contatenated (combined) with a plus sign.
::

  let name = "davey" + " Jones";

**Comments**

JavaScript code can include comments that are not executed. Comments can be on the same line as code:
::

    let x = 5;   // this here explanation not executed

or on a separate line:
::

    // let x = 6;   entire line ignored

Comments can span multiple lines:
::

    /*
    This is a really long comment
    that spans multiple lines
    */

**Scripting**

For the most part, JavaScript code runs in HTML web pages. Code can be inline between **script** tags:
::

    <html>
    <body>
        <h2>Assignment 1</h2>
        <script>
            /* this is a comment
             */
            let x = 5;
            let firstname = "ted";
            document.write(y);
        </script>
    </body </html>

 
Code can also be included into a web page from an external source file:
::

    <html>
    <body>
        <h2>Assignment 1</h2>
        <script src="code.js"></script>
    </body </html>


Note - External script files should not contain <script></script> tags.


**User Input**

prompt - presents message and text-entry box. Text entry returned to script as string variable.
::

    let name = prompt(“What is your name?”);

Confirm - presents message along with ‘OK’ and ‘Cancel’ buttons . Returns ‘true’ if user selects OK and ‘false’ if user selects Cancel.
::

    let proceed = confirm("Do you want to proceed?");