let roll = "employee";
let isLoggedIn = false;
let isAuthenticated = false;
let accessLevel;
let message;

if(isLoggedIn){
    if(isAuthenticated){
        if(roll === "employee"){
            accessLevel = "Access granted to Dietary Services"
        }else if(roll === "enrolled member"){
            accessLevel = "Access granted to Dietary Services"
            message = "One on one interactions with a dietician"
        }else if(roll === "subscriber"){
            accessLevel = "Partial access to Dietary Services"
        }else {
            accessLevel = "Subscribe to use Facilaty"
        }
    }else {
        message = "Not Authenticated"
    }
}else {
    message = "Not Logged in"
}

console.log(accessLevel, message);