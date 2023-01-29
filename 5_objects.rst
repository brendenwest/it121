====
JavaScript Objects
====

**Reading**

* JavaScript from Beginner to Professional, Ch. 7, 8
* https://www.w3schools.com/js/js_objects.asp
* https://www.w3schools.com/js/js_object_definition.asp
* https://www.w3schools.com/js/js_this.asp
* https://www.tutorialspoint.com/javascript/javascript_objects.htm

**Summary**

* JavaScript objects
* object properties
* object methods
* object constructors

**Notes**

Software programs use ‘objects’ to simulate real-world objects and to encapsulate logic, so that programs can use these objects without knowing their internal details.

JavaScript objects are collections of data items, where each item is a `key-value` pair, and can be defined like so:
::

    const student = { name: "Jim Jones", year: 1, major: "web" }

- `keys` must be strings
- values can be any JavaScript data type - string, number, array, boolean, or another object
- keys and values are separated by a colon
- key-value pairs are separated by a comma. There is no comma after the last pair
- keys are sometimes referred to as object 'properties'
 
Object items have no sequence (or index number). Instead, values are accessed by key using either approach below:
::

    console.log(student.name);
    console.log(student["name"]);

**Object Iteration**

You can still loop through an object’s properties:
::

    for (let prop in student) {
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
::

    const students = [
    { name: "Jim Jones", year: 1, major: "web" },
    { name: "Dave Smith", year: 1, major: "itc" },
    { name: "Ann Hathaway", year: 2, major: "itc" },
    { name: "Loren Bacall", year: 2, major: "web" }
    ]; 
    document.write(students[0].name); // outputs ‘Jim Jones’

**Object Methods**

JavaScript objects can contain `methods`, which are functions contained within an object.
::

    const student = {
      firstName: "Mary",
      lastName: "Jones",
      fullName: () => {
           return `${this.firstName} ${this.lastName}`;
        }
    };
 
Methods perform an action and are invoked or ‘called’ like this (NOTE the parens):
::

    document.write( student.fullName() );

In the above example, the fullName() method ‘returns’ a string value that combines firstName and lastName. It uses **this** to reference its containing.object.