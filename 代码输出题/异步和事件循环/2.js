const promise1 = new Promise((resolve, reject) => {
	console.log("promise1");
	resolve("resolve1");
});
const promise2 = promise1.then((res) => {
	console.log(res);
});
console.log("1", promise1);
console.log("2", promise2);

setTimeout(() => {
	console.log("3", promise2);
}, 1000);

// 答案：
// promise1
// 1 fulfilled resolved1
// 2 pending
// resolve1
// 3 fulfilled undefined
