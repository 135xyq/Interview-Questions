/**
 * 题目四：解构赋值
 * 请实现一个通用的Array解构赋值方法 destructuringArray，
 * 可将目标数组（targetArray）通过ES6的解构格式（formater），输出解构结果对象
 */
 Array.prototype.destructuringArray = function(format){
    const arr = format.split(",");
    const resIndex = arr.findIndex(it=>it.startsWith("..."));//找到剩余参数的下标
    if(resIndex!==-1&&resIndex!==arr.length-1){
        throw new Error("the res element must be last ")
    }
    const res = {};
    arr.forEach((it,i)=>{
        if(i===arr.length-1&&resIndex!==-1){//当为剩余参数时
            res[it.slice(3)] = this.slice(i)
        }
        else{
            res[it] = this[i]
        }
    })
    return res
}
//没有考虑跳位解构和子数组解构的情况