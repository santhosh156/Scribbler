
var signupmodal = document.getElementById('signUpModal');

var signinmodal = document.getElementById('signInModal');

var createpostmodal = document.getElementById("createPostModal");

var signInBtn = document.getElementById("signInBtn");

var signUpBtn = document.getElementById("signUpBtn");

var createPostBtn = document.getElementById("createPostBtn");

var signUpclose = document.getElementById("signUpclose");

//var span = document.getElementsByClassName("close")[0];

//var span1 = document.getElementsByClassName("close")[1];

//var span2 = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal
signInBtn.onclick = function() {
    signinmodal.style.display = "block";
}

signUpBtn.onclick = function() {
    signupmodal.style.display = "block";
}

createPostBtn.onclick = function(){
    createpostmodal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
signUpclose.onclick = function() {
    signupmodal.style.display = "none";
}

span1.onclick = function() {
    signinmodal.style.display = "none";
}

span2.onclick = function() {
    createpostmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == signinmodal) {
        signinmodal.style.display = "none";
    }

    if (event.target == signupmodal) {
        signupmodal.style.display = "none";
    }

    if (event.target == createpostmodal) {
        createpostmodal.style.display = "none";
    }
}


function signUpModel(){

    signinmodal.style.display = "none";

    signupmodal.style.display = "block";

    var span1 = document.getElementsByClassName("close")[1];

    span1.onclick = function() {
        signupmodal.style.display = "none";
    }

}