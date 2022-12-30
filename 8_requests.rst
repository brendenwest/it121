====
AJAX & JSON
====

**Reading**

* http://thomaswilburn.github.io/textbook/build/ajax.html 
* http://www.w3schools.com/jquery/jquery_ref_ajax.asp

**Summary**

* What is AJAX?
* AJAX via JQuery
* Customizing AJAX requests
* Send/receive JSON data
* Submitting form data
* 3rd party data API’s
 

**What is AJAX**

AJAX stands for “Asynchronous JavaScript and XML”, a method by which the browser can load structured data (e.g. XML or JSON) without refreshing the page.

 
**AJAX via JQuery**

jQuery hides browser differences in AJAX implementation and simplifies the commands.

jQuery allows you to request a URL and perform actions when the request completes or fails.

The resource can be on the same server as your application, or on a separate server if that server is configured to recognize your application and support a Cross-Origin Request.

AJAX operations are asynchronous, meaning your application can continue with other operations before the AJAX request completes. 

Some examples of basic AJAX requests are:
::

    $.get(URL,callback); // request a URL using GET method
    $.getJSON(URL,callback); // request JSON data
    $.post(URL,data,callback); // POST data (e.g. form values) to a URL

* URL can be relative (on the same server) or a full web url
* callback is an optional JavaScript function to execute when AJAX request completes (or fails)
* jQuery provides the server response object and status to the callback function

For example:
::

    $.get(URL,function(response,status) {
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
      success: function(result){
        // handle successful request
      },
      error: function(xhr, status, error){
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
    $(document).ready(function(){
        $('form button').on('click', function(e) {
           //cancel the default form submission
           e.preventDefault();
           //gather up all form-field values
           var formData = $('#myform').serialize();
           console.log(formData);
        
           //send the request
           $.post(<URL>,formData,function(result, status){
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
    $.getJSON(URL,function(data,status) {
      if (status == "success") {
        // handle successful request
      } else {
        // request failed
      }
    });
