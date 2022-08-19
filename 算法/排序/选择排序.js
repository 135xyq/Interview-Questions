const {compare,exchange} = require("./index.js")

function sort(arr){
    for(let i =  0; i < arr.length - 1;i++){
        for(let j = i + 1; j < arr.length;j++){
            if(compare(arr[j],arr[i])){
                exchange(arr,i,j);
            }
        }
    }
    return arr;
}

console.log(sort([4,2,6,0,1,5,3,9]))