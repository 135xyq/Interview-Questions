console.log(1)

setImmediate(()=>{
	console.log(2)
})

setTimeout(()=>{
	console.log(3)
},0)

new Promise(function (resolve){
	console.log(4);
	resolve();
	console.log(5)
}).then(()=>{
	new Promise(function(resolve){
		console.log(22)
		resolve();
		console.log(23)
	}).then(()=>{
		console.log(33)
	})
})

process.nextTick(()=>{
	console.log(6)
})

console.log(7)

console.log(8)