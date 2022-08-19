const tree = require("../创建二叉树.js")

function frontTraversal(tree){
    if(tree === null){
        return;
    }
    console.log(tree.value);
    frontTraversal(tree.leftChild);
    frontTraversal(tree.rightChild)
}

frontTraversal(tree)