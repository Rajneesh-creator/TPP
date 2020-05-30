let fs = require("fs");

let files=["../f1.txt", "../f2.txt", "../f3.txt"];

console.log("before");
console.log("start");

//***********SERIAL************** */
// let f1wbrp = fs.promises.readFile(files[0]);

// f1wbrp.then(function(data){
//     console.log("f1 read complete ");
//     console.log(data.byteLength);

//     let f2wbrp = fs.promises.readFile(files[1]);
//     return f2wbrp;
// })
// .then(function(data){
//     console.log("f2 read complete");
//     console.log(data.byteLength);

//     let f3wbrp = fs.promises.readFile(files[2]);
//     return f3wbrp;
// })
// .then(function(data){
//     console.log("f3 read complete");
//     console.log(data.byteLength);
// })

//************PARALLEL********** */

let f1wbrp = fs.promises.readFile(files[0]);
let f2wbrp = fs.promises.readFile(files[1]);
let f3wbrp = fs.promises.readFile(files[2]);

f1wbrp.then(function(data){
    console.log("f1 read complete");
    console.log(data.byteLength);
})

f2wbrp.then(function(data){
    console.log("f2 read complete");
    console.log(data.byteLength);
})

f3wbrp.then(function(data){
    console.log("f3 read complete");
    console.log(data.byteLength);
})