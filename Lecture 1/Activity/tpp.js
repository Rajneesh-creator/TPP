let cmd = process.argv[2];
let viewfile = require("./commands/view")
let treefyfile = require("./commands/treefy")
let untreefyfile = require("./commands/untreefy")
let monitorfile = require("./commands/monitor")
let helpfile = require("./commands/help")

switch(cmd){
    case "view":
        // console.log("View command has been called")
        viewfile.view(process.argv[3],process.argv[4])
        break;
    case "untreefy":
        // console.log("untreefy command has been called")
        untreefyfile.untreefy(process.argv[3],process.argv[4])
        break;
    case "treefy":
        // console.log("treefy command has been called")
        treefyfile.treefy(process.argv[3],process.argv[4])
        break;
    case "monitor":
        // console.log("monitor command has been called")
        monitorfile.monitor(process.argv[3],process.argv[4])
        break
    case "help":
        // console.log("help command has been called")
        helpfile.help()
        break;
default:
    console.log("Bhai galat cmd hai")
}