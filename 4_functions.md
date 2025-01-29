Functions
---

### Reading

* JavaScript from Beginner to Professional, Ch. 6
* http://www.w3schools.com/js/js_functions.asp
* https://www.tutorialspoint.com/javascript/javascript_functions.htm
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

### Learning Outcomes

* function definition
* function parameters
* return values
* calling functions
* higher-order functions

JavaScript supports functions, which are self-contained blocks of code that perform a specific task. Functions are useful for encapsulating code that will be re-used, and can make programs easier to read and maintain.

JavaScript functions can be defined with the following format:

    // classic JavaScript
    function <NAME>(<PARAMETER>) {
      // code to execute goes here
    }

    // ES6 'fat arrow' syntax
    const <NAME> = (<PARAMETER>) => {
      // code to execute goes here
    }

- Code within the function executes when the function is `called` or `invoked`.
- Functions can contain any valid JS code.
- Functions can be called with optional parameters inside parens.
- Classic JavaScript `hoists` functions, so they can be referenced by code earlier in the script.
- `ES6 functions` must be defined before any code that references them
- Parameters serve as local variables within the function.  
- Parameters can be any valid JS variable or object, and should use the same naming conventions as other variables,
- In `E6 functions`, `this` refers to the function and not to the global application


Functions can perform work:

    const writeMessage = (message) => {
      console.log(message);
    }

Functions can also `return` a value to the code that called the function.

    const multiply = (param1, param2) => {
      let factor = 0.5;
      return param1 * param2 * factor;
      // this code never executes
    }
    let x = multiply(3,3);  // x = 4.5
    let y = multiply(6,4);  // y = 12

    console.log(factor); // generates Uncaught ReferenceError: factor is not defined

- Any code after the `return` statement is ignored
- variables defined within a function have `local scope` within the function and aren't accessible elsewhere:
- variables defined outside the function have `global scope` and are available within the function.

### Higher-order functions

Higher-order functions can take a function as a parameter. 

`Array.sort()` is a typical HOF that accepts a custom function to sort array contents. (remember default Array sort doesn't work for numeric data).

    // Sort array elements in ascending order numerically
    const sortValuesAscending = (first, second) =>
    {
        if (first == second)
            return 0;
        if (first < second)
            return -1;
        else
            return 1;
    }

    let grades = [1, 12, 10, 9, 8];
    document.write("<li>grades sorted alpha:" + grades.sort()); // outputs: 1,10,12,8,9
    
    // Array.sort() passes pairs of values to sortValuesAscending 
    
    let sorted_grades = grades.sort(sortValuesAscending);
    document.write("<li>grades sorted numerically:" + sorted_grades); // Output: 1,8,9,4,10,12 

### Templating

Functions can be useful for separating data from HTML formatting:

    let students = [
    {name:"jim",id:32}, 
    {name:"mary",id:12},
    {name:"steve",id:5},
    {name:"sue",id:27} 
    ];

    const linkForStudent = (student) => {
       return "<li><a href='http://myschool.org/profile?id=" +student.id+ "'>" + student.name+"</a>";
    }

    for (s in students) {
       // s is the ‘index’ number of current item in the student array
       document.write( linkForStudent(students[s]) );
    } 
