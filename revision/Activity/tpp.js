let {view} = require("./commands/viewfile");
let {treefy} = require("./commands/treefyfile");
let {untreefy} =  require("./commands/untreefyfile");
let {help} =  require("./commands/helpfile");

let cmd = process.argv[2];

switch(cmd){
    case "view":
        
        view(process.argv[3],process.argv[4])
        break;
    case "untreefy":
       
        untreefy(process.argv[3],process.argv[4])
        break;
    case "treefy":
        
        treefy(process.argv[3],process.argv[4])
        break;
    case "help":
        
        help()
        break;
default:
    console.log("Bhai galat cmd hai")
}