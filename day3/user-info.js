

//Write an async function getUser(id)

//Fetch user data from: https://jsonplaceholder.typicode.com/users/${id}

//Use try...catch to handle errors

//Log the user's name and email

//Test it with different IDs (1, 2, 10, etc.)


async function getUser(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        console.log("Name:", data.name);
        console.log("Email:", data.email);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}
getUser(5);