const fs = require('fs');


// reading a file text
const readText = fs.readFileSync('./text/read.txt', "utf-8") ;


//writing a text
const writtenText = fs.writeFileSync('./text/write.txt', readText + "This is my written text that i wrote")


// console.log(readText);
console.log(writtenText);


