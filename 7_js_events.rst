====
JQuery Events & Effects
====

**Reading**

* JavaScript from Beginner to Professional, Ch. 11
* https://www.w3schools.com/js/js_events.asp*
* http://www.w3schools.com/jquery/jquery_events.asp
* http://www.w3schools.com/jquery/jquery_ref_events.asp
* http://www.w3schools.com/jquery/jquery_ref_effects.asp

**Summary**

* What are JavaScript events?
* Event listeners
* Event targets
* The event object
* jQuery effects
* jQuery animation
* jQuery filters


**Events** 

HTML events are "things" that happen to HTML elements that occur whenever the user or browser does anything on the page. This can include user-directed actions like clicking on an element less-visible actions like when a page finishes loading.

See a list of common HTML events at https://www.w3schools.com/jsref/dom_obj_event.asp

**Event Handlers**

Browsers can execute JavaScript code (an **event handler**) when an event happens.

The simplest form of event handler is an explicit command on an HTML element, like:
::

    <button onclick="alert(this.innerText)">Click me</button>

where the **onclick** attribute specifies JS code to execute. Here, **this** refers to the element generating the event.

Attaching complex JS code to an event handler can be messy so it's more common to specify a function that will  be invoked.
::

    <button onclick="showAlert(this)">Click me</button>

    <script>
      const showAlert = (element) => {
        alert(element.innerText);
      }
    </script>

Rather than define the event handler in HTML, you can **register** an event handler (attach it to an HTML element) with JS:
::

const myFunction = (e) => {
  // 'e' is the event object. 'target' is the element where the event occurred
  alert(e.target.innerText);
}
document.getElementById("myButton").addEventListener("click", showAlert);

https://www.w3schools.com/jsref/met_element_addeventlistener.asp

JQuery provides a simplified syntax for registering an event handler:
::

    const buttons = $('button');
    buttons.on("click", (e) => {
        alert(e.target.innerText);
    });

or with a ‘named’ function:
::

    const btnClick = (e) => {
        alert(e.target.innerText);
    };
    buttons.on("click", btnClick);
    
**event target** is the object that fired an event.

JQuery provides a special variable - **$(this)** - referring to the the event target.
::

    buttons.on("click", () => {
     console.log($(this).text());
    });

* Identifies which DOM element fired the event
* If you need to work with the target element across many lines of code, you can save the jQuery version to a variable with a similar name, 
* Don't use **this** as a variable name, as that would conflict with a global variable,

**Event objects**

The browser can also pass an event object to event listeners, with information about the event. Your event handler can make this object available as a local variable:
::

    buttons.on("click", (e) => {
      console.log("target = " + e.target);
      console.log("x = " + e.pageX);
      console.log("y = " + e.pageY);
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