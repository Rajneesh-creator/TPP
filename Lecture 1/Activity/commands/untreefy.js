let fs = require("fs");
let path = require("path")
let uniqid = require("uniqid")

module.exports.untreefy = function(){
    console.log("untreefy has been called");
    let root = {};
    untreefyfolder(arguments[0] , arguments[1] , root);
    console.log(root);
    var data  = JSON.stringify(root);
    fs.writeFileSync("metadata.json" ,data);
};

function untreefyfolder(src, dest , node){
    let ans = fs.lstatSync(src).isDirectory()
   
    if(ans == false){
        node.isfile = "true";
        node.name = path.basename(src)
        let uniqename = uniqid();
        node.newname = uniqename;
        fs.copyFileSync(src,path.join(dest,uniqename));
        console.log(node);
    } else{
        node.isfile  = "false"
        node.name = path.basename(src)
        node.childrens = []
        let children = fs.readdirSync(src);
        
        for(let i = 0 ; i<children.length ; i++){
           let childobj = {}; 
           let chpath = path.join(src,children[i])
           untreefyfolder(chpath,dest,childobj) 
           
           node.childrens.push(childobj)
           
        } 

       
    }
}

