let fs = require("fs");

(async function(){
    let data1 = await fs.promises.readFile("f2.txt")
    console.log(data1 + "");
    if(data1.byteLength > 15){
        let data2 =  await fs.promises.readFile("f3.txt")
        console.log(data5+"")
        if(data2.byteLength > 20){
            let data4 = await fs.promises.readFile("f5.txt");
            console.log(data4+"");
        }else{
            let data5 = await fs.promises.readFile("f6.txt");
            console.log(data5+"");
        }
    }else{
        let data3 = await fs.promises.readFile("f4.txt")
        console.log(data3+"");
        if(data3.length > 40){
            let data6 = await fs.promises.readFile("f7.txt");
            console.log(data6+"");
        }

    }
})