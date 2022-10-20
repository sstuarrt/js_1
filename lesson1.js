const admin = {
    name: "John"
}

console.log(admin);

console.log("Enter login: ")
login = prompt;

if(login == "Admin") {
    console.log("Enter password");
    password = prompt;
    
    if(password == "1234") {
        console.log("Succes!")
    }
} else {
    console.log("Wrong name!")
}