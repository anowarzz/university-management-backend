const fs = require('fs');

//   reading file asynchronously 
fs.readFile('./text/read.txt', "utf-8", (err, data) => {

  if(err){
    throw Error ("failed to read data from file1") 
  }


  //writing file  asynchronously 
  fs.writeFile('./text/read2.txt', data, "utf-8", (err) => {
    if(err){
        throw Error ("Error writing data")
    }
  })
})


console.log("testing asynchronous");

