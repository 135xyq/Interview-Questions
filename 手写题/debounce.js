function debounce(fn,delay){
    let timer = null;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            return fn.apply(this,args)
        },delay)
    }
}