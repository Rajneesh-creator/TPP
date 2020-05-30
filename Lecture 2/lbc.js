let fs = require("fs");
let request = require("request");
let cheerio = require("cheerio")
let url = "https://www.espncricinfo.com/series/19430/game/1187686";
request(url, function (err, res, html) {
    
    if (err == null && res.statusCode == 200) {
        // fs.writeFileSync("abc.html", html);
        parsehtml(html);
    }
    else if (res.statusCode == 404) {
        console.log("Page not found")
    }
    else {
        console.log(err);
        console.log(res.statusCode);
    }
});


function parsehtml(html){
    console.log("Parsing Html");

    let co = cheerio.load(html);
    let lastcommentry = co(".item-wrapper .description").html();
    fs.writeFileSync("lbc.html" , lastcommentry)
}