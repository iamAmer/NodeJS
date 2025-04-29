let myPromise = new Promise((resolve, reject) =>{
    // setTimeout(() => {
    //     resolve("promise resolved!");
    // }, 1000);

    // never let a rejected promise not handeled

    // setTimeout(() => {
    //     reject("promise rejected!");
    // }, 1000);
});

function myPromise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise resolved from function!")
        }, 1000);
    })
}

console.log(myPromise); // pending

// myPromise.then((res) => {
//     console.log(res);
//     console.log(myPromise);
// }).catch((err) => {
//     console.log(`error: ${err}`);
//     console.log(myPromise)
// })

myPromise2()
    .then(res => {
        console.log(res);
        // return res; // return to the next then
    })
    .then(res => {
        console.log(res);
    }) 
    .catch(err => {
        console.log(err);
    })