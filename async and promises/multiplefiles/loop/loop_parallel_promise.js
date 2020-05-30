
  function promisecreator(){
    return new Promise (function (resolve , reject){
        setTimeout(function(){
            reject();
        } , 2000);
    });
}
 let pPromise = promisecreator();
         
      console.log(pPromise);



// setTimeout(function timeout() {
//     console.log("Click the button!");
// }, 3000);

function reject(err){
  console.log(err);
}
function resolve(data){
    console.log(data)
}

pPromise.then(resolve , reject);