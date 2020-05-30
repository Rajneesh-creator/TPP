let filearr = ["../../f2.txt" , "../../f3.txt" , "../../f4.txt"];

let fs = require("fs");


function multireader(){
   let filewillbeRead = fs.promises.readFile(filearr[0]);

    for(let i =1 ; i<filearr.length ; i++){
        filewillbeRead = filewillbeRead.then(function(data){
            console.log(data+"")
            let nsp = fs.promises.readFile(filearr[i])
            return nsp
        })
    }

    return filewillbeRead;
}

multireader().then(function(data){
    console.log("Last file" + data +"")
})