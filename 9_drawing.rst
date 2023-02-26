====
Drawing with JavaScript
====

**Reading**

* JavaScript from Beginner to Professional, Ch. 14
* http://www.w3schools.com/html/html5_intro.asp*
* http://www.w3schools.com/canvas/default.asp 
* https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API 

**Summary**

* HTML canvas element
* Drawing lines
* Drawing geometric shapes
* Styles
* Animation

What is HTML5?

HTML5 is a standard introduced in 2014 that adds many features that allow HTML pages to behave more like compiled applications.


**The <canvas> element**

The HTML5 `<canvas>` element lets you draw any geometric shape within its borders, using methods similar to those found in Photoshop and other drawing programs. `<canvas>` methods are central to interactive web games and data visualization.

Canvas element must have an id and width/height attributes. To draw within this space, you need to get a reference for the `context` of the <canvas> element.
::

   <canvas id="picasso" height=640 width=480></canvas>
   <script>
        let canvas = document.getElementById('picasso');
        let context = canvas.getContext('2d');
        context.fillRect(20, 40, 100, 100);
   </script>

The ‘context’ object has built-in properties and methods for drawing with javascript commands. It also retains the current `state` of a drawing in the <canvas>.


Drawing Methods
------

Drawing on the <canvas> involves a sequence of commands telling the browser where to start, what to draw (e.g. line, rect, arc, etc.), where to end, and what styles to use (e.g. line color, fill color, line thickness, etc.).

Many drawing commands include pixel coordinates that start from the upper left corner of the canvas element. X coordinates increase to the right, and Y coordinates increase down the page.

Canvas coordinates are relative to the <canvas> object and independent of where the <canvas> object appears on the web page.

Draw a line

A simple line from point (0,0) to point (100, 100) using default line styles:
::

    context.moveTo(0, 0);  // make sure pen starts in the right location
    context.lineTo(100, 100); // draw line to end location
    context.stroke();  // apply styles to make the line visible

Draw a rectangle

You can draw a series of lines to form a rectangle with a single command:
::

    context.rect(start_x,start_y,width,height);

Draw a circle
::

    context.beginPath();
    context.arc(95,50,40,0,2*Math.PI);
    context.stroke();

Draw text
::

    context.font = "30px Arial";
    context.fillText("Hello World",10,50);

You can also draw curves:
::

    context.arc(center_x,center_y,radius,start_angle,end_angle);
    context.quadraticCurveTo(control_x,control_y,end_x,end_y)
    context.bezierCurveTo(control1_x,control1_y,control2_x,control2_y,end_x,end_y);

Drawing commands draw one or more lines along a ‘path’. Paths are central to 2d drawing and can be composed of many lines to form a complex image (e.g. 5-pointed star).


Styling commands
-----
Javascript has several basic commands that apply styles to a line:

* strokeStyle - sets line color

or to the space enclosed by a path:

* fillStyle - sets color for filling a defined space (e.g. rect, circle, etc)

Colors can be any valid CSS color including color names (e.g. "green"), hex values (e.g. "#FC8CA3"), or RGB and RGBA values (e.g. "rgba(255, 195, 200, .5)")


Other Path commands

- beginPath() - Begins a new path or resets the current one
- closePath() - Draw path from current point to the starting point
- moveTo(x, y) - Moves the pen to the specified point without drawing
- clearRect(x, y,width,height) - clear any drawings within the specified rectangle


Transformations
_____

JavaScript supports a limited, but powerful set of commands to transform the drawing context.

Note - these commands affect the <canvas> context and how subsequent elements are drawn.

- scale() - scales (zooms) the context. Subsequent drawings use the new scale
- rotate() - rotates the context. sort of like rotating the canvas, but existing drawings remain in place.

Loading Images into Canvas
_____

JavaScript can load an image to the canvas from the web page or using a file loader:
::

   <img id="flower" src="flower.jpg" />
   <canvas id="picasso" height=640 width=480></canvas>
   <script>
        let canvas = document.getElementById('picasso');
        let context = canvas.getContext('2d');
        let myImage = document.getElementById("flower");
        ctx.drawImage(myImage, 10, 10);
   </script>
