let fs = require("fs");
let path = require("path")
function displaylist(src, a){
    let ans = fs.lstatSync(src).isDirectory()
    if(ans == false){
        console.log(path.basename(src) +"*");
    } else{
       
        console.log(a + path.basename(src))
        let children = fs.readdirSync(src);

        for(let i = 0 ; i<children.length ; i++){
           let chpath = path.join(src,children[i])
            
           displaylist(chpath ,a+"_")
        }



       
    }
}

displaylist("E://Tpp//Lecture 1//src", "_")