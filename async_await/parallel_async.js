let fs = require("fs");

(async function(){
    let data1 = await fs.promises.readFile("f2.txt");
    
    console.log("data1" + data1+"")
   
})();

(async function(){
      
    let data2 = await fs.promises.readFile("f3.txt");
    console.log("data2" + data2 +"");
  
   
})();


(async function(){
    
    let data3 = await fs.promises.readFile("f4.txt");
    console.log("data3" + data3 +"");
   
    
})();