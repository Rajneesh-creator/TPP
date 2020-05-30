let fs = require("fs");
let request = require("request");
let cheerio = require("cheerio");
let seriesId = process.argv[2];
let url = "https://www.espncricinfo.com/scores/series/19322/"
request(url, function (err, res, html) {
    
    if (err == null ) {
        // fs.writeFileSync("abc.html", html);
        parsehtml(html);
    }
    // else if (res.statusCode == 404) {
    //     console.log("Page not found")
    // }
    else {
        console.log(err);
        // console.log(res.statusCode);
    }
});


function parsehtml(html){
    console.log("Parsing Html");
    let co = cheerio.load(html);

    console.log(co(".cscore_link cscore_link--button").html());
    
    // let lastcommentry = co(".item-wrapper .description").html();
    // fs.writeFileSync("lbc.html" , lastcommentry)
}