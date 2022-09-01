Promise.resolve()
	.then(() => {
		return  new Error("error!!!");
	})
	.then((res) => {
		console.log("then1: ", res);
	})
	.catch((err) => {
		console.log("catch1: ", err);
	});

Promise.resolve()
	.then(() => {
		throw  new Error("error!!!");
	})
	.then((res) => {
		console.log("then2: ", res);
	})
	.catch((err) => {
		console.log("catch2: ", err);
	});

// 答案
// then1：  Error: error!!!
// catch2: Error: error!!!