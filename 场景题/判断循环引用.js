// 对象的循环引用判断
function isCycleObject(obj,arr = []){
    let flag = false;//是否是循环引用
    for(let prop in obj){
        if(obj.hasOwnProperty(prop)){
            const item = obj[prop];
            if(typeof item==="object"&&item){
                const isHas = arr.includes(item);
                if(item===obj||isHas){
                    return true 
                }
                else{
                   arr.push(item);
                   flag = isCycleObject(item,arr)
                }
            }
        }
    }
    return flag;
}