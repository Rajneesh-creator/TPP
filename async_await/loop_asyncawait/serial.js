let fs=  require( "fs");

let files = ["../f2.txt" , "../f3.txt" , "../f4.txt"];

(async function(){
    try{
    for(let i = 0 ; i<files.length ; i++){
    
   
        let data = await fs.promises.readFile(files[i]);
        console.log("this is file "+i +" :" +data+"");
   
}
    }
catch(err){
    console.log(err);
}

})();