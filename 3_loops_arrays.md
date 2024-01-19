Arrays & Loops
---

### Reading

* JavaScript from Beginner to Professional, Ch. 3 & 5
* http://www.w3schools.com/js/js_arrays.asp  
* http://www.w3schools.com/js/js_array_methods.asp 

### Learning Outcomes

* creating and populating arrays
* accessing array items
* array methods
* looping over array items
    - for loops
    - while loops
* higher-order array functions

### Defining Arrays

Arrays store a **list** of values and can be defined using any of the below approaches:

    let names = []; // creates empty array
    const names = ["jim", "dave", "sara", "ann"];
    const names = [
    "jim",
    "dave",
    "sara",
    "ann"
    ];
    const names = "jim,dave,sara,ann".split(",")
 
Arrays can contain items of different data types:

    const myArray = ["jim", 32, true];

Array items are accessed by ‘index’ where index values start at zero:

    names[0];          // returns "jim"
    names[0] = "fred"; // replaces "jim" with "fred"
    names[4];          // returns undefined because names has only 4 items

 
Arrays have a length property:

    names.length // returns 4

Adding Array items:

    names.push("greg") // adds new item at end of array
    names.unshift("greg") // adds new item at start of array

- both methods return a value for the new length


Removing Array items:

    var name = names.pop() // removes & returns last item in array
    var name = names.shift() // removes & returns first item in array. Remaining items shift position to left.

Add/Remove simultaneously:

    names.splice(2,0,"mark","mary"); // adds new items at index 2. Removes zero items.
    names.splice(1,2); // removes two items, starting at index 1

Sorting Array items

    names.sort() // sorts array alphabetically
    names.reverse() // reverses array

 - sort will provide incorrect results for numeric array data. Need to use a compare function, which we’ll discuss a bit later.

Searching Arrays:

    names.indexOf("mark");   // returns index of first matched item
    names.lastIndexOf("mark");

- must be an exact match, not partial
- indexOf() & lastIndexOf() return -1 if the search term isn't in the array

Combining/Extracting Arrays

    let names = ["jim", "dave", "sara", "ann"];
    let names2 = ["mark","mary"];
    names.concat(names2) // adds names2 to names array

    let names3 = names.slice(1); // new array with items from index 1
    let names3 = names.slice(1,2); // new array with items from start index to end index, excluding end index

    let namesString = names.toString() // return array items as  comma-delimited string
    let namesString = names.join("|") // return array items as string delimited by | (or anything specified between quotes.

Nested Arrays

    let students = [["jim",20], ["dave",16], ["sara",18], ["ann",15]];
    // students[0] returns ["jim",20]
    // students[0][0] returns "jim"


### Loops
Loops allow you to iterate through a sequence of items and perform the same operations on each.

`for, in` - loop through each item in an array object. Counter generated automatically.

    for (let n in names) {
        document.write(names[n] + "<br>");
    }

- n is a temporary variable (can be any valid name)
- with each iteration, n is assigned the 'index' number of the current array item

counted loops

    for (INITIALIZATION; TEST; UPDATE) {
        // code to execute
    }

- INITIALIZATION is executed once before the loop starts. You can set multiple values in this expression.
- TEST defines the condition for running the loop (or when it should stop).
- UPDATE is executed after each run of the code block.

Example:

    let names = ["jim", "dave", "sara", "ann"];
    for (let i = 0; i < names.length; i++) {
        document.write(names[i] + "<br>");
    }

- i is a counter variable set to 0 when the loop starts
- i is incremented with each pass of the loop
- loop runs until i equals the length of `names` array

Variants:

    // loop through array in reverse order
    for (let i = names.length-1; i >= 0; i--) {
        document.write(names[i] + "<br>");
    }

    // loop through array skipping odd items
    for (let i = 0; i < names.length; i+=2) {
        document.write(names[i] + "<br>");
    }

### while loops

    while (<condition>) {
        // code to be executed
    }

    let i = 0;
    while (names[i]) {
        console.log(names[i])
        i++;
    }

- if we forget to increment the counter, loop will run forever

Loops can contain any valid javascript statements. For example:

    let ages = [25, 35, 30, 40];
    let sum = 0;
    let maxAge = 0;
    let minAge = 100;
    
    for (let i in ages) {
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

Use `break` to exit a loop before final condition is reached:

    for (let i in names) {
        if names[i] == "dave" {
            document.write("Found Dave!<br>");
            break;
         }
    }

### Higher-order Array Methods

JavaScript arrays have a number of built-in methods that take a `function` as a parameter. Often this parameter is an `anonymous` inline function. These higher-order methods are similar to loops, but more concise and readable.

**filter** - Create an array containing only items that meet the function condition

    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    // pass each array item to an inline function.
    // Return only items that meet the function condition
    const result = words.filter(word => word.length > 6);

    console.log(result);
    // Expected output: Array ["exuberant", "destruction", "present"]

**map** - create an array with one item for each item in the source array

    const array1 = [1, 4, 9, 16];

    const array2 = array1.map(x => x * 2);

    console.log(array2);
    // Expected output: Array [2, 8, 18, 32]

**reduce** - executes a function on each element of the array, in order. Uses the return value from the calculation as input for the next element. The array `reduce()`` function results in a single value.

    const array1 = [1, 2, 3, 4];

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    // accumulator is the cumulative result of operating on each array element
    const sumWithInitial = array1.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );

    console.log(sumWithInitial);
