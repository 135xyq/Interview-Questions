const promise = Promise.resolve().then(() => {
	return promise;
});
promise.catch(console.err);


// 答案
// [TypeError: Chaining cycle detected for promise #<Promise>]   