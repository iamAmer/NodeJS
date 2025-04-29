function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("promise rejected!")
        }, 1000);
    })
}

async function getMyPromise() {
    try {
        const p = await myPromise();
        console.log(p);
    } catch(err) {
        console.log(err);
    }
    
}

getMyPromise();

// fetch API
async function getPostsFromAPI() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const posts = await res.json();
    console.log(posts);
}

getPostsFromAPI();
