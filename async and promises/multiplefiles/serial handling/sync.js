let fs = require("fs");

console.log("Start");
console.log("comp stuck");

let data1 = fs.readFileSync("../../f1.txt" )
    console.log(data1.byteLength);



let data = fs.readFileSync("../../f2.txt" )
 
    console.log(data.byteLength +" " +  data + " ");




console.log("comp free");
console.log("Finished");