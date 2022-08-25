const map = new Map();

for(let i = 0 ;i<5;i++){
    map.set(i,i+10)
}

console.log(map.keys())

console.log(map.values())

console.log(map.entries())

const weakMap =new WeakMap()
const obj={a:1}
weakMap.set(obj,132)

console.log(weakMap,weakMap.get(obj))