function quickSort(arr) {
	if (arr === null || arr.length === 0) {
		return [];
	}
	const leader = arr[0];
	let left = [],
		right = [];
    for(let i = 1 ; i < arr.length;i++){
        if(arr[i] < leader){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    left = quickSort(left)
    right = quickSort(right)
    left.push(leader);
    return left.concat(right)
}

console.log(quickSort([5,2,4,1,8,4,3,0,6]))
