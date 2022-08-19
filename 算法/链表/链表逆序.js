const head = require("./创建链表.js")
const traverse  =require("./遍历链表.js")

/**递归逆序
 * 
 * @param {*} head 
 * @returns 
 */
function reverseList(head){
    if(!head.next.next){
        head.next.next = head;
        return head.next;
    }else{
        const result = reverseList(head.next)
        head.next.next = head;
        head.next = null;
        return result
    }
}

// const newList = reverseList(head)
// traverse(newList)

function useWhileReverse(head){
    let prev = null;
    let cur = head;
    while(cur){
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}

const newList = useWhileReverse(head);
traverse(newList)


// function reverse(head){
//     if(!head.next.next){
//         head.next.next = head;
//         return head.next;
//     }else{
//         const result = reverse(head.next)
//         head.next.next = head;
//         head.next = null;
//         return result
//     }
// }

// const new1 = reverse(head)
// traverse(new1)

var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};