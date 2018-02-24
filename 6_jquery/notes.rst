====
jQuery & DOM
====

**Reading**

* http://www.w3schools.com/js/js_htmldom.asp 
* http://thomaswilburn.github.io/textbook/build/jQuery.html 
* http://www.w3schools.com/jQuery/jQuery_get_started.asp
* http://try.jQuery.com/

**Summary**

* HTML DOM 
* Intro to jQuery
* DOM traversal & manipulation

**HTML DOM**

Web browsers see each web page as a tree of objects (the Document Object Model or DOM). The DOM is a hierarchical tree of objects corresponding to tags (elements) in the page (e.g. <html>, <body>, <span>, etc.). 

All objects in the DOM behave like JavaScript objects, and have **properties**, **methods**, and **events**.

You can access DOM objects with JavaScript commands like so:
::

    var myDiv = document.getElementById("div1"); // returns a single element
    var myDiv = document.getElementsByTagName("div"); // may returns multiple elements
    var myDiv = document.getElementsByClassName("red-div"); // may returns multiple elements
 
Properties and methods of DOM objects differ quite a bit. For example <a> objects have properties like 'href' and 'target', while <img> objects have properties like 'src', 'width', and 'height'.

Some objects may have a collection of 'children' (aka child nodes). For example, a <ul> object may have multiple <li> children. These children can be accessed by index, as with other JavaScript arrays.

You can change DOM elements, or add new ones, programmatically, as in this example:
::

    <html>
    <body>
    <div id="intro">
    <ul id="list" />
    <script>
      var intro = document.getElementById("intro");
      intro.innerText = "This is my introduction";
      // add a list item
      var list = document.getElementById("list");
      var bullet = document.createElement("li");
      bullet.innerHTML = "first list item";
      list.appendChild(bullet);
    </script>
    </body>
    </html>

**jQuery Intro**

jQuery is a JavaScript framework that simplifies coding of interactive web pages

It ‘abstracts’ browser differences and language complexities, so developers can focus on what they want to accomplish,

It allows developers to find and modify page elements using CSS selectors.

The jQuery framework is included into the web page as a script source. Then jQuery commands are usually invoked after the ‘document ready’ event, when all elements have loaded:
::

    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jQuery/3.3.1/jQuery.min.js"></script>
    </head>
    <body>
    <script>
        $(document).ready(function(){
          // jQuery commands go here...
        });
    </script>
    </body>

**jQuery syntax**

jQuery commands begin with a $-sign and take the following form with: 
::

    $(SELECTOR).ACTION(); 

This applies a specific jQuery action (method) to one or more DOM elements returned by the ‘selector’. Selectors can be combinations of HTML tags, class names, and object ID’s. 

Examples:
::

    $(“div”).hide();            // hide all <div> tags
    
    $(“.container”).hide(); // hide tags with ‘container’ class
    
    $(“#first”).hide();         // hide single unique tag with id = ‘first’
    
    $(“div > li”).hide();       // hide <li> tags directly inside <div> tags
    
    $(this).hide();              // hide current tag
    
    $("[href]").hide();        // hide all elements with an ‘href’ attribute
 

Selectors can include jQuery-specific features such as; 
::

    :first           selects first element of the specified selector
    
    :first-child selects first child of the specific selector
    
    :even          selects even-numbered items in the collection returned by the selector (e.g. indexes 0, 2, 4, etc)
    
    :odd           selects odd-numbered items in the collection returned by the selector (e.g. indexes 1, 3, 5, etc)

 
See this page for a comprehensive set of jQuery selector examples - http://www.w3schools.com/jQuery/trysel.asp


**DOM Manipulation**

jQuery selector commands return an object that can be modified (manipulated) to change the web page appearance or behavior.

jQuery has a very wide set of manipulation commands, but a common task is to **get** or **set** the object’s content. jQuery has several simple methods for this:

* text() - Sets or returns the text content of selected elements
* html() - Sets or returns the content of selected elements, including embedded HTML markup
* val() - Sets or returns the value of form fields
