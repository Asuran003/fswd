document.getElementById('postForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const postContent = document.getElementById('postContent').value;
    if (postContent.trim() === '') return;

    // Create a new post container
    const postContainer = document.createElement('div');
    postContainer.className = 'post';

    // Create elements for post content, date/time, and like button
    const postText = document.createElement('p');
    postText.textContent = postContent;

    const dateTime = document.createElement('p');
    dateTime.className = 'date-time';
    dateTime.textContent = `Posted on: ${getCurrentDateTime()}`;

    const likeButton = document.createElement('button');
    likeButton.className = 'like-button';
    likeButton.textContent = 'Like (0)';
    likeButton.addEventListener('click', () => {
        const currentLikes = parseInt(likeButton.textContent.match(/\d+/)[0], 10);
        likeButton.textContent = `Like (${currentLikes + 1})`;
    });

    // Append elements to the post container
    postContainer.appendChild(postText);
    postContainer.appendChild(dateTime);
    postContainer.appendChild(likeButton);

    // Append the post container to the posts container
    document.getElementById('postsContainer').appendChild(postContainer);

    // Clear the textarea
    document.getElementById('postContent').value = '';
});

function getCurrentDateTime() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };
    return now.toLocaleString('en-US', options);
}
