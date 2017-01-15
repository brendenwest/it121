====
Conditional Logic
====

**Reading**
* http://thomaswilburn.github.io/textbook/build/conditionals.html 
* http://www.w3schools.com/js/js_comparisons.asp
* http://www.w3schools.com/js/js_if_else.asp 

**Summary**

* comparison expressions
    - equality/inequality operators
    - logical operators
* conditional statements
* switch statements

**Comparisons & Conditions**

Comparison expressions evaluate to ‘true’ or ‘false’ using mathematical and logical operators.

Equality Operators:  <, >, <=, >=, ==, !=, ===

    var x = 3;
    var y = 4;
    
    (x == 3) // true
    
    (x == “3”) // also true. JS can auto-convert strings to numbers
    
    (x === “3”) // false because 3 & “3” are different data types

    (x != y) // true

    (x <= y) // true


**Logical operators**

&& and

|| or

! not

    (x < y) && (x > 0) // true because both expressions are true

    (x < y) || (x > 6) // true because at least one expression is true

    !(x == 3) // false because (x == 3) is ‘true


**Conditional Statements**

If...else statements can have one or more expressions at each branch, and any number of branches. Each branch is exclusive.

    if (<expression>) {
     // <expression> evaluated to true
    } else {
     // <expression> evaluated to false
    }


if … else statements are exclusive and can include any number of conditions:

    var age = 18;
    if (age < 18) {
       document.write(“Sorry, you can’t vote”);
    } else if (age < 21) {
       document.write(“You can vote, but you can’t drink”);
    } else {
       document.write(“Welcome to adulthood. Do whatever you want”);
    }

if statements can be nested:

    var age = 30;
    var isMatinee = true;
    var ticketPrice;

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

- special type of if ... else

    var ageGroup = (age > 65) ? “senior” : “regular”;

**Switch**

Value of <expression> is compared against each case. If the value and case match, the code in that block is executed. JavaScript will continue comparing unless it hits a ‘break’ command.

    switch (expression) {
    case value1:
        <code>
        break;
    case value2:
        <code>
        break;
    default:
        <code>
    }


- Expression can be a variable or a comparison statement
- Each case is a specific value. Value can be any primitive JS data type (number, string, boolean)
- Cases don’t have to be exclusive. If you don’t include ‘break’, the next statement will be checked.

    var region = “north”;
    switch (region) {
    case “east”:
        // do something
        break;
    case “west”:
        // do something
        break;
    default:
        // code for any other regions
    }


Multiple cases can share the same code block.

    switch (region) {
    case “east”:
    case “west”:
        // do something
        break;
    case “south”:
        // do something
        break;
    default:
        // do something
    }


Switch can be nested in if..else and vice versa.

    switch (timeOfDay) {
    case “morning”:
        // do something
    case “afternoon”:
        if (isWeekend) {
            // take a nap
        } else {
            // keep working
        }
        break;
    
    case “evening”:
        // do something
        break;
    default:
        // do something
    }
