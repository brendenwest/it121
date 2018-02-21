====
Arrays & Loops
====

**Reading**

* http://thomaswilburn.github.io/textbook/build/arrays.html 
* http://www.w3schools.com/js/js_arrays.asp  
* http://www.w3schools.com/js/js_array_methods.asp 

**Summary**

* creating and populating arrays
* accessing array items
* array methods
* looping over array items
    - for loops
    - while loops

**Defining arrays**

Arrays store a **list** of values and can be defined using any of the below approaches:
::

    var names = []; // creates empty array
    var names = ["jim", "dave", "sara", "ann"]; 
    var names = [
    "jim",
    "dave",
    "sara",
    "ann"
    ];
    var names = "jim,dave,sara,ann".split(",")
 
Arrays can contain items of different data types:
::

    var myArray = ["jim", 32, true];

Array items are accessed by ‘index’ where index values start at zero:
::

    names[0];          // returns "jim"
    names[0] = "fred"; // replaces "jim" with "fred"
    names[4];          // returns undefined because names has only 4 items

 
Arrays have a length property:
::

    names.length // returns 4

Adding Array items:
::

    names.push("greg") // adds new item at end of array
    names.unshift("greg") // adds new item at start of array

- both methods return a value for the new length


Removing Array items:
::

    var name = names.pop() // removes & returns last item in array
    var name = names.shift() // removes & returns first item in array. Remaining items shift position to left.

Add/Remove simultaneously:
::

    names.splice(2,0,"mark","mary"); // adds new items at index 2. Removes zero items.
    names.splice(1,2); // removes two items, starting at index 1

Sorting Array items
::

    names.sort() // sorts array alphabetically
    names.reverse() // reverses array

 - sort will provide incorrect results for numeric array data. Need to use a compare function, which we’ll discuss a bit later.

Searching Arrays:
::

    names.indexOf("mark");   // returns index of first matched item
    names.lastIndexOf("mark");

- must be an exact match, not partial
- indexOf() & lastIndexOf() return -1 if the search term isn't in the array

Combining/Extracting Arrays
::

    var names = ["jim", "dave", "sara", "ann"];
    var names2 = ["mark","mary"];
    names.concat(names2) // adds names2 to names array

    var names3 = names.slice(1); // new array with items from index 1
    var names3 = names.slice(1,2); // new array with items from start index to end index, excluding end index

    var namesString = names.toString() // return array items as  comma-delimited string
    var namesString = names.join("|") // return array items as string delimited by | (or anything specified between quotes.

**Nested Arrays**
::

    var students = [["jim",20], ["dave",16], ["sara",18], ["ann",15]];
    // students[0] returns ["jim",20]
    // students[0][0] returns "jim"

**Loops**
Loops allow you to iterate through a sequence of items and perform the same operations on each.

for, in - loop through each item in an array object. Counter generated automatically.
::

    for (var n in names) {
        document.write(names[n] + "<br>");
    }

- n is a temporary variable (can be any valid name)
- with each iteration, n is assigned the 'index' number of the current array item

counted loops
::

    for (<expression1>; <expression2>; <expression3>) {
        // code to execute
    }

- <expression1> is executed once before the loop starts. You can set multiple values in this expression.
- <expression2> defines the condition for running the loop (or when it should stop).
- <expression3> is executed after each run of the code block.
::

    var names = ["jim", "dave", "sara", "ann"];
    for (var i = 0; i < names.length; i++) {
        document.write(names[i] + "<br>");
    }

- i is a counter variable scoped to the loop
- i is incremented with each pass of the loop
- loop runs until i equals array length

Variants:
::

    // loop through array in reverse order
    for (var i = names.length-1; i >= 0; i--) {
        document.write(names[i] + "<br>");
    }

    // loop through array skipping odd items
    for (var i = 0; i < names.length; i+=2) {
        document.write(names[i] + "<br>");
    }

**while loops**
::

    while(<condition>) {
        // code to be executed
    }

    var i = 0;
    while(names[i]) {
        console.log(names[i])
        i++;
    }

- if we forget to increment the counter, loop will run forever

Loops can contain any valid javascript code. For example:
::

    var ages = [25, 35, 30, 40];
    var sum = 0;
    var maxAge = 0;
    var minAge = 100;
    
    for (var i in grades) {
        sum += ages[i];
        if (ages[i] > maxAge) {
         maxAge = ages[i];
        }

        if (ages[i] < minAge) {
             minAge = ages[i];
        }
    }

    console.log("average = " + sum/ages.length);
    console.log("max age = " + maxAge);
    console.log("min age = " + minAge);

Use ‘break’ to end loop before final condition is reached:
::

    for (var i in names) {
        if names[i] == "dave" {
            document.write("Found Dave!<br>");
            break;
         }
    }

**Exercises**

Use this string for the following exercises:

    var students = "jim-m, sue-f, mary-f, ann-f, ted-m, frank-m, lisa-f";

- convert the string to an array,
- print the number of array items
- print the first array item
- print the last array item
- print each name (without gender)
- print each name with first letter capitalized
- print every other name
- print the total count of male & female students
- remove the last student from the array
- remove the first student from the array
- make a new array with a subset of students, using .slice()
