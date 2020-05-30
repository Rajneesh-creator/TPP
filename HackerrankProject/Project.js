let fs = require("fs");

require("chromedriver");
let swd = require("selenium-webdriver");

let builder = new swd.Builder();

let driver  = builder.forBrowser("chrome").build();

let cFile = process.argv[2];
let name = process.argv[3];
// let uTadd = process.argv[3];

(async function(){
    try{
    (await driver).manage().setTimeouts({implicit : 30000 , pageLoad: 30000});

    let data = await fs.promises.readFile(cFile);

   let {url , email , password} = JSON.parse(data);
   console.log(url);
   console.log(email);
    
   await driver.get(url);

    let Namewillbepromised = await driver.findElement(swd.By.css("#input-1"))
    let passwordwillbepromised = await driver.findElement(swd.By.css("#input-2"));
    
    let inputarr = await Promise.all([Namewillbepromised , passwordwillbepromised]);
    // console.log(inputarr);

    let namewillbesend =  inputarr[0].sendKeys(email)
    let passwordwillbesend = inputarr[1].sendKeys(password);
   
    await Promise.all([namewillbesend ,passwordwillbesend]);
    let Button = await driver.findElement(swd.By.css("button[data-analytics=LoginPassword]"));

    await Button.click();

    let administratorwillbelocated = await driver.findElement(swd.By.css("a[data-analytics=NavBarProfileDropDownAdministration]"))
    
    let administratorlink =  await administratorwillbelocated.getAttribute("href");

    await driver.get(administratorlink);

    await waitForLoader();

    let managebar = await (await driver).findElements(swd.By.css(".administration header ul li"));
    
    // console.log(managebar.length)
    await managebar[1].click();
    
    let ManagechallengePage = await driver.getCurrentUrl();

    // let questionfile = require("./questions");

    // for(let i = 9 ; i<questionfile.length ; i++){
    //        await driver.get(ManagechallengePage);
    //        await waitForLoader();
    //        await ChallengeCreation(questionfile[i]);
           
    // }

    let challengeArr = await (await driver).findElements(swd.By.css(".backbone.block-center"));
    console.log(challengeArr.length)

    while(true){
    
    for(let i = 0 ; i<challengeArr.length ; i++){
    
        let challengeArr = await (await driver).findElements(swd.By.css(".backbone.block-center"));
        await challengeArr[i].click();
        await (await driver).sleep(2000);
        await addmoderators(name);    
        await (await driver).get(ManagechallengePage)
        await  waitForLoader();
        
    }
    let paginations = await (await driver).findElements(swd.By.css(".pagination li"));
    let classname = await paginations[5].getAttribute("class");

    if(classname == "disabled"){
        return;
    }else{
        await paginations[5].click();
        ManagechallengePage = await (await driver).getCurrentUrl();
    }

}
  

    }
    catch(err){
        console.log(err);
    }

})()

async function waitForLoader(){
    let loader = await driver.findElement(swd.By.css("#ajax-msg"))
    await driver.wait(swd.until.elementIsNotVisible(loader));
};

async function editorhandler(parentSelector , element , data){

    let parent =await driver.findElement(swd.By.css(parentSelector));
    await driver.executeScript("arguments[0].style.height = '10px'" , parent);
    await element.sendKeys(data);
}

async function ChallengeCreation(questions){
    let createchallenge = await driver.findElement(swd.By.css(".btn.btn-green.backbone.pull-right"))
    await createchallenge.click();
    
    await waitForLoader();

    const eSelector = ["#name" , "textarea.description" , "#problem_statement-container .CodeMirror textarea" , "#input_format-container .CodeMirror textarea" , 
    "#constraints-container .CodeMirror textarea" , "#output_format-container .CodeMirror textarea" , "#tags_tag"];
    
    let elementsWillbeselected = eSelector.map(function(s){
        return driver.findElement(swd.By.css(s));
    })

    

    let Allelements = await Promise.all(elementsWillbeselected);

    let nameWillbeadded = Allelements[0].sendKeys(questions["Challenge Name"]);
    let descWillbeadded = Allelements[1].sendKeys(questions["Description"]);

    await Promise.all([nameWillbeadded,descWillbeadded]);

    await editorhandler("#problem_statement-container .CodeMirror div"  , Allelements[2] , questions["Problem Statement"] )
    
    await editorhandler("#input_format-container .CodeMirror div"  , Allelements[3] , questions["Input Format"] )

    await editorhandler("#constraints-container .CodeMirror div"  , Allelements[4] , questions["Constraints"])

    await editorhandler("#output_format-container .CodeMirror div"  , Allelements[5] , questions["Output Format"])

    await Allelements[6].sendKeys(questions["Tags"]);

    await Allelements[6].sendKeys(swd.Key.ENTER);
   
    let submitBtn = await driver.findElement(swd.By.css(".save-challenge.btn.btn-green"))
    await submitBtn.click();

    // await waitForLoader();

    let testcaseTab = await driver.findElement(swd.By.css("li[data-tab=testcases]"))
    await testcaseTab.click();

    let TestcaseARR = questions["Testcases"];
    let currurl = await (await driver).getCurrentUrl();
    
    for(let i = 0 ; i<TestcaseARR.length ; i++){
        
        await driver.get(currurl);
        await waitForLoader();
        await AddingTestcases(TestcaseARR[i]);
        
        
    }

}

async function AddingTestcases(testcase){

    await waitForLoader();
      
    let AddTestcase = await driver.findElement(swd.By.css(".btn.add-testcase.btn-green"))
    await AddTestcase.click();

    await waitForLoader();
    let inputselector = await (await driver).findElement(swd.By.css(".input-testcase-row .CodeMirror textarea"))
    await editorhandler(".input-testcase-row .CodeMirror div" , inputselector , testcase["Input"] );
    
    let outputselector = await (await driver).findElement(swd.By.css(".output-testcase-row .CodeMirror textarea"))
    await editorhandler(".output-testcase-row .CodeMirror div" , outputselector , testcase["Output"] );

    let SaveTestcase = await (await driver).findElement(swd.By.css(".btn.btn-primary.btn-large.save-testcase"));
    await SaveTestcase.click();

    
}

async function addmoderators(name){
    // let discard = await (await driver).findElement(swd.By.css("#cancelBtn"));
    // await discard.click();
    let moderatorTab = await (await driver).findElement(swd.By.css("li[data-tab=moderators]"));
    await moderatorTab.click();

    let moderatorTextarea = await (await driver).findElement(swd.By.css("#moderator"))
    await moderatorTextarea.sendKeys(name);
    await moderatorTextarea.sendKeys(swd.Key.ENTER);

    let saveChanges = await (await driver).findElement(swd.By.css(".save-challenge.btn.btn-green"));
    await saveChanges.click();
    
}