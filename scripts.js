// Navigation between pages
function goToPage(page) {
    window.location.href = page;
}

// Like Post functionality
function likePost(button) {
    button.textContent = 'Liked';
    button.disabled = true;
    button.style.backgroundColor = '#ddd';
}

// Show Comments functionality (currently just simulating with alert)
function showComments(button) {
    alert('Displaying comments...');
    // You can open a modal here to show comments in a more interactive way
}

// Show Pop-up Form for Creating a Post
function showPopup() {
    document.getElementById('popupOverlay').style.display = 'block';
    document.getElementById('popupForm').style.display = 'block';
}

// Hide Pop-up Form
function hidePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
    document.getElementById('popupForm').style.display = 'none';
}

// Submit Post and Add it to the Post Feed
function submitPost() {
    const title = document.getElementById('recipeTitle').value;
    const description = document.getElementById('recipeDescription').value;
    
    if (title && description) {
        const postContainer = document.getElementById('posts');
        
        const newPost = document.createElement('div');
        newPost.className = 'post';
        newPost.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <div class="post-actions">
                <button class="like-btn" onclick="likePost(this)">Like</button>
                <button class="comment-btn" onclick="showComments(this)">Comment</button>
                <button class="share-btn">Share</button>
            </div>
        `;
        
        postContainer.insertBefore(newPost, postContainer.firstChild);
        hidePopup();
    } else {
        alert('Please fill out all fields.');
    }
}
