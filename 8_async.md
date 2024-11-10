Asynchronous Operations
---

### Reading

* JavaScript from Beginner to Professional, Ch. 13
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
* https://www.w3schools.com/jsref/api_fetch.asp
* https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
* http://www.w3schools.com/jquery/jquery_ref_ajax.asp

### Learning Outcomes

* Async & Concurrency
* JavaScript callbacks
* JavaScript promises & async/await
* Making HTTP requests with Fetch & JQuery

### What are Asynchronous Operations

Sometimes a program needs to perform a long-running operation that will block subsequent operations until it completes. Network requests, file operations, and database queries are examples of such long-running operations. Because blocking operations are undesirable, they might be executed `asynchronously` (aka concurrently or in the background), allowing other operations to execute in parallel.

JavaScript is a single-threaded language and can't technically run operations in `background` or `parallel`. But uses an `Event Loop` and callbacks to perform `concurrent` operations with a similar practical effect.

### CallBacks

JavaScript concurrency leverages callbacks - functions that take another function as an argument, which is then called when the rest of the initial function has finished.

    const doSomething = (callback) => {
        console.log('first operation');
        callback();
    }
    const whenDone = () => {
        console.log('second operation');
    }
    doSomething(whenDone);


### Promises

JavaScript Promises allow a program to execute potentially long-running operations without blocking other operations. Some common long-running operations are
- File read/write
- database queries
- HTTP requests

Basic promise syntax:

    let num = 20
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => { // simulate long-running operation
        console.log("First operation");
        if (num > 10) {
            resolve("success"); // on success
        } else {
            reject("num too low");  // on error
        }
      }, "1000");
    });
    console.log("Start");
    promise.then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
    console.log("Second operation");

This example creates a new `Promise` object with a callback function. The callback accepts two functions as parameters - one to invoke if the promise `resolves` (succeeds) and the other if the promise is `rejected` (fails).

While the promise is running, JavaScript can execute subsequent commands.

The promise will `eventually` resolve with a value that can be handled in `then` block or be rejected with an error that can be handled in a `catch` block.

### Async-await

Promise syntax can be verbose and JavaScript has recently adopted a shorter alternative.

- `async defines a function that returns a promise
- `await` pauses the function until the promise resolves

`await` can only be used inside an `async function.

Basic example:

    const asyncFunction = async (num) => {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => { // simulate long-running operation
          if (num > 10) {
              resolve("success"); // on success
          } else {
              reject(`${num} too low`);  // on error
          }
        }, "1000");
      });

      const result = await promise.catch(err => err);
      console.log(result)
    }

    asyncFunction(20);
    asyncFunction(10);


### HTTP Requests

Internet requests are a common long-running operation that web applications need to perform.

Web browsers first gained the ability to make network requests with `AJAX` (Asynchronous JavaScript and XML), a method for loading structured data without refreshing the page. Ironically, AJAX could not practically be used for XML data requests.

JQuery provides simple syntax for making an AJAX request and performing actions when the request completes or fails. (see details below)

More recently, web browsers have adopted `fetch` as a built-in Promise-based approach for making asynchronous HTTP requests. Fetch has several benefits over `XMLHttpRequest`. In particular, the `Promise` will resolve as long as the server returns HTTP headers (even if the status code indicates an error), so UI clients can better handle errors.

A basic `fetch` request has this syntax:

    fetch('http://example.com/movies.json')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

where `fetch` accepts a URL and makes a GET request. If the request resolves, the response is passed to a `then` handler for processing.

The `Response` object, contains the entire HTTP response. To extract the JSON body content from the Response object, we can use the `json()` method, which returns a second promise that resolves with the parsed JSON body.

If the request fails (is rejected), the error is passed to the `catch` block.

### Fetch POST

A Fetch POST request requires configuration values in a `context` object. Configuration can be any valid HTTP request parameters.

    const payload = { name: "dave", age: 32 }
    fetch(URL, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'    // if posting JSON object
        },
        body: JSON.stringify(payload)
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
      .catch((err) => {
        console.error('Error:', err);
      });

Note:

- Use  `'Content-Type': 'application/x-www-form-urlencoded'` if posting Form data
- Fetch promises support a `catch` handler for any network errors that occurred.

### Submitting form data

Web pages usually submit form data to servers with a `POST` request. For example:

    <form id="myform">
      <input type='text' name='name'>
      <input type='text' name='age'>
      <button>Send</button>
    </form>
    <div id='message' />
    
    <script>
    $(document).ready(() => {
        $('form button').on('click', (e) => {
           e.preventDefault(); //cancel the default form submission

         //temporarily disable button to prevent double-submit
         // this happens before post completes
         $('form button').attr('disabled', 'disabled');

           //gather up all form-field values
           let formData = $('#myform').serialize();
           console.log(formData);
        
           //send the request
            fetch(URL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then((response) => response.json())
            .then((data) => $('#message).text('POST succeeded'))
            .catch((err) => $('#message).text('POST failed'))
            .finally(() => $('form button').removeAttr('disabled'));
        });
    });

### JQuery AJAX

For example:

    $.get(URL,callback); // request a URL using GET method
    $.getJSON(URL,callback); // request JSON data
    $.post(URL,data,callback); // POST data (e.g. form values) to a URL

* URL can be relative (on the same server) or a full web url
* *callback* is an optional JavaScript function to execute when AJAX request completes (or fails)
* jQuery provides the server response object and status to the callback function

For example:

    $.get(URL, (response,status) => {
      if (status == "success") {
        // handle a successful request
      } else {
        // request failed
      }
    });

### Customizing AJAX Requests

AJAX requests can be configured with specific parameters to control how the server receives information and how the browser handles the response. The set of parameters is quite broad, but some common customizations are:

* method - e.g. GET, POST, PUT
* cache - whether the browser should cache server response
* data - data to send to the server (e.g. form data)
* timeout - Duration in milliseconds for attempted request. JQuery will end request if server doesn’t respond within this time. 

Syntax for customized AJAX requests:

    $.ajax({params}); // make an asynch request with parameters object

For example:

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

**Send/receive JSON Data**

With AJAX, you can send / receive data as JavaScript objects (JSON), with some additional rules applied for strictness:

* Property names must be enclosed in double-quotes.
* Only primitive values and collections are allowed: no functions, and no JavaScript expressions
* All strings must be enclosed in double-quotes

    // receive JSON data from server
    $.getJSON(URL, (data,status) => {
      if (status == "success") {
        // handle successful request
      } else {
        // request failed
      }
    });
