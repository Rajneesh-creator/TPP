let arr = [2,3,6,5,7,9,12,11];
let num ;
function modify(num){
    if(num%2 == 0){
       return num = num + 1;
    }
    else{
       return num = num - 1;
    }
}

newarr  =  arr.map(modify);

console.log(newarr);

function prime(num){
    for(let j = 2 ; j*j<=num ; j++){
        if(num%j == 0){
            return
        }
        
    }
    return num;
}

newarr1 = arr.filter(prime)
console.log(newarr1)