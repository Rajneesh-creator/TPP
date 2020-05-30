
require("chromedriver");
let swd = require("selenium-webdriver");
let fs = require("fs");
let username;
let password;
let gModules;
let metadata = require(process.argv[2]);
// console.log(metadata[0].modules)
let gLectures;
let gProblems;


// ALL SELENIUM FUNCTIONS ARE ASYNC FUNCTION

let builder = new swd.Builder();

let driver = builder.forBrowser("chrome").build();


let credentialwillbeRead = fs.promises.readFile("credentials.json")

credentialwillbeRead.then(function(credential){
    credential = JSON.parse(credential);
    username = credential.username;
    password = credential.password;

    let peppageWillpromised = driver.get("https://pepcoding.com/login");
    return peppageWillpromised;

}).then(function(){

    // selecting attribute and its type as input[type=email]

   emailwillbeopened = driver.findElement(swd.By.css("input[type=email]"))
   return emailwillbeopened

}).then(function(emailelement){
    emailfilled = emailelement.sendKeys(username);
    return emailfilled;
    
}).then(function(){
    passwordelement = driver.findElement(swd.By.css("input[type=password]"))
    return passwordelement;

}).then(function(passwordelement){
    passwordfilled = passwordelement.sendKeys(password);
    return passwordfilled;

}).then(function(){
    submitbutton = driver.findElement(swd.By.css("button[type=submit]"))
    return submitbutton;

}).then(function(submitbutton){
    submitclicked = submitbutton.click();
    return submitclicked;

}).then(function(){
    let wait = driver.wait(swd.until.elementLocated(swd.By.css(".card.resource a")));
    return wait;

}).then(function(){
    let resourcewillbeSelected = driver.findElement(swd.By.css(".card.resource a"))
    return resourcewillbeSelected

}).then(function(resourceAnchor){
     let resourcelink = resourceAnchor.getAttribute("href");
     return resourcelink;

}).then(function(resourcelink){
   let resourcelinkopened = driver.get(resourcelink);
   return resourcelinkopened;
}).then(function(){
   let siteoverlaySelected = driver.findElement(swd.By.css("#siteOverlay"));
   return siteoverlaySelected;
}).then(function(soe){
    let waituntilloverlay = driver.wait(swd.until.elementIsNotVisible(soe) , 10000);
    return waituntilloverlay;

}).then(function(){
    let coursecardselected = driver.findElement(swd.By.css("#courseCard33"))
    return coursecardselected;

}).then(function(coursecard){
    let coursecardclicked = coursecard.click();
    return coursecardclicked;

})

// Required question will be Opened
.then(function(){
  let questionopened = questionpage(metadata)
  return questionopened
})




  .then(function(){
      let editorWillbeSelected = driver.wait(swd.until.elementLocated(".tab.bold.editorTab"))
      return editorWillbeSelected;
      
  })
.then(function(){
    let editorWillbeSelected = driver.findElement(swd.By.css(".tab.bold.editorTab"))
    return editorWillbeSelected;

}).then(function(editortab){
    let editoropened = editortab.click();
    return editoropened
})



/*
.then(function(){
    let metadatawillberead = fs.promises.readFile(metadatafile)
    return metadatawillberead

}).then(function(metadata){
   metadata = JSON.parse(metadata)
   let questionurl = metadata[0];
   let questionopened = driver.get(questionurl);
   return questionopened;
*/

.then(function(){
      let textboxselector = driver.findElement(swd.By.css(".ace_layer.ace_cursor-layer.ace_hidden-cursors.ace_cursor"))
      return textboxselector

}).then(function(textbox){
    let textboxfilled = textbox.sendKeys("factorial.txt");
    return textboxfilled;

})

.catch(function(err){
    console.log(err);
})


function questionpage(metadata){
  return new Promise(function(resolve , reject){
    let  moduleselected = nevigationHelper(metadat.module , ".lis.tab" )
    moduleselected.then(function(){
      let willclicklecture = nevigationHelper(metadata.lecture , ".collection-item")
      return willclicklecture
    }).then(function(){
      let problemclicked = nevigationHelper(metadata.problem , ".collection-item.no-margin.searchRow")
      return problemclicked
    }).then(function(){
      resolve();
    }).catch(function(err){
      reject(err);
    })

  })
}



function nevigationHelper(name , selector){
  let gelements
  return new Promise(function(resolve , reject){
    let problemToBeLocatedPromise = driver.wait(swd.until.elementsLocated(swd.By.css(selector)), 10000);
    problemToBeLocatedPromise.then(function () {
    let problemsWillBeSelectedPromise = driver.findElements(swd.By.css(selector));
    return problemsWillBeSelectedPromise;

  }).then(function (problems) {
    
    gelements = problems
    console.log(problems.length);
    let problemsTextPromiseArr = [];
    for (let i = 0; i < problems.length; i++) {
      let problemsNamePromise = problems[i].getText();
      problemsTextPromiseArr.push(problemsNamePromise);
    }
    let AllproblemNamesPromise = Promise.all(problemsTextPromiseArr);
    return AllproblemNamesPromise;

  }).then(function (AllproblemsText) {
    let i;
    for (i = 0; i < AllproblemsText.length; i++) {
      if (AllproblemsText[i].includes(name) == true) {
        break;
      }
    }
    let problemWillBeclickedPromise = gelements[i].click();
    return problemWillBeclickedPromise;
  }).then(function(){
    resolve()
  }).catch(function(err){
    reject(err)
  })

})
}






// purana wala code
/*
.then(function () {
    let lisTabToBeLocatedPromise = driver.wait(swd.until.elementsLocated(swd.By.css(".lis.tab")), 10000);
    return lisTabToBeLocatedPromise
  }).
  then(function () {
    let ModulesWillBeSelectedPromise = driver.findElements(swd.By.css(".lis.tab"));
    return ModulesWillBeSelectedPromise;
  }).then(function (modules) {
    // console.log(modules);
    gModules = modules
    console.log(modules.length);
    let moduleTextPromiseArr = [];
    for (let i = 0; i < modules.length; i++) {
      let moduleNamePromise = modules[i].getText();
      moduleTextPromiseArr.push(moduleNamePromise);
    }
    let AllModuleNamesPromise = Promise.all(moduleTextPromiseArr);
    return AllModuleNamesPromise;
  }).then(function (AllModulesText) {
    let i;
    for (i = 0; i < AllModulesText.length; i++) {
      if (AllModulesText[i].includes(metadata[0].modules) == true) {
        break;
      }
    }
    let moduleWillBeclickedPromise = gModules[i].click();
    return moduleWillBeclickedPromise;
  })
  
  
//   Required lecture will be opened
  
  
  .then(function () {
    let lectureToBeLocatedPromise = driver.wait(swd.until.elementsLocated(swd.By.css(".collection-item")), 10000);
    return lectureToBeLocatedPromise

  })
  .then(function () {
    let lecturesWillBeSelectedPromise = driver.findElements(swd.By.css(".collection-item"));
    return lecturesWillBeSelectedPromise;

  }).then(function (lectures) {
    // console.log(modules);
    gLectures = lectures
    console.log(lectures.length);
    let lectureTextPromiseArr = [];
    for (let i = 0; i < lectures.length; i++) {
      let lectureNamePromise = lectures[i].getText();
      lectureTextPromiseArr.push(lectureNamePromise);
    }
    let AlllectureNamesPromise = Promise.all(lectureTextPromiseArr);
    return AlllectureNamesPromise;

  }).then(function (AlllecturesText) {
    let i;
    for (i = 0; i < AlllecturesText.length; i++) {
      if (AlllecturesText[i].includes(metadata[0].lecture) == true) {
        break;
      }
    }
    let lectureWillBeclickedPromise = gLectures[i].click();
    return lectureWillBeclickedPromise;
  }).then(function () {
    let problemToBeLocatedPromise = driver.wait(swd.until.elementsLocated(swd.By.css(".collection-item.no-margin.searchRow")), 10000);
    return problemToBeLocatedPromise
  })
  .then(function () {
    let problemsWillBeSelectedPromise = driver.findElements(swd.By.css(".collection-item.no-margin.searchRow"));
    return problemsWillBeSelectedPromise;

  }).then(function (problems) {
    
    gProblems = problems
    console.log(problems.length);
    let problemsTextPromiseArr = [];
    for (let i = 0; i < problems.length; i++) {
      let problemsNamePromise = problems[i].getText();
      problemsTextPromiseArr.push(problemsNamePromise);
    }
    let AllproblemNamesPromise = Promise.all(problemsTextPromiseArr);
    return AllproblemNamesPromise;

  }).then(function (AllproblemsText) {
    let i;
    for (i = 0; i < AllproblemsText.length; i++) {
      if (AllproblemsText[i].includes(metadata[0].problem) == true) {
        break;
      }
    }
    let problemWillBeclickedPromise = gProblems[i].click();
    return problemWillBeclickedPromise;
    */