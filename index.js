function btn(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (email === "" || password === ""){
        errorMessage.textContent("please fill in the blanks!");
    };

    if (email === "jhonn" && passworld === "capz"){
        alert("Login Successful!");
    } else {
        errorMessage.textContent("email or password is incorrect!");
    };
};
