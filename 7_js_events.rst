====
JQuery Events & Effects
====

**Reading**

* http://thomaswilburn.github.io/textbook/build/events.html 
* http://www.w3schools.com/jquery/jquery_events.asp
* http://www.w3schools.com/jquery/jquery_ref_events.asp
* http://www.w3schools.com/jquery/jquery_ref_effects.asp 

**Summary**

* What are events?
* Event listeners
* Event targets
* The event object
* jQuery effects
* jQuery animation
* jQuery filters


**Events** 

Occur Whenever the user does anything on the page--moves the mouse, presses a key, navigates forward or backward--or whenever the page itself changes.

**Event listeners**
* functions the browser will execute when a specific event happens.
* You can ‘register’ for event notification with anonymous function syntax:
::

    var buttons = $('button');
    buttons.on('click', function() {
     console.log('You rang?');
    });

or with a ‘named’ function:
::

    var btnClick = function() {
      console.log("You've got events!");
    };
    buttons.on('click', btnClick);
    
**event target** is the object that fired an event. When the browser calls the event listener, it passes a special variable - **$(this)** - referring to the the event target.
::

    buttons.on('click', function() {
     console.log($(this).text());
    });

* Identifies which DOM element fired the event
* If you need to work with the target element across many lines of code, you can save the jQuery version to a variable with a similar name, 
* Don't use **this** as a variable name, as that would conflict with a global variable,

**Event objects**

The browser can also pass an event object to event listeners, with information about the event. Your event handler can make this object available as a local variable:
::

    buttons.on('click', function(e) {
      console.log(“target = “ + e.target);
      console.log(“x = “ + e.pageX);
      console.log(“y = “ + e.pageY);
    });
    

jQuery Effects
____

**Fade**
::

    $(selector).fadeIn(speed,callback);

* speed can be ‘slow’, ‘fast’, or milliseconds
* callback is an optional function to call when fade completes
 
Other commands:

.fadeOut();
.fadeToggle();
.fadeTo(speed,opacity,callback); // speed and opacity required


**Slide** an element up or down.

**Animate** a specified set of CSS parameters (e.g. size, position, opacity)
::

    $(selector).animate({params},speed,callback);
    $("div").animate({left: '250px'});


* To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute
* color animation is not included in the core jQuery library. To animate color, you need to download the Color Animations plugin from jQuery.com


**JQuery filter** commands allow you to select a subset of elements returned by a JQuery command. The filter criteria are essentially a secondary query using standard JQuery selectors.

For example, this command would return only p tags that have a class of 'intro':
::

    $("p").filter(".intro");

While this command would do the opposite, returning only p tags that do NOT have the 'intro' class:
::

    $("p").not(".intro");

See details at http://www.w3schools.com/jquery/jquery_traversing_filtering.asp