====
Asynchronous Operations
====

**Reading**

* JavaScript from Beginner to Professional, Ch. 13
* https://www.w3schools.com/jsref/api_fetch.asp
* http://www.w3schools.com/jquery/jquery_ref_ajax.asp

**Summary**

* What are Async & Concurrency?
* JavaScript callbacks
* JavaScript promises & async/await
* Making HTTP requests

**What are Asynchronous Operations?**

Sometimes a program needs to perform a long-running operation that will block subsequent operations until it completes. Network requests, file operations, and database queries are examples of such long-running operations. Because blocking operations are undesirable, they might be executed **asynchronously** (aka concurrently or in the background), allowing other operations to execute in parallel.

JavaScript is a single-threaded language and can't technically run operations in **background** or **parallel**. But uses an **Event Loop** and callbacks to perform **concurrent** operations with a similar practical effect.

**CallBacks**

JavaScript concurrency leverages callbacks - functions that take another function as an argument, which is then called when the rest of the initial function has finished.
::

    const doSomething = (callback) => {
        console.log('first operation');
        callback();
    }
    const whenDone = () => {
        console.log('second operation');
    }
    doSomething(whenDone);


**Promises**

JavaScript Promises are a mechanism to execute potentially long-running operations without blocking other operations.
::

    let x = 20
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => { // simulate long-running operation
        console.log("First operation");
        if (x > 10) {
            resolve(x); // on success
        } else {
            reject("Too low");  // on error
        }
      }, "1000");
    });
    promise.then(
        (value) => {
            console.log("Success:", value);
        },
        (error) => {
            console.log("Error:", error);
        }
    );
    console.log("Second operation");

This example creates a new **Promise** object with a callback function. The callback accepts two functions as parameters - one to invoke if the promis **resolves** (succeeds) and the other if the promise is **rejected* (fails).

While the promise is running, subsequent commands are able to run.

**HTTP Requests**

Internet requests are a common long-running operation that web applications need to perform.

Web browsers first gained the ability to make network requests with AJAX (Asynchronous JavaScript and XML), a method for loading structured data without refreshing the page. Ironically, AJAX could not practically be used for XML data requests.

JQuery provides simple syntax for making an asynchronous AJAX request and performing actions when the request completes or fails. For example:
::

    $.get(URL,callback); // request a URL using GET method
    $.getJSON(URL,callback); // request JSON data
    $.post(URL,data,callback); // POST data (e.g. form values) to a URL

* URL can be relative (on the same server) or a full web url
* *callback* is an optional JavaScript function to execute when AJAX request completes (or fails)
* jQuery provides the server response object and status to the callback function

For example:
::

    $.get(URL, (response,status) => {
      if (status == "success") {
        // handle a successful request
      } else {
        // request failed
      }
    });
 

**Customizing AJAX Requests**

AJAX requests can be configured with specific parameters to control how the server receives information and how the browser handles the response. The set of parameters is quite broad, but some common customizations are:

* method - e.g. GET, POST, PUT
* cache - whether the browser should cache server response
* data - data to send to the server (e.g. form data)
* timeout - Duration in milliseconds for attempted request. JQuery will end request if server doesn’t respond within this time. 

Syntax for customized AJAX requests: 
::

    $.ajax({params}); // make an asynch request with parameters object

For example: 
::

    $.ajax({url: "<URL>", 
      success: (result) => {
        // handle successful request
      },
      error: (xhr, status, error) => {
        // code to perform if request failed
      },
    }); 

* success: receives the successful result 
* error: receives the server status code and error message

Complete jQuery AJAX parameters - http://www.w3schools.com/jquery/ajax_ajax.asp 

 
**Submitting form data**

Form data is usually sent to servers with a ‘POST’ request type. For example:
::

    <form id="myform">
      <input type='text' name='name'>
      <input type='text' name='age'>
      <button>Send</button>
    </form>
    <div id='message' />
    
    <script>
    $(document).ready(() => {
        $('form button').on('click', (e) => {
           //cancel the default form submission
           e.preventDefault();
           //gather up all form-field values
           let formData = $('#myform').serialize();
           console.log(formData);
        
           //send the request
           $.post(<URL>,formData, (result, status) => {
              //when the server replies...
              if (status == “success”) {
                $('#message).text('POST succeeded');
              } else {
                $('#message).text('POST failed');
              }
              $('form button').removeAttr('disabled');
           });
        
         //temporarily disable button to prevent double-submit
         // this happens before post completes
         $('form button').attr('disabled', 'disabled');
        });
    });

**Send/receive JSON Data**

With AJAX, you can send / receive data as JavaScript objects (JSON), with some additional rules applied for strictness:

* Property names must be enclosed in double-quotes.
* Only primitive values and collections are allowed: no functions, and no JavaScript expressions
* All strings must be enclosed in double-quotes 
::

    // receive JSON data from server
    $.getJSON(URL, (data,status) => {
      if (status == "success") {
        // handle successful request
      } else {
        // request failed
      }
    });
