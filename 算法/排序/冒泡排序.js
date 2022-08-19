const {compare,exchange} = require("./index.js")

function sort(arr){
    for(let i = 0 ; i < arr.length; i++){
        for(let j = 0 ;j < arr.length-i;j++){
            if(compare(arr[j],arr[j+1],0)){
                exchange(arr,j,j+1)
            }
        }
        console.log(arr)
    }
    return arr;
}

console.log(sort([2,4,1,5,3,8]))