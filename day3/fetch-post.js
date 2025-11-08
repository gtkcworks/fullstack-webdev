
fetch("https://jsonplaceholder.typicode.com/todos/1")
   .then(response => response.json())
   .then(data => {
        console.log("Title:", data.title);
        console.log("Body:", data.body);
   });