function mySetInterval(fn,delay){
    const timer = {
        flag:false
    }
    function interval(){
        timer.flag = setTimeout(()=>{
            fn();
            interval();
        },delay)
    }
    interval();
    return timer;
}