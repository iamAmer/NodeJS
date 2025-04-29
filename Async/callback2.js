function getPosts(callback) {
    setTimeout(() => {
        callback([{title: "post1"}, {title: 'post2'}]);
    }, 1000);
}

function getUsers(callback) {
    setTimeout(() => {
        callback([{name: "amer"}, {name: "muhammed"}]);
    }, 1000);
}

getUsers((users) => {
    console.log(users);
    getPosts((posts) => {
        console.log(posts);
    });    
});

// we giving the function a parameter (function) to be called after a time