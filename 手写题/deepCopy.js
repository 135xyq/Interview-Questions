function deepCopy(data,map = new WeakMap()){
    if(data===null){
        return null;
    }
    if(typeof data==="function"){
        return function(...args){
            return data.apply(this,args);
        }
    }
    if(typeof data==="object"){
        if(map.get(data)){//判断本次要拷贝的对象是不是已经之前拷贝过了, 若是则说明循环引用
            return map.get(data)
        }
        const newObj = Array.isArray(data)?[]:{};
        const keys = Object.keys(data);
        map.set(data,newObj);//每次拷贝对象时将对象存起来
        for(let key of keys){
            newObj[key] = deepCopy(data[key],map);
        }
        return newObj;
    }
    return data;
}