function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function frontMiddleToTree(front,middle){
    if(front.length === 0 || middle.length ===0 || front.length !== middle.length || front === null || middle === null){
        return ;
    }
    const root = new Node(front[0]);//创建根节点
    const rootIndex = middle.indexOf(front[0]);//找到中序遍历根节点的位置
    const frontLeft = front.slice(1,rootIndex+1);
    const frontRight = front.slice(rootIndex+1);
    const middleLeft = middle.slice(0,rootIndex)
    const middleRight = middle.slice(rootIndex+1);
    root.left = frontMiddleToTree(frontLeft,middleLeft)
    root.right = frontMiddleToTree(frontRight,middleRight)
    return root;
}

const front = ["a","b","d","e","c","f","g"];
const middle = ["d","b","e","a","f","c","g"]

console.log(frontMiddleToTree(front,middle))