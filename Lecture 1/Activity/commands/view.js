let fs = require("fs")
let path = require("path")

module.exports.view = function(){
    let src  = arguments[0];
    let mode = arguments[1];
    console.log("View has been called")
    if(mode == "-t"){
        viewAsTree(src , "_");
    }
    else if(mode == "-f"){
        viewAsFlat(src);
    }
    else{
        console.log("Wrong parameter");
    }
};


function viewAsTree(src , a){
    
    let ans = fs.lstatSync(src).isDirectory()
    if(ans == false){
        console.log(a + path.basename(src) +"*");
    } else{
       
        console.log(a + path.basename(src))
        let children = fs.readdirSync(src);

        for(let i = 0 ; i<children.length ; i++){
           let chpath = path.join(src,children[i])
            
           viewAsTree(chpath ,a+"_")
        }
       
    }

}

function viewAsFlat(src){
    let ans = fs.lstatSync(src).isDirectory()
    if(ans == false){
        console.log(path.basename(src) +"*");
    } else{
       
        console.log(src)
        let children = fs.readdirSync(src);

        for(let i = 0 ; i<children.length ; i++){
           let chpath = path.join(src,children[i])
            
           viewAsFlat(chpath)
        }
       
    }

}