const tree = require("../创建二叉树.js")

function dfs(root,target){
    if(root === null){
        return false;
    }
    if(root.value === target){
        return true;
    }
    const left = dfs(root.leftChild,target)
    const right = dfs(root.rightChild,target)
    return left || right;
}

console.log(dfs(tree,"c"))