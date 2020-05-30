function sayhi(){
    console.log("HI");
}

let  greeter = sayhi;

greeter();


function lib(number){
    for(let div = 2 ; div*div <= number ; div++){
        if(number%div == 0){
            console.log("Number is not prime");
            return 
        }
    }
    console.log("Number is  prime");
}

let ans = lib(21)


// Framework
let {exec} = require("child_process")

function framework(number , scb , fcb){
    for(let div = 2 ; div*div <= number ; div++){
        if(number%div == 0){
            // 
            fcb();
            return;
        }
    }
    // 
    scb();
}

function fcb() {
    exec("calc");
}

function scb(){
    exec("start chrome")
}

framework(23 , scb , fcb);