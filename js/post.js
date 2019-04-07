// Variables - related to post and editing 
const editPostBtn = document.getElementById('editPost');
const savePostBtn = document.getElementById('savePost');
const blogTitle = document.getElementById('blogTitleNew');
const blogTitleEditor = document.getElementById('blogTitleEditor');
const blogBody = document.getElementById('blogBody');
const blogBodyEditor = document.getElementById('blogBodyEditor'); 
// var isEditable = false;

// Variables - releated to post likes!
const likeMessage = document.getElementById('likeMessage'); 
const likeBtnText = document.getElementById('likeBtnText'); 
var likeCount = 0;

// variables - comments
const commentField = document.getElementById('commentField');
const commentsList = document.getElementById('commentsList');

/*
* Edit post 
*/
function editPost() {

    // Editable flag set
    // isEditable = true;

    // elements - display none 
    editPostBtn.style.display = 'none';
    blogTitle.style.display = 'none';
    blogBody.style.display = 'none';

    // elements - display block 
    blogTitleEditor.style.display = 'block';
    blogBodyEditor.style.display = 'block';
    savePostBtn.style.display = 'block';

    // setting paragraph text to textarea
    blogTitleEditor.value = blogTitle.textContent.replace(/(\r\n|\n|\r)/gm,'').replace(/\s+/g,' ').trim();
    adjustTextAreaWidth(blogTitleEditor);
    blogBodyEditor.value = blogBody.textContent.replace(/(\r\n|\n|\r)/gm,'').replace(/\s+/g,' ').trim();
    adjustTextAreaHeight(blogBodyEditor);
    
}

/*
* Save post 
*/
function savePost(){

    // Editable flag set
    // isEditable = false;

    // elements - display none 
    blogTitleEditor.style.display = 'none';
    blogBodyEditor.style.display = 'none';
    savePostBtn.style.display = 'none';

    // elements - display block 
    editPostBtn.style.display = 'block';
    blogTitle.style.display = 'block';
    blogBody.style.display = 'block';

    // setting textarea value to paragraph
    blogTitle.textContent = blogTitleEditor.value;
    blogBody.textContent = blogBodyEditor.value;

}

/*
* Like Post
*/
function likePost(){
    likeCount = likeCount + 1;
    
    if(likeCount > 0){
        likeBtnText.textContent = 'Liked!';
        likeMessage.textContent = likeCount + ' person likes this!';
    }
}

/*
* Adding Comments
*/
function addComment(){
    if(commentField.value.trim() !== ''){
        let newCommentElement = document.createElement('div');
        newCommentElement.className = 'comment-list-item';
        newCommentElement.innerHTML = commentField.value;
        commentsList.prepend(newCommentElement);
        commentField.value = '';
    }
}

/*
* Adjusting Text area height 
*/
function adjustTextAreaHeight(_textAreaField) {

    // A fixed number lets say 20 to add for no clumsyness
    _textAreaField.style.height = (20+_textAreaField.scrollHeight)+"px";

}

/*
* Adjusting Text area width 
*/
function adjustTextAreaWidth(_textAreaField) {

    // A fixed number lets say 25 to add for no clumsyness
    _textAreaField.style.width = (25 + _textAreaField.scrollWidth) + "px";
    
}