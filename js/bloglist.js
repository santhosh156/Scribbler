
var deleteBlogModal = document.getElementById('deleteBlog');

var trashBtn = document.getElementById('delBtn');
/*var trashBtn = document.getElementsByClassName('delBtn')*/

var noBtn = document.getElementById('noBtn');

trashBtn.onclick = function() {
    deleteBlogModal.style.display = "block";
}

noBtn.onclick = function() {
    deleteBlogModal.style.display = "none";
}

