function Root(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
}


const a = new Root('a');
const b = new Root('b');
const c = new Root('c');
const d = new Root('f');
const e = new Root('g');
const f = new Root('d');
const g = new Root('e');

a.leftChild = c;
a.rightChild = b;
c.leftChild = d;
c.rightChild = e;
b.leftChild = f;
b.rightChild = g;

// console.log(a)

module.exports = a;