function foo() {
	console.log(this.a);
}

function doFoo() {
	foo();
}

var obj = {
	a: 1,
	doFoo: doFoo,
};

var a = 2;
obj.doFoo();


// 答案
// node环境下为 undefined
// 浏览器环境下为  2