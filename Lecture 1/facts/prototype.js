Array.prototype.mymap = function(func){
    var i;
    newarr = [] 
    for (i = 0; i < this.length; i++) { 
        newarr.push(func(this[i]))
    }
    return newarr;
}
            
            
function modify(num){
    if(num%2 == 0){
       return num = num + 1;
    }
    else{
       return num = num - 1;
    }
}


arr = [2,3,4,5,6];

console.log(arr.mymap(modify))



Array.prototype.myfilter = function(func){
    newarr = []
    for(let i = 0 ; i<this.length; i++){
        if(func(this[i]))
        newarr.push(this[i])
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
            
console.log(arr.myfilter(prime)) 
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
        