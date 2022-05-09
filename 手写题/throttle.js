function throttle(fn,wait){
    let prev = Date.now();
    return function(...args){
        if(Date.now()-prev>=wait){
            prev = Date.now();
            return fn.apply(this,args);
        }
    }
}