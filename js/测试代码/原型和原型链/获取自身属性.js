function Car(name,salary){
    this.name = name;
    this.salary = salary;
}

Car.prototype.b = "a"

const one = new Car("one","1")
for (const key in one) {
    // console.log(key,one.hasOwnProperty(key))
    if(one.hasOwnProperty(key)){
        console.log(key)
    }
}
