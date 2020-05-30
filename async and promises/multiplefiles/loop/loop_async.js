let files  = ["../../f1.txt" , "../../f2.txt"];

let fs = require("fs");
// serial

readFile(0);
function readFile(i){
    if(i == files.length){
        return 
    }
    fs.readFile(files[i] , function(err , data){
        console.log(data.byteLength);
        readFile(i+1)
    })
}

// parallel


// readFile(0);
// function readFile(i){
//     if(i == files.length){
//         return 
//     }
//     fs.readFile(files[i] , function(err , data){
//         console.log(data.byteLength+"File"+ i);
        
//     })
//     readFile(i+1);
// }