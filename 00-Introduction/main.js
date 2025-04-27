// import built-in node modules
const os = require('node:os');
const fs = require('node:fs');

console.log(os.arch());
console.log(os.homedir());
console.log(os.platform());

console.log('-------------------');

// import user-defined module
const mathUtil = require('./mathUtil.js');
console.log(`sum = ${mathUtil.sum(1, 2)}`);
