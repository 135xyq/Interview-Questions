function Node(value){
    this.value = value;
    this.next = null;
}

const head  = new Node(0);
let list = head;

for(let i = 0 ; i < 5;i++){
    list.next = new Node(i+1);
    list = list.next
}

console.log(list,head)