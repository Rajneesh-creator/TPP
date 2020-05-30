let arr = [21,22,12,32];

function callback(number){
    if(number%2 == 0){
        return number+1;
    }else{
        return number-1;
    }
}

console.log(arr.map(callback));


// filter
let arr1 = [12 , 23, 3, 4, 5];
function fcb(number){
    for(let div = 2 ; div*div <= number ; div++){
        if(number%div == 0){
            // console.log("Number is not prime");
            return false
        }
    }
    return true;
}

console.log(arr1.filter(fcb));