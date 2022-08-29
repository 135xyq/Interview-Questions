function Person(name,sex){
    this.name = name;
    this.sex= sex;
}

Person.prototype.sayHi = function(){
    console.log("hi")
}

const one = new Person("xyq","男");

console.log(Person.constructor)

console.log(one.constructor)


var obj = {brand:'华为',price:1999};
Object.defineProperty(obj,'id',{value:1})
Object.defineProperty(obj,'price',{configurable:false})
console.log(Object.keys(obj).length); 
for (var k in obj){
    console.log(obj[k]);
}
obj.price = 999;
delete obj['price']
console.log(obj);