// Signup page input references
var getUser = document.getElementById("username");
var getEmail = document.getElementById('email');
var getPassword = document.getElementById('password');

// Signup function
function signup() {
    var username = getUser.value;
    var email = getEmail.value;
    var password = getPassword.value;

    localStorage.setItem("user", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Data is stored successfully!");
    window.location.href = "./login.html";
}

// Login function
function login() {
    var loginEmail = document.getElementById('loginemail');
    var loginPassword = document.getElementById('passwordlogin');

    var storedEmail = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");

    if (storedEmail === loginEmail.value && storedPassword === loginPassword.value) {
        alert("Successfully logged in!");
        window.location.href = "./index.html";
    } else {
        alert("Invalid email or password");
    }
}

// Display user on homepage
var getUserHeading = document.getElementById("h1user");

if (getUserHeading) {
    var storedUsername = localStorage.getItem("user");
    getUserHeading.innerHTML = `Welcome ${storedUsername}`;
}
