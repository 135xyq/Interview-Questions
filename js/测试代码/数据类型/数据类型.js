function fn(){

}

console.log("数据类型：number、boolean、string、object、undefined、null、symbol、bigInt")

console.log("typeof判断类型：function、number、string、undefined、boolean、symbol、object")

console.log("function",typeof fn)

console.log("null", typeof null)

const number = BigInt(111111111111111111111111111111)
console.log(typeof number)

console.log(fn instanceof Function)
console.log("a" instanceof String)


console.log(fn.constructor === Function)


console.log("-----------------")


var a = Object.prototype.toString;

 
console.log(a.call(2));
console.log(a.call(true));
console.log(a.call('str'));
console.log(a.call([]));
console.log(a.call(function(){}));
console.log(a.call({}));
console.log(a.call(undefined));
console.log(a.call(null));


console.log(void 0)


console.log(typeof NaN)

console.log(isNaN("12a"),Number.isNaN(NaN))