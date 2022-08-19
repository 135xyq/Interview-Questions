const tree1 = require("../创建二叉树.js");
const tree2 = require("../创建二叉树1.js");
const tree3 = require("../创建二叉树2.js");

function compare(root1, root2) {
	if (root1 === root2) {
		return true;
	}
	if (
		(root1 === null && root2 !== null) ||
		(root1 !== null && root2 === null)
	) {
		return false;
	}
	if (root1.value !== root2.value) {
		return false;
	}
	return (
		(compare(root1.leftChild, root2.leftChild) &&
			compare(root1.rightChild, root2.rightChild)) ||
		(compare(root1.leftChild, root2.rightChild) &&
			compare(root1.rightChild, root2.leftChild))
	);
}

console.log(compare(tree1, tree2));
console.log(compare(tree2, tree3));
console.log(compare(tree1, tree3));
