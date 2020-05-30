let fs = require("fs");
let path = require("path")
let uniqid = require("uniqid")
function untreefy(src, dest , node){
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
           untreefy(chpath,dest,childobj) 
           
           node.childrens.push(childobj)
           
        }

       
    }
}
root = {}
untreefy("E://TPP//Lecture 1//src//d10" , "E:" , root )
console.log(root)