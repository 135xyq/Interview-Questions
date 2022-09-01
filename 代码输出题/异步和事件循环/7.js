const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("success");
	}, 1000);
});
const promise2 = promise1.then(() => {
	throw new Error("error!!!");
});
console.log("promise1", promise1);
console.log("promise2", promise2);
setTimeout(() => {
	console.log("promise1", promise1);
	console.log("promise2", promise2);
}, 2000);


// 答案

// promise1 pending
// promise2 pending
// 报错
// promise1 {fulfilled success}
// promise2 reject new Error("error!!!")