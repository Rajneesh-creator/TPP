let fs = require("fs");

console.log("Start");
console.log("comp stuck");

fs.readFile("f1.txt" , function(err , data){
    console.log(data.byteLength);
})

console.log("Finished");