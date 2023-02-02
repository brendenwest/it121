====
Conditional Logic
====

**Reading**

* JavaScript from Beginner to Professional, Ch. 4
* http://www.w3schools.com/js/js_comparisons.asp
* http://www.w3schools.com/js/js_if_else.asp 

**Learning Outcomes**

* comparison expressions
    - equality/inequality operators
    - logical operators
* conditional statements
* switch statements

**Comparisons & Conditions**

Comparison **expressions** evaluate to ‘true’ or ‘false’ using mathematical and logical operators.

::

    <, >, <=, >=, ==, !=, ===

Comparisons take the basic form:

    (<EXPRESSION> <OPERATOR> <OPERATOR)

For example:
::

    const x = 3;
    const y = 4;
    
    (x == 3)    // true
    (x == "3")  // also true. JS can auto-convert strings to numbers
    (x === "3") // false because 3 & "3" are different data types
    (x != y)    // true
    (x <= y)    // true
    (x >= y)    // false


**Logical operators**

&& means **and**

|| means **or**

!  negates the expression following it

::

    (x < y) && (x > 0)  // `true` because both expressions are `true`
    (x < y) || (x > 6)  // `true` because at least one expression is `true`
    !(x == 3)           // `false` because (x == 3) is `true`


**Conditional Statements**

JavaScript programs can use conditional blocks to control which code should be executed, based on the result of one or more expressions.

A simple conditional block may have just one statement:

::

    if (<EXPRESSION>) {
     // <expression> evaluated to true
    }

Or the block may have any number of exclusive statements:

::

    if (<EXPRESSION1>) {
      // <EXPRESSION1> evaluates to `true`
    } else if (EXPRESSION2) {
      // execute if expression2 evaluates to `true`
    } else {
      // execute if all other expressions evaluate to `false`
    }

`if … else` statements should be exclusive and can include any number of conditions:

::

    const age = 18;
    if (age < 18) {
       document.write("Sorry, you can’t vote");
    } else if (age < 21) {
       document.write("You can vote, but you can’t drink");
    } else {
       document.write("Welcome to adulthood. Do whatever you want");
    }

if statements can be nested:

::

    const age = 30;
    const isMatinee = true;
    let ticketPrice;  // value is initially undefined & modified later

    if (isMatinee) {
        // matinee price same for everyone
        ticketPrice = 6;
    } else {
        if (age >= 65 || age <= 12) {  // seniors & child price
           ticketPrice = 8;
        } else { // full adult price
           ticketPrice = 12;
        }
    }


**Ternary operator**

JavaScript has a special shorthand for simple conditional statements, where this block:

::

    let ageGroup;
    if (age > 65) {
      ageGroup = "senior";
    } else {
      ageGroup = "regular";
    }

Can be written like this:

::

    let ageGroup = (age > 65) ? “senior” : “regular”;

**Switch**

JavaScript also supports conditional blocks where the value of an expression is compared against different **cases**. If the value and case match, the code in that block is executed. JavaScript will continue comparing unless it hits a break command.

::

    switch (EXPRESSION) {
        case value1:
            // code to execute if expression evaluates to value1
            break;
        case value2:
            // code to execute if expression evaluates to value2
            break;
        default:
            // code to execute if no other conditions were met
    }

- EXPRESSION can be a variable or a comparison statement
- Each case corresponds to a specific value, which can be any primitive JS data type (number, string, boolean)
- Cases don’t have to be exclusive. If you don’t include ‘break’, the next statement will be checked.

::

    const region = "north";
    switch (region) {
        case "east":
            // do something for 'east'
            break;
        case "west":
            // do something for 'west'
            break;
        default:
            // code for any other regions
    }


Multiple cases can share the same code block.

::

    const region = "north";
    switch (region) {
        case "east":
        case "west":
            // do something for 'east' & 'west'
            break;
        case "south":
            // do something for 'south'
            break;
        default:
            // do something
    }


Switch can be nested in if..else and vice versa.

::

    switch (timeOfDay) {
        case "morning":
            // do something
        case "afternoon":
            if (isWeekend) {
                // take a nap
            } else {
                // keep working
            }
            break;
        case "evening":
            // do something
            break;
        default:
            // do something
    }
