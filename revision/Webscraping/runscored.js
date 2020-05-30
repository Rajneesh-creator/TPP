let cheerio = require("cheerio");
let request = require("request");
let fs = require("fs");
let gcount = 0;
let leaderboard = [];

let seriesId = process.argv[2];
let matchId = process.argv[3];

request("https://www.espncricinfo.com/scores/series/19322", function (err, resp, html) {
    if (err === null && resp.statusCode === 200) {
        // fs.writeFileSync("index.html",html);
        // console.log("File Written To Disk");
        parseHtml(html);
    } else if (resp.statusCode === 404) {
        console.log("Page not Found : INVALID URL");
    } else {
        console.log(err);
        console.log(resp.statusCode);
    }
})

function parseHtml(html) {
    let d = cheerio.load(html);
    let cards = d(".cscore.cscore--final.cricket.cscore--watchNotes");
    // console.log(cards.length);
    for (let i = 0; i < cards.length; i++) {
        let matchType = d(cards[i]).find(".cscore_info-overview").text();
        // console.log(matchType);
        if (matchType.includes("T20") || matchType.includes("ODI")) {
            let anchor = d(cards[i]).find(".cscore_buttonGroup ul li a").attr("href");
            let matchLink = `https://www.espncricinfo.com${anchor}`
            // console.log(matchLink);
            GoToMatch(matchLink);
        }
    }
}

function GoToMatch(matchLink) {
    gcount++;
    request(`${matchLink}`, function (err, resp, html) {
        if (err === null && resp.statusCode === 200) {
            handleMatch(html);
            gcount--;
            if(gcount === 0){
              console.table(leaderboard);
            }
        } else if (resp.statusCode === 404) {
            console.log("Page not Found : INVALID URL");
        } else {
            console.log(err);
            console.log(resp.statusCode);
        }
    })
}

function handleMatch(html) {
    let d = cheerio.load(html);
    let format = d(".cscore_info-overview").html();
    format = format.includes("ODI") ? "ODI" : "T20";
    // console.log(format);
    let teams = d(".sub-module.scorecard h2");
    let innings = d(".sub-module.scorecard");
    for (let i = 0; i < innings.length; i++) {
        team = d(teams[i]).text();
        let PlayerArray = d(innings[i]).find(".scorecard-section.batsmen .flex-row .wrap.batsmen");
        for (let j = 0; j < PlayerArray.length; j++) {    
            let PlayerName = d(PlayerArray[j]).find(".cell.batsmen").text();
            let PlayerRuns = d(d(PlayerArray[j]).find(".cell.runs")[0]).text();
            // console.log(PlayerName + "  " + PlayerRuns);
            handleplayer(format , team , PlayerName , PlayerRuns)
        }
        // console.log("________________");
    }
}


function handleplayer(format , team , PlayerName ,PlayerRuns){
    PlayerRuns = Number(PlayerRuns);
    
    for(let i = 0 ; i<leaderboard.length ; i++)
     {
         let pObj = leaderboard[i];
         if(pObj.name === PlayerName && pObj.team === team && pObj.format === format){
             pObj.runs += PlayerRuns;
             return;
         }
     }

     let obj = {
         runs: PlayerRuns,
         format: format,
         team: team,
         name: PlayerName
     }

     leaderboard.push(obj);
}