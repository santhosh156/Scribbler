var i = 0;

// Variable for delete blog modal and No button
var deleteBlogModal = document.getElementById('deleteBlog');
var noBtn = document.getElementById('noBtn');

// On click event of No button
noBtn.onclick = function() {
    deleteBlogModal.style.display = "none";
}

// On click events of all trash buttons
for(i=0; i<=4; i++) {
    document.getElementsByClassName('trash-btn')[i].onclick = function() {
        deleteBlogModal.style.display = "block";
    }    
}

// Code to open the corresponding post
function openPost(postId){
    window.location.href = "post.html?id=" + postId;
}
