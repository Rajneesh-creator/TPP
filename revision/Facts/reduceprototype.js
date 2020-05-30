
let arr  = [12,32,34,21];

function add(acc , crrval){
      return acc+crrval;
}

console.log(arr.reduce(add));

Array.prototype.myreduce = function (callback) {
    let acc = 0;
    for(let i = 0 ; i<this.length ;i++){
         acc  =  callback(acc, this[i]);
    }
    return acc;
}

console.log(arr.myreduce(add));