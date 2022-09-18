function Parent1() {
	this.name = "parent1";
	this.say = function () {
		console.log(this.age);
	};
}

Function.prototype.age = 1;
Object.prototype.age = 2;

let one = new Parent1();
one.say();
