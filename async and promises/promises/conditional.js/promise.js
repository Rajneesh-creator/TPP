let fs = require("fs");
let files = ["../../f1.txt", "../../f2.txt", "../../f3.txt"];

let f1wbrp = fs.promises.readFile(files[0]);
f1wbrp.then(function(data){
    console.log("f1 read complete");
    console.log(data.byteLength);
    if(data.byteLength>20){
        let f2wbrp = fs.promises.readFile(files[1]);
        f2wbrp.then(function(data){
            console.log("f2 read complete");
            console.log(data.byteLength);
        })
    }
    else{
        let f3wbrp = fs.promises.readFile(files[2]);
        f3wbrp.then(function(data){
            console.log("f3 read complete");
            console.log(data.byteLength);
        })

    }
})