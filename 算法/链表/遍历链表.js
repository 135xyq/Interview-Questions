const head = require("./创建链表.js");//导入创建的链表

/**
 * while遍历链表
 * @param {*} head 
 */
function useWhileTraversal(head){
    let temp  = head;
    while(temp){
        console.log(temp.value)
        temp = temp.next;
    }
}

// useWhileTraversal(head);

/**
 * 递归遍历
 * @param {*} head 
 * @returns 
 */
function useRecursiveTraversal(head){
    if(head === null){
        return;
    }
    console.log(head.value);
    useRecursiveTraversal(head.next)
}

// useRecursiveTraversal(head);

module.exports = useRecursiveTraversal;
