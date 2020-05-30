let fs = require("fs");
let request = require("request");
let cheerio = require("cheerio")
let url = "https://www.espncricinfo.com/series/19322/scorecard/1187679";
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
    console.log("Parsing HTML");
    //html=>convert &=> search
    let co = cheerio.load(html);

    let tableArr = co(".scorecard-section.bowling table tr");
    console.log(tableArr.html());
    let max_wicket = 0;
    let maxwkttaker  = "";
    for(let i = 0 ; i<tableArr.length ; i++){
        let tdarr = co(tableArr[i]).find("td");
        let wicket = co(tdarr[5]).html();
        let name = co(tableArr[i]).find("td a").html();
        if (wicket > max_wicket){
            maxwkttaker = name;
            max_wicket = wicket
        }
    }
    console.log(maxwkttaker+":"+max_wicket);
    // fs.writeFileSync("table.html" , tablehtml);
    // console.log("File written to the disk");
}