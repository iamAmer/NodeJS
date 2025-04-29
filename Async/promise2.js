function myPromise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 1000);
    })
}

function myPromise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 1500);
    })
}

function myPromise3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3)
        }, 500);
    })
}


Promise.all([myPromise1(), myPromise2(), myPromise3()])
    .then((res) => {
        console.log(res);
    })

    // Promise.race(); => returns the least time promise