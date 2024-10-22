JavaScript Objects
---

### Reading

* JavaScript from Beginner to Professional, Ch. 7, 8
* https://www.w3schools.com/js/js_objects.asp
* https://www.w3schools.com/js/js_object_definition.asp
* https://www.w3schools.com/js/js_classes.asp
* https://www.w3schools.com/js/js_this.asp
* https://www.tutorialspoint.com/javascript/javascript_objects.htm

### Learning Outcomes

* JavaScript objects
* object properties & methods
* object constructors
* JavaScript classes

### Objects

Software programs use `objects` to simulate real-world objects and to encapsulate logic, so that programs can use these objects without knowing their internal details.

JavaScript differs from most `object-oriented` programming languages, which use `classes` to define objects and inheritance.

Instead, JS objects can be defined literally as a collection of `key-value` pairs like so:

    const student = { name: "Jim Jones", year: 1, major: "web" }

- `keys` must be strings
- `values` can be any JavaScript data type - string, number, array, boolean, or another object
- keys and values are separated by a colon
- key-value pairs are separated by a comma. There is no comma after the last pair
- keys are sometimes referred to as object 'properties'
 
Object items have no sequence (or index number). Instead, values are accessed by key using either approach below:
::

    console.log(student.name);
    console.log(student["name"]);

### Object Methods

JavaScript objects can contain `methods`, which are functions scoped within an object.

    const student = {
      firstName: "Mary",
      lastName: "Jones",
      fullName: () => {
           return `${this.firstName} ${this.lastName}`;
        }
    };

Methods perform an action and are invoked or ‘called’ like this (NOTE the parens):

    document.write( student.fullName() );

In the above example, the fullName() method ‘returns’ a string value that combines firstName and lastName. It uses **this** to reference its containing.object.

### Object Constructors

JS objects can also be defined with a `constructor` function:

    // note we still have to use 'classic' syntax
    function Student(name, year, major) {
        this.name = name;
        this.year = year;
        this.major = major
    }

    const student1 = new Student("Jim Jones", 1, "web");
    const student2 = new Student("Alicia Rashad", 3, "database");


### Object Iteration

You can loop through an object’s properties:

    for (let prop in student) {
      console.log(prop); // outputs the key name e.g. “name”
      console.log(student[prop]); // outputs the value for a given key 
    }

    for (const [key, value] of Object.entries(student)) {
        console.log(`${key}: ${value}`);
    }

You can also retrieve `keys` or `values` as an array:

    console.log(Object.keys(student));
    console.log(Object.values(student));

### (some) JavaScript Built-in Objects

- Array
- console
- Math - http://www.w3schools.com/js/js_math.asp 
- Date - http://www.w3schools.com/js/js_date_methods.asp 
 
Global browser objects:

- window - http://www.w3schools.com/js/js_window.asp 
- document - http://www.w3schools.com/js/js_htmldom.asp 


### Object Inheritance

Unlike classic object-oriented languages, JavaScript objects inherit properties and methods from a `prototype` property.

Modifying an object's prototype allows adding to or changing of properties (or methods) for `all` instances of that object type. For example:

    // add new property to all 'Student' object instances
    Student.prototype.full_time = True;

NOTE - JS does not limit what objects can be modified. **Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.**

### JavaScript Classes

Because developers used to a `class-based` structure have struggled with understanding JS, ES6 introduced `classes` which provide a facade over existing JS object syntax.

JS class declarations are not `hoisted` in a program and you must declare a class before using it.

Classes are defined with the `class` keyword and can have a `constructor` method.

    class Student {
      constructor(name, year, major) {
        this.name = name;
        this.year = year;
        this.major;
      }
    }

    const student1 = new Student("Jim Jones", 1, "web");
    const student2 = new Student("Alicia Rashad", 3, "database");

Classes can inherit from parent classes using syntax similar to traditional class-based languages.

    class Person {
      constructor(name) {
        this.name = name;
      }
    }

    class Student extends Person {
      constructor(name, year, major) {
        super(name);   // super() method refers to the parent class
        this.year = year;
        this.major;
      }
    }
