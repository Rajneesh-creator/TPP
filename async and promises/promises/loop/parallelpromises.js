let fs = require("fs");

let files = ["../../f2.txt" , "../../f3.txt" , "../../f4.txt"];

function readFilesPromise(){
    for(let i=0;i<files.length;i++){
        let fwbrp = fs.promises.readFile(files[i]);
        fwbrp.then(function(data){
            console.log("file "+(i+1)+" read complete");
            console.log(data.byteLength);
        })
    }
}

readFilesPromise();
