async function getData() {
console. log("Before Fetch")
const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
const data = await response.json();
console.log(data.title);
console.log("After Fetch")
 }
 
getData();

