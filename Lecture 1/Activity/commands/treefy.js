let fs = require("fs");
let path = require("path");
// let uniqid = require("uniqid");
module.exports.treefy = function(){
    let src = arguments[0];
    let dest = arguments[1];
    let root =  require(path.join(src,"metadata.json"))
    console.log(root)
    console.log("treefy has been called")
     treefyfolder(src, dest , root );
}


 function treefyfolder(src ,dest ,node)
 {
      if(node.isfile == "true"){
          let oldfile = path.join(src , node.newname);
          let newfile = path.join(dest , node.name);
          fs.copyFileSync(oldfile,newfile);
      }
  else {
     let dirname = path.join(dest, node.name);
     fs.mkdirSync(dirname);
     for(let i =0 ;i<node.childrens.length ; i++){
         treefyfolder(src,dirname,node.childrens[i]);
     }
    }
 }