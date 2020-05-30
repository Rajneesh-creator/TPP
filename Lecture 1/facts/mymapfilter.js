function mymap(arr,func){
    newarr = []
    for(let i = 0 ; i<arr.length; i++){
        newarr.push(func(arr[i]))
    }
    return newarr
}

function modify(num){
    if(num%2 == 0){
       return num = num + 1;
    }
    else{
       return num = num - 1;
    }
}
arr  = [2,3,4,32,12]
console.log(mymap(arr,modify))


function myfilter(arr,func){
    newarr = []
    for(let i = 0 ; i<arr.length; i++){
        if(func(arr[i]))
        newarr.push(arr[i])
    }
    return newarr
}

function prime(num){
    for(let j = 2 ; j*j<=num ; j++){
        if(num%j == 0){
            return false
        }
         
    }
    return true
}

console.log(myfilter(arr,prime))