console.log(+NaN)

console.log(+undefined)

console.log(+null)

console.log("转为布尔的假值：undefined、null、NaN、+0、-0、''、false")

const obj1 = {
    a:{b:2,c:3}
}

const obj2 = {...obj1}
obj2.a.c = 9

const obj3 = Object.assign({},obj1)

obj2.a.c = 8;
console.log(obj1,obj2,obj3)