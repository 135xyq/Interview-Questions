var obj = {
	name: "cuggz",
	fun: function () {
		console.log(this.name);
	},
};
obj.fun();
new obj.fun();


// 答案
// cuggz
// undefined