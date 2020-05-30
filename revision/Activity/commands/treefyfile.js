module.exports.treefy = function(){
    console.log("treefy is implemented");
    src = arguments[0];
    dest = arguments[1];
    let node = require(path.join(src , "metadata.json"));
    
    treefyfunc(src , dest , node);
}

const fs = require("fs");
const path = require("path")

function treefyfunc(src ,dest , node){
    if(node.isfile == "true"){
        let oldfile = path.join(src , node.newname);
        let newfile = path.join(dest  , node.name);
        fs.copyFileSync(oldfile , newfile);
    }
    else
    {
        let dirname = path.join(dest , node.name);
        fs.mkdirSync(dirname);
        for(let i = 0 ; i<node.childrens.length ; i++){
            treefyfunc(src , dirname , node.childrens[i]);
        }
    }
}