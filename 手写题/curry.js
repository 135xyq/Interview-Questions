function curry(fn,...args1){
    const len = fn.length;
    return function(...args2){
        const all = args1.concat(args2);
        if(all.length>=len){
            return fn.apply(this,all);
        }
        else{
            return curry(fn,...all);
        }
    }
}