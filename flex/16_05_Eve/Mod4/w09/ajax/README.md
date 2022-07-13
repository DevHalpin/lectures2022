# M04W09 - AJAX

### To Do

- [x] AJAX
- [x] XMLHttpRequest (XHR) Object
- [x] Use AJAX to retrieve data from a remote server
- [x] Use jQuery to update the DOM with the retrieved data
- [x] Use AJAX to submit data to a remote server
- [x] All without refreshing the browser

### AJAX

- Asynch Javascript and XML
- Invented by Microsoft for Outlook Web Access as a way of replicating desktop application functionality in the browser
- Web applications can send and receive data asynchronously without a browser refresh
- AJAX was one of the main factors that led to web 2.0
- Originally retrieved data sent 'XML' but modern apps using 'JSON' instead.

### XMLHttpRequest Object (XHR)

- Ajax is implemented using the XHR object
- Modern libraries (such as jQuery or axios) provide us with easy to use wrapper for the XHR object

- jQuery gives us an API for making AJAX requests

```
$.ajax({
  url: 'https://jsonplaceholder.typicode.com/posts',
  method: 'GET',
  dataType: 'json',
  success: (data) => {
    console.log('this request succeeded and here\'s the data', data);
  },
  error: (error) => {
    console.log('this request failed and this was the error', error);
  }
});
```

### jQuery Shorthand Methods

- jQuery has several shorthand methods so that to use the full .ajax method every time

```
$.get('https://jsonplaceholder.typicode.com/posts')
$.post('https://jsonplaceholder.typicode.com/posts', {data})
```
