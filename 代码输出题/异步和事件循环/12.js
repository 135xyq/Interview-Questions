Promise.reject("err!!!")
	.then(
		(res) => {
			console.log("success", res);
		},
		(err) => {
			console.log("error", err);
		}
	)
	.catch((err) => {
		console.log("catch", err);
	});


// 答案
// error err!!!