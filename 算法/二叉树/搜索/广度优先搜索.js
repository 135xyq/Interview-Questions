const tree = require("../创建二叉树.js");

function bfs(root, target) {
	if (root === null) {
		return false;
	}
	let childList = [];
	if (root.value === target) {
		return true;
	} else {
		if (root.leftChild) {
			childList.push(root.leftChild);
		}
		if (root.rightChild) {
			childList.push(root.rightChild);
		}
	}
    let flag = false;
    for(let i = 0 ; i< childList.length;i++){
        let result = bfs(childList[i],target)
        flag = flag || result;
    }
    return flag
}

console.log(bfs(tree, "a"));
console.log(bfs(tree, "b"));
console.log(bfs(tree, "c"));
console.log(bfs(tree, "d"));
console.log(bfs(tree, "e"));
console.log(bfs(tree, "f"));
console.log(bfs(tree, "g"));
