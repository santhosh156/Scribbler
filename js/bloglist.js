var i = 0;

var deleteBlogModal = document.getElementById('deleteBlog');

var noBtn = document.getElementById('noBtn');

noBtn.onclick = function() {
    deleteBlogModal.style.display = "none";
}

for(i=0; i<=4; i++) {
    document.getElementsByClassName('trash-btn')[i].onclick = function() {
        deleteBlogModal.style.display = "block";
    }    
}

function openPost(postId){
    window.location.href = "post.html?id=" + postId;
}
