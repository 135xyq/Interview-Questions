


const PENDING = "pending",
      RESOLVED = "resolved",
      REJECTED = "rejected";
class MyPromise{
    promiseState = PENDING;
    promiseResult = null;
    resolvedCallbacks = [];
    rejectedCallbacks = [];
    constructor(fn){
        try{
            fn(this.resolve.bind(this),this.reject.bind(this))
        }
        catch(err){
            this.reject(err)
        }
    }
    pushSettled(result,finalState){
        if(this.promiseState===PENDING){
            setTimeout(()=>{
                this.promiseState = finalState;
                this.promiseResult = result;
                this.resolvedCallbacks.forEach(cb=>{
                    cb(result)
                })
                this.rejectedCallbacks.forEach(cb=>{
                    cb(result)
                })
            },0)
        }
    }
    resolve(value){
        this.pushSettled(value,RESOLVED)
    }
    reject(err){
        this.pushSettled(err,REJECTED)
    }
    linkPromise(callback,finalState,resolve,reject,queue){
        if(typeof callback!=='function'){
            return 
        }
        if(this.promiseState===finalState){
            setTimeout(()=>{
                callback(this.promiseState)
            },0)
        }
        queue.push(res=>{
            if(this.promiseState!==finalState){
                if(this.promiseState===RESOLVED){
                    resolve(this.promiseResult)
                }
                else{
                    reject(this.promiseResult)
                }
            }
            try{
               const result = callback(res);
               if(result instanceof MyPromise){
                   result.then(res=>{
                       resolve(res)
                   },err=>{
                       reject(err)
                   })
               }
               else{
                   resolve(result)
               }
            }
            catch(err){
                reject(err)
            }
        })
    }
    then(thenable,catchable){
        return new MyPromise((resolve,reject)=>{
            this.linkPromise(thenable,RESOLVED,resolve,reject,this.resolvedCallbacks);
            this.linkPromise(catchable,REJECTED,resolve,reject,this.rejectedCallbacks);
        })
    }
    catch(catchable){
        return new MyPromise((resolve,reject)=>{
            this.linkPromise(catchable,REJECTED,resolve,reject,this.rejectedCallbacks);
        })
    }
}

// new MyPromise((resolve,rject)=>{
//     console.log("第一个promise创建")
//     setTimeout(()=>{
//         console.log("第一个promise推向已决")
//         resolve(1)
//     },1000)
// }).then(res=>{
//     console.log("res",res)
//     throw Error("出错了")
// }).catch(err=>{
//     console.log("catch捕获",err)
//     return 13
// }).then(res=>{
//     console.log("最后的res",res)
// })
function _new(Constructor,...args){
    const obj = {};
    obj.__proto__ = Constructor.prototype;
    const res = Constructor.apply(obj,args);
    const flag = res&&(typeof res==="function"||typeof res==="object");//res是否为引用值
    return flag?res:obj;
}

function myInstanceOf(obj,Constructor){
    const prototype = Constructor.prototype;
    let proto = obj.__proto__;
    while(proto){
        if(proto===prototype){
            return true
        }
        proto = proto.__proto__;
    }
    return false
}

function getType(data){
    let res = Object.prototype.toString.call(data).split(" ")[1];
    return res.slice(0,res.length-1)
}

Array.prototype._flat = function(depth){
    function flatHelper(arr,depth){
        const flag = !isFinite(depth);//是否为无限拍平
        if(depth<=0&&!flag){
            return arr;
        }
        let res = [];
        arr.forEach(it=>{
            if(!Array.isArray(it)){
                res.push(it)
            }
            else{
                res = res.concat(flatHelper(it,flag?Infinity:depth-1))
            }
        })
        return res;
    }
    return flatHelper(this,depth)
}
// const arr = [1,2,3,[4,5,[6,7,[9]]]]
// console.log(arr._flat(2))

function deepClone(data,map = new WeakMap()){
    if(data===null){
        return null
    }
    if(typeof data==="function"){
        return function(...args){
            return data.apply(this,args)
        }
    }
    if(typeof data==="object"){
        if(map.get(data)){
            return map.get(data)
        }
        const obj = Array.isArray(data)?[]:{};
        map.set(data,obj);
        const keys = Object.keys(data);
        keys.forEach(key=>{
            obj[key] = deepClone(data[key],map)
        })
        return obj;
    }
    return data;
}


function decounce1(fn,time){
    let canRun = true;
    return function(...args){
        if(canRun){
            canRun =false;
            setTimeout(()=>{
                canRun = true
            },time)
            return fn.apply(this,args)
        }
    }
}
function debounce(fn,time){
    let prev = Date.now();
    return function(...args){
        if(Date.now()-prev>=time){
            const res =  fn.apply(this,args);
            prev = Date.now();
            return res;
        }
    }
}

function curry(fn,...args){
    const len = fn.length;
    return function(...res){
        const arr = args.concat(res);
        if(arr.length>=len){
            return fn.apply(this,arr)
        }
        return curry(fn,...arr)
    }
}


Function.prototype._call = function(ctx,...args){
    if(typeof this!=="function"){
        throw new TypeError("bind must be called by function")
    }
    ctx = ctx===null||ctx===undefined?window:Object(ctx);
    const tag = Symbol("fn");
    ctx[tag] = this;
    const res = ctx[tag](...args)
    delete ctx[tag];
    return res;
}

Function.prototype._bind = function(ctx,...args){
    if(typeof this!=="function"){
        throw new TypeError("bind must be called by function")
    }
    const fn = this;
    return function Fn(...res){
        return fn.apply(this instanceof Fn?this:ctx,[...args,...res])
    }
}


function ajax(method,url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url,true);
        xhr.onreadyStateChange = function(){
            if(this.readyState!==4){
                return 
            }
            if(this.status===200){
                resolve(JSON.parse(this.responseText))
            }
            else{
                reject(new Error(this.statusText))
            }
        }
        xhr.onerror = function(){
            reject(new Error(this.statusText))
        }
        xhr.send()
    })
}

String.prototype._reverse = function(){
    const str = this.valueOf().split("");
    const len = str.length;
    let left = 0,
        right = len-1;
    while(left<right){
        const tempt = str[left];
        str[left] = str[right];
        str[right] = tempt;
        left++;
        right--;
    }
    return str.join("")
}

String.prototype._repeat = function(count){
    let str = "";
    const originValue = this.valueOf();
    for(let i = 0;i<count;i++){
        str+=originValue
    }
    return str;
}

Array.prototype._reduce = function(fn,initValue = 0){
    let account = initValue;//累加器初始值
    const len = this.length;
    for(let i=0;i<len;i++){
        account = fn(account,this[i],i,this)
    }
    return account;
}
// const nums = [1,2,3,4]
// console.log(nums._reduce((sum,it,i,self)=>sum+it*it,0))


Array.prototype._map = function(fn){
    if(!Array.isArray(this)){
        throw new TypeError("_map must be called by array")
    }
    const res = [];
    this.forEach((it,i,self)=>{
        res.push(fn(it,i,self))
    })
    return res
}

Array.prototype._filter = function(fn){
    if(!Array.isArray(this)){
        throw new TypeError("_filter must be called by array")
    }
    const res = [];
    this.forEach((it,i,self)=>{
        if(fn(it,i,self)){
            res.push(it)
        }
    })
    return res;
}

Array.prototype._push = function(item){
    if(!Array.isArray(this)){
        throw new TypeError("_push must be called by array")
    }
    this[this.length] = item;
    return this.length;
}

function formatNum(num){
    let int = num.toString(),
        decimal = "";
    const hasDot = int.indexOf(".");
    if(hasDot!==-1){
        decimal = int.slice(hasDot);
        int = int.slice(0,hasDot);
    }
    return int.replace(/\d(?=(\d{3})+$)/g,$=>$+",") + decimal
}
// console.log(formatNum(12456465434657.456))