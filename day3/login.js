let username = "user";
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
s//let message = isLoggedIn ? username == "admin" ? "Welcome back, Admin!" : "Welcome user." : "Please log in."

console.log(message);