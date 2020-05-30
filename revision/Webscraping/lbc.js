let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");

request("https://www.espncricinfo.com/series/19322/commentary/1187683/"
 , function(err , res , html){
    if(err == null && res.statusCode == 200){
        // fs.writeFileSync("espn.html" , html);
        parseHtml(html);
    }else if(res.statusCode === 404){
        console.log("Invalid URL");
    }else{
        console.log(err);
        console.log(res.statusCode);
    }
})

function parseHtml(html){
    let ch = cheerio.load(html);
    let dis = ch(".item-wrapper .description");
    let lbc = ch(dis[0]).html();
     console.log(lbc);
}