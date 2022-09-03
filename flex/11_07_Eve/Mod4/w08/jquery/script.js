$(document).ready(() => {
    // this callback runs once the document is "ready"
    console.log('ready');
    alert('hello world');
    const name = "David"
    $('#main-list').on('click', function(event) {
        console.log(this)
        const li = $('<li>')
        li.text("Hi")
        $(this).append(li)
        $(this).children()[children.length-1]
    })
  });


