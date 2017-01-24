====
Objects
====

**Reading**

* http://thomaswilburn.github.io/textbook/build/objects.html 
* http://www.w3schools.com/js/js_objects.asp
* https://www.tutorialspoint.com/javascript/javascript_objects.htm

**Summary**

* object definition
* object properties
* object methods
* object constructors

**Notes**

We use use JavaScript ‘objects’ to simulate real-world objects in programs. Objects are like arrays (collections of values), but with named properties instead of sequential indexes.

JavaScript objects can be defined like so using a 'literal' syntax with key-value pairs:

    var student = { name: "Jim Jones", year: 1, major: "web" }  

- keys must be strings
- values can be any javascript data type - string, number, array, boolean,
- name:value pairs are separated by a comma. No comma after the last pair
 
Object keys can be referenced as properties (attributes) that describe the object. You can access object properties in two ways:

    console.log(student.name);
    console.log(student[“name”]);

**Object Iteration**

You can loop through an object’s properties:

    for (var prop in student) {
      console.log(prop); // outputs the key name e.g. “name”
      console.log(student[prop]); // outputs the value for a given key e.g. “Jim Jones”
    }
    
**(some) JavaScript Built-in Objects**

- Array
- console
- Math - http://www.w3schools.com/js/js_math.asp 
- Date - http://www.w3schools.com/js/js_date_methods.asp 
 
Global browser objects:

- window - http://www.w3schools.com/js/js_window.asp 
- document - http://www.w3schools.com/js/js_htmldom.asp 

**Object collections**

Arrays can contain a collection of custom objects:

    var students = [
    { name: "Jim Jones", year: 1, major: "web" }
    { name: "Dave Smith", year: 1, major: "itc" }
    { name: "Ann Hathaway", year: 2, major: "itc" }
    { name: "Loren Bacall", year: 2, major: "web" }
    ]; 
    document.write(students[0].name); // outputs ‘Jim Jones’

**Object Methods**

Objects can contain ‘methods’, which are functions bound to the object.

    var student = {
      firstName: “Mary”,
      lastName: "Jones",
      fullName: function() {
           return this.firstName + " " + this.lastName;
        }
    };
 
Functions perform an action and are invoked or ‘called’ like this (NOTE the parens):

    document.write( student.fullName() );

In the above example, the fullName() method ‘returns’ a string value that combines firstName and lastName. It uses ‘this’ as reference to its containing.object.