 
 Array.prototype.mymap = function (callback){
     let arr = []
     for(let  i = 0 ;i<this.length ;i++){
         arr[i] = callback(this[i]);
     }
     return arr;
 }


 function callback(number){
    if(number%2 == 0){
        return number+1;
    }else{
        return number-1;
    }
}

arr1 = [23 ,32 ,12 ,23];

console.log(arr1.mymap(callback));



Array.prototype.filter = function(fcb){
    let arr = []
    for(let  i = 0 ;i<this.length ;i++){
        if(fcb(this[i])){
            arr.push( this[i]);
        }
    }
    return arr;
}

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