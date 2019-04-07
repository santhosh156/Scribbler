// Variables for Signup and signin modal, button and close icon
var signupmodal = document.getElementById('signUpModal');
var signinmodal = document.getElementById('signInModal');
var signInBtn = document.getElementById("signInBtn");
var signUpBtn = document.getElementById("signUpBtn");
var signUpclose = document.getElementById("signUpclose");
var signInclose = document.getElementById("signInclose");

// When the user clicks the signin button, open the modal
signInBtn.onclick = function() {
    signupmodal.style.display = "none";
    signinmodal.style.display = "block";
}

// When the user clicks the signup button, open the modal
signUpBtn.onclick = function() {
    signinmodal.style.display = "none";
    signupmodal.style.display = "block";
}

// When the user clicks on signup <span> (x), close the modal
signUpclose.onclick = function() {
    signupmodal.style.display = "none";
}

// When the user clicks on signin <span> (x), close the modal
signInclose.onclick = function() {
    signinmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == signinmodal) {
        signinmodal.style.display = "none";
    }

    if (event.target == signupmodal) {
        signupmodal.style.display = "none";
    }
}

// When the user clicks on the signup link in signin modal
function signUpModel(){
    signinmodal.style.display = "none";
    signupmodal.style.display = "block";
}