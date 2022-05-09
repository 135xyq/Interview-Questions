Array.prototype._push = function(data){
    if(!Array.isArray(this)){
        throw new TypeError("must be array");
    }
    this[this.length] = data;
    return this.length
}
// const arr = [1,2,3];
// console.log(arr._push(5),arr);
Array.prototype._filter = function(fn){
    if(!Array.isArray(this)){
        throw new TypeError("must be array");
    }
    const arr = [];
    const len = this.length;
    for(let i=0;i<len;i++){
        if(fn(this[i],i,this)){
            arr.push(this[i])
        }
    }
    return arr;
}
// const datas = [
//     {age:14},
//     {age:16},
//     {age:30},
//     {age:19}
// ]
// console.log(datas._filter(it=>it.age<=20))
Array.prototype._map = function(fn){
    if(!Array.isArray(this)){
        throw new TypeError("must be array");
    }
    const arr = [];
    const len = this.length;
    for(let i=0;i<len;i++){
        arr.push(fn(this[i],i,this))
    }
    return arr;
}
// console.log([1,2,3]._map(it=>it+"zzx"))
String.prototype._repeat = function(count){
    let str = "";
    for(let i=0;i<count;i++){
        str+=this.valueOf()
    }
    return str;
}
// console.log("zzx"._repeat(5));
String.prototype._reverse = function(){
    let str = "";
    const originStr = this.valueOf();
    const len = originStr.length;
    for(let i=len-1;i>=0;i--){
        str+=originStr[i]
    }
    return str;
}
// console.log("abcd"._reverse())

