let arr = [1, [2, [3, [1,[6,[6,6,[5]]]],4, 5]]];
function myFlat(arr){
    let newArr = [];
    arr.forEach(it=>{
        if(!Array.isArray(it)){
            newArr.push(it);
        }
        else{
            newArr =  newArr.concat(myFlat(it))
        }
    })
    return newArr;
}
function myFlat1(arr){
    return arr.toString().split(",")
}
function myFlat2(arr){
    while(arr.some(it=>Array.isArray(it))){
        arr = [].concat(...arr);//摘取一层数组外套
    }
    return arr;
}
//实现了指定深度depth拍平
function myFlat3(arr,depth){
    if(depth<=0||!Array.isArray(arr)){
        return arr;
    }
    let newArray = [];
    arr.forEach(it=>{
        if(!Array.isArray(it)){
            newArray.push(it);
        }
        else{
            newArray = newArray.concat(myFlat3(it,depth-1))
        }
    })
    return newArray;
}