// Local Modules
const {add, a} = require('./local-1');
const {add: add2, a: a2} = require('./local-2');

console.log(add2(3, 4, 6));

// Built In Module

const path = require('path');

console.log(path.join("F:/PHero-NextLevel/mongose-master-L2/learning-nodejs/", "local-1"));

