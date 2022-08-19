const tree = require("../创建二叉树.js")

function endTraversal(root){
    if(root === null){
        return;
    }

    endTraversal(root.leftChild);
    endTraversal(root.rightChild)
    console.log(root.value)
}

endTraversal(tree)