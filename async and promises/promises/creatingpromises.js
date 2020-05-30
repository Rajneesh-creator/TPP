let fs = require("fs");

/* promises can be resolved or rejected once in a lifetime
   promises are asynchronous
   then and catch function are synchronous and always returns a new promise after registering there callbacks
   success callback of "then" only works for successful promise recieved otherwise it is passed to catch or next "then"
by default catch recieves  error*/ 





// Creating a promise
function promisify(path){
    let promisewillbegiven = new Promise(function(resolve , reject){
        fs.readFile(path , function(err , data){
               if(data){
                   resolve(data);
               }
               else{
                   reject(err);
               }
        })
    })

    return promisewillbegiven
}

let promisewillbegiven = promisify("../f1.txt");

promisewillbegiven.then(function(data){
        console.log(data.byteLength + data +"")
})

promisewillbegiven.catch(function(err){
    console.log(err);
})