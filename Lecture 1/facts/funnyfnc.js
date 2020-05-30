const {exec} = require("child_process");
var opn = require('opn');


function takerequest(data,success,failure){
    if(data%2 == 0){
        success();
    }
    else{
        failure();
    }
}


function success(){
    console.log("your request was completed");
    exec("calc");

}

function failure(){
    // exec('open -a "Google Chrome" http://www.facebook.com');
    
    opn('https://www.facebook.com/');
    console.log("mn");
}


takerequest(17,success,failure);