// Write your code here!

function displayPosts(posts) {
    const postList = document.querySelector('#post-list')
    posts.forEach(post => {
        const postItem = document.createElement('li');
        const postTitle = document.createElement('h1')
        const postContent = document.createElement('p');

        postTitle.textContent = post.title;
        postContent.textContent = post.body;
        //Wrong: postItem.appendChild(postTitle, postContent);
        postItem.appendChild(postTitle);
        postItem.appendChild(postContent);
        postList.appendChild(postItem);
    });
}

async function fetchAndDisplayPosts() {
    try{
        const response = await
        fetch('https://jsonplaceholder.typicode.com/posts');

        const posts = await response.json();
        //displayPosts(posts.slice(0, 10));
        displayPosts(posts);
    } catch(error) {
        console.error('Error fetching user data:', error);
    }
}

fetchAndDisplayPosts();

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(posts => console.log(posts))
// .catch(error => {
//     console.error('Error fetching user data:', error);
// });