function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function endMiddleToTree(end,middle){
    if(end.length === 0 || middle.length ===0 || end.length !== middle.length || end === null || middle === null){
        return ;
    }
    const root = new Node(end[end.length-1]);//创建根节点
    const rootIndex = middle.indexOf(end[end.length-1]);//找到中序遍历根节点的位置
    const endLeft = end.slice(0,rootIndex);
    const endRight = end.slice(rootIndex,end.length-1);
    const middleLeft = middle.slice(0,rootIndex)
    const middleRight = middle.slice(rootIndex+1);
    root.left = endMiddleToTree(endLeft,middleLeft)
    root.right = endMiddleToTree(endRight,middleRight)
    return root;
}

const end = ["d","e","b","f","g","c","a"];
const middle = ["d","b","e","a","f","c","g"]

console.log(endMiddleToTree(end,middle))