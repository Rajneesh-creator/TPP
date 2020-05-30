module.exports.view = function(){
    let mode = arguments[1];
    let src  = arguments[0];
    if( mode == "-t" ){
        viewastree(src , "");
    }
    else if(mode == "-f"){
        viewasflat(src , path.basename(src));
    }
    else{ 
        console.log("Wrong Command");
    }
}

let fs = require("fs");
let path = require("path");

function viewasflat(src ,  toprint){

    if(fs.lstatSync(src).isFile()){

        console.log(toprint  + "*");
    
    }
    else{
        console.log(toprint);
        let children = fs.readdirSync(src);
        for(let i = 0 ; i<children.length ; i++){

            childpath = path.join(src , children[i]);
            viewasflat(childpath , path.join(toprint , children[i]));
        }
    }
    // console.log("view as flat implemented");
}

function viewastree(src , indent){
    // console.log("view as tree implemented");
    if(fs.lstatSync(src).isFile()){

        console.log(indent + path.basename(src)  + "*");
    
    }
    else{

        console.log(indent + path.basename(src));
        let children = fs.readdirSync(src);
        for(let i = 0 ; i<children.length ; i++){
            childpath = path.join(src , children[i]);
            viewastree(childpath , indent+"    ");
        
        }
    }
}