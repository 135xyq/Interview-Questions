# setTimeout、Promise、Async/Await 的区别

  setTimeout: 在指定时间后添加一个任务到宏任务队列中

  Promise: 当promise推向已决时, 如果是通过resolve推向已决则依次将所有then方法传入的第一个回调函数添加到微任务队列中. 如果是通过reject推向已决则将所有then方法传入的第二个回调函数以及通过catch方法注册的回调函数加入到微任务队列中

  async: 使用在函数定义的function 关键字前, 本质上是一个语法糖, 使用了async关键字的函数一定返回一个promise, 函数的return值即为该promise推向已决的状态数据函数体内的代码相当于写在了new Promise((resolve,reject)=>{

​    //函数体代码

}) 里面

await: 只能在使用了async关键字的函数的函数体内使用, await关键字后面跟一个promise, await会阻塞代码的执行,  当promise推向已决后, await表达式后面的所有代码会被加入微任务队列等待执行, 并且await 表达式的值为promise推向已决时的状态数据

题:

```js
async function async1() {
	console.log('async1 start');
	await async2();
	console.log('asnyc1 end');
}
async function async2() {
	console.log('async2');
}
console.log('script start');
setTimeout(() => {
	console.log('setTimeOut');
}, 0);
async1();
new Promise(function (reslove) {
	console.log('promise1');
	reslove();
}).then(function () {
	console.log('promise2');
})
console.log('script end');
```

