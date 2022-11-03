const myp = Promise.resolve(Promise.resolve('promise1'))
async function f1(){
    myp.then(res=>res).then(res=>console.log(res))
    setTimeout(() => {
        console.log('setTimeout1')
    },0)
    console.log(2)
}

async function f2(){
    console.log(23)
    const res = await myp;
    console.log(2323)
    console.log(await res,1);
    setTimeout(() =>{
        console.log('setTimeout2')
    },0)
    console.log(3)
}

f1()
f2()

console.log(1313412312)