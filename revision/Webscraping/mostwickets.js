let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");

request("https://www.espncricinfo.com/series/19322/scorecard/1187683" , function(err , res , html){
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
    let table = ch(".scorecard-section.bowling tr");
    let mostwickets = 0;
    
    let mname;
    
    for(let i = 0 ; i<table.length ;i++){
      let wickets = ch(ch(table[i]).find("td")[5]).text();
       let name = ch(ch(table[i]).find("td")[0]).text();
       if(mostwickets<wickets){
           mostwickets = wickets;
           mname = name;
       }
    }
   
    console.log(mostwickets + " " + mname);
}