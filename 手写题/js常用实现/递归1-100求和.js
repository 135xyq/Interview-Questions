function add(x){
    if(x === 1){
        return 1;
    }
    return x + add(x-1)
}
console.log(add(100))