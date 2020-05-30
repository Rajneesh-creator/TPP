let fs = require("fs");

// We can use async await instead of then and catch

async function mfr(){
    try{
    let data1  = await fs.promises.readFile("f2.txt");
    console.log("data1" + data1 +"");
    let data2 = await fs.promises.readFile("f3.txt");
    console.log("data2" + data2 +"");
  
    }
    catch(err){
        console.log("Inside Catch")
        console.log(err);
    }
}

mfr();