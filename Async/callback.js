// synchronous code
// console.log(1);
// console.log(2);
// console.log(3);

///////////
// asynchronous code
console.log(1);
setTimeout(() => {
    console.log("from setTimeout");
}, 2000);
console.log(2);
console.log(3);

// main thread
// console.log(1); // 1
// console.log(2); // 2
// console.log(3); // 3


// event loop
// won't be executed until the main thread is empty
// console.log("from setTimeout");