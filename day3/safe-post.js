

async function getPost(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) throw new Error(`Post not found. Status: ${response.status}`);

        const data = await response.json();
        console.log("Post Title:", data.title);
    } catch (error) {
        console.error("Error fetching data:", error.message);
        alert("Oops! Something went wrong while loading the post.");
   }
}
getPost(5);