====
Functions
====

**Reading**

* http://thomaswilburn.github.io/textbook/build/functions.html 
* http://www.w3schools.com/js/js_functions.asp
* https://www.tutorialspoint.com/javascript/javascript_functions.html

**Summary**

* function definition
* parameters
* returning values
* calling functions

JavaScript supports functions, which are self-contained blocks of code that perform a specific task. Functions are useful for encapsulating code that will be re-used, and can make programs easier to read and maintain.

JavaScript functions can be defined with the following format:

    function functionName(<parameter>) {
      <code block>
    }

- Code within the function executes when the function is ‘called’ or ‘invoked’.
- Functions can contain any valid JS code.
- Functions can be called with optional parameters inside parens.
- JavaScript **hoists** functions defined like this, so they can be referenced by code earlier in the script.
- Parameters serve as local variables within the function.  
- Parameters can be any valid JS variable or object, and should use the same naming conventions as other variables,

Functions can perform work:

    function writeMessage(message) {
      console.log(message);
    }

Functions can also **return** a value to the code that called the function:

    function multiply(param1, param2) {
      var factor = 0.5;
      return param1 * param2 * factor;
    }
    var x = multiply(3,3);  // x = 4.5
    var y = multiply(6,4);  // y = 12

Variables defined within a function have **local scope** within the function and aren't accessible elsewhere:

    function multiply(param1, param2) {
      var factor = 0.5;
      return param1 * param2 * factor;
    }
    console.log(factor); // generates Uncaught ReferenceError: factor is not defined

- variables defined outside the function have **global scope** and are available within the function.

**Alternate function definition**

JavaScript treats functions as first-class objects that can be assigned to a variable and passed to other functions.

A function expression can assign an **anonymous** function to a variable, where the function definition is parsed once.

    var multiply = function(x, y) {
       return x * y;
    };
    var x = multiply(3,3);
 

A function expression can also assign a ‘named’ function to a variable. The function name can be referenced independent of the variable. 

    var multiply = function func_name(x, y) {
       return x * y;
    };

- behaves same as anonymous, but 'func_name' can appear when function is written out as a string.
 

More details at - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

**Higher-order functions**

Higher-order functions are JavaScript functions that take a function as a parameter. 

Array.sort() is a typical HOF that accepts a custom function to sort array contents. (remember default Array sort doesn't work for numeric data).

    var grades = [1, 12, 10, 9, 8];
    document.write("<li>grades sorted alpha:" + grades.sort()); // outputs: 1,10,12,8,9
    
    // Array.sort() passes pairs of values to sortValuesAscending 
    
    var sorted_grades = grades.sort(sortValuesAscending); 
    document.write("<li>grades sorted numerically:" + sorted_grades); // Output: 1,8,9,4,10,12
    
    // Sorts array elements in ascending order numerically 
    function sortValuesAscending(first, second)
    {
        if (first == second)
            return 0;
        if (first < second)
            return -1;
        else
            return 1; 
    }
 

**Templating**

Functions can be useful for separating data from HTML formatting:

    var students = [ 
    {name:"jim",id:32}, 
    {name:"mary",id:12},
    {name:"steve",id:5},
    {name:"sue",id:27} 
    ];
    for (s in students) {
       // s is the ‘index’ number of current item in the student array
       document.write( linkForStudent(students[s]) );
    } 
    function linkForStudent(student) {
       return "<li><a href='http://myschool.org/profile?id=" +student.id+ "'>" + student.name+"</a>";
    }
