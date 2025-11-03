let username = "admin";
let isLoggedIn = true;

if(isLoggedIn){
    if(username == "admin"){
        console.log("Welcome back, Admin!")
    }else{
        console.log("Welcome user.")
    }
}else{
    console.log("Please log in.")
}

// Using Ternary Operator
let message = isLoggedIn ? (username == "admin" ? "Welcome back, Admin!" : "Welcome user.") : "Please log in."
//let message = isLoggedIn ? username == "admin" ? "Welcome back, Admin!" : "Welcome user." : "Please log in."
//If the user is logged in, check if they are the admin — if yes, greet them as admin; if not, 
//greet them as a regular user. If the user isn’t logged in at all, tell them to log in.

console.log(message);