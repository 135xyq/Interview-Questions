// console.log(Array.apply(null,{length:1}))


// console.log((true+false) > 2+true)

// var foo = function foo(){
// 	console.log(foo===foo)
// }
//
// foo()

// function test(a){
// 	const fn = (a)=>{
// 		console.log(arguments[0]);
// 		console.log(this.a)
// 	}
// 	fn(1)
// }
//
// var obj = {
// 	a:2
// }
//
// test.call(obj,3)


Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log)