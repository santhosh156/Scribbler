// Variables for create post modal, button and close icon
var createpostmodal = document.getElementById("createPostModal");
var createPostBtn = document.getElementById("createPostBtn");
var createPostClose = document.getElementById("createPostClose");

// Onclick event of create post button
document.getElementById("createPostBtn").onclick = function() {
    createpostmodal.style.display = "block";
}

// Onclick event of close icon
createPostClose.onclick = function() {
    createpostmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
document.onclick = function(event) {
    if (event.target == createpostmodal) {
        createpostmodal.style.display = "none";
    }
}

// When the user clicks the All posts button
function redirectToAllPosts() {
    window.location.href = 'html/bloglist.html';
}