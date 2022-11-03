
let a = 2;
let fun = (function(){
    let a = 3;
    return function(){
        a++;
        console.log(a)
    }
})()
fun()
fun()
