const tree = require("../创建二叉树.js")

function middleTraversal(root){
    if(root === null){
        return;
    }
    middleTraversal(root.leftChild)
    console.log(root.value)
    middleTraversal(root.rightChild)
}

middleTraversal(tree)