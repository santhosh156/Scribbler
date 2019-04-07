var createpostmodal = document.getElementById("createPostModal");
var createPostBtn = document.getElementById("createPostBtn");
var createPostClose = document.getElementById("createPostClose");

document.getElementById("createPostBtn").onclick = function() {
    createpostmodal.style.display = "block";
}

createPostClose.onclick = function() {
    createpostmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
document.onclick = function(event) {
    if (event.target == createpostmodal) {
        createpostmodal.style.display = "none";
    }
}

function redirectToAllPosts() {
    window.location.href = 'html/bloglist.html';
}

