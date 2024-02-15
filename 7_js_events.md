Events & JQuery Effects
---

### Reading

* JavaScript from Beginner to Professional, Ch. 11
* https://www.w3schools.com/js/js_events.asp*
* http://www.w3schools.com/jquery/jquery_events.asp
* http://www.w3schools.com/jquery/jquery_ref_events.asp
* http://www.w3schools.com/jquery/jquery_ref_effects.asp

### Learning Outcomes

* What are DOM events?
* Event listeners & targets
* JavaScript Event objects
* jQuery effects, animation, & filters

### DOM Events

Web browsers fire `events` on HTML DOM elements whenever something happens on the page. This can include user-directed actions like clicking on an element or less-visible actions like when a page finishes loading.

See a list of common HTML events at https://www.w3schools.com/jsref/dom_obj_event.asp

#### Event Handlers

Browsers can execute JavaScript code when an event happens.

The simplest form of event handler is an explicit JS command on an HTML element, like so:

    <button onclick="alert(this.innerText)">Click me</button>

where the `onclick` attribute specifies code to execute. Here, `this` refers to the element generating the event.

Attaching complex JS code to an event handler can be messy so it's more common to specify a function that will  be invoked.

    <script>
      const showAlert = (element) => {
        alert(element.innerText);
      }
    </script>

    <button onclick="showAlert(this)">Click me</button>

Rather than define the event handler in HTML, you can `register` an event handler (attach it to an HTML element) with JS:

    const myFunction = (e) => {
      // 'e' is the event object. 'target' is the element where the event occurred
      alert(e.target.innerText);
    }
    document.getElementById("myButton").addEventListener("click", showAlert);

https://www.w3schools.com/jsref/met_element_addeventlistener.asp

JQuery provides a simplified syntax for registering an event handler:

    const buttons = $('button');
    buttons.on("click", (e) => {
      console.log("target = " + e.target);
      console.log("text = " + e.target.innerText);
      console.log("x = " + e.pageX);
      console.log("y = " + e.pageY);
    });

or using a `named` function:

    const btnClick = (e) => {
      console.log("target = " + e.target);
      console.log("text = " + e.target.innerText);
      console.log("x = " + e.pageX);
      console.log("y = " + e.pageY);
    };
    buttons.on("click", btnClick);
    
NOTE - in examples above an `event object` is passed to the event handler with details about the event. Details include what HTML element fired the event and its location on the page.

#### event target - object that fired an event.

JQuery provides a special variable - `$(this)` - referring to the the event target.

    buttons.on("click", () => {
     console.log($(this).text());
    });

* Identifies which DOM element fired the event
* If you need to work with the target element across many lines of code, you can save the jQuery version to a variable with a similar name, 
* Don't use **this** as a variable name, as that would conflict with a global variable,
    

### jQuery Effects

#### Fade

    $(selector).fadeIn(speed,callback);

* speed can be ‘slow’, ‘fast’, or milliseconds
* callback is an optional function to call when fade completes
 
Other commands:

.fadeOut();
.fadeToggle();
.fadeTo(speed,opacity,callback); // speed and opacity required


#### Slide - an element up or down.

#### Animate - a specified set of CSS parameters (e.g. size, position, opacity)

    $(selector).animate({params},speed,callback);
    $("div").animate({left: '250px'});


* To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute
* color animation is not included in the core jQuery library. To animate color, you need to download the Color Animations plugin from jQuery.com


#### JQuery filter

Commands that allow you to select a subset of elements returned by a JQuery command. The filter criteria are a secondary query using standard JQuery selectors.

For example, this command would return only `p` tags that an `intro` class:

    $("p").filter(".intro");

This command would do the opposite, returning only `p` tags that do NOT have the `intro` class:

    $("p").not(".intro");

See details at http://www.w3schools.com/jquery/jquery_traversing_filtering.asp