
fetch("https://jsonplaceholder.typicode.com/todos/1")
   .then(response => response.json())
   .then(data => {
             console.log('Title:', post.title);
        console.log('Body:', post.body);
   });