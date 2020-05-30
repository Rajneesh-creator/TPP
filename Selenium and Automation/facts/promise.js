let fs = require("fs");

console.log("start");
let fileWillBeRead = fs.promises.readFile("f1.html");

fileWillBeRead.then(function(content){
    console.log(content + " ");
    console.log("Finish");
})

fileWillBeRead.catch(function(err){
    console.log(err);
})

console.log("After");