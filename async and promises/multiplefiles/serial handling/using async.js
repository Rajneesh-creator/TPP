let fs = require("fs");

console.log("Start");

// using nested async function

fs.readFile("../../f1.txt" , function(err , data){
    console.log(data.byteLength);



fs.readFile("../../f2.txt" , function(err , data){
    console.log(data.byteLength +" " +  data + " ");
})
})



console.log("Finished");