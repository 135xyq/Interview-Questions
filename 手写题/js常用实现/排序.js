let ary = [5, 7, 8, 11, 3, 6, 4];

// 冒泡排序

/* for (let i = 0; i < ary.length; i++) {
  for (let j = 0; j < ary.length; j++) {
    if (ary[j] > ary[j + 1]) {
      [ary[j], ary[j + 1]] = [ary[j + 1], ary[j]]
    }
  }
} */

// 选择排序
/* for (let i = 0 ; i < ary.length -1; i++) {
    for(let j = i+1 ; j < ary.length ; j++) {
        if(ary[i] > ary[j]){
            ary[i] = ary[j] + ary[i];
            ary[j] = ary[i] - ary[j];
            ary[i] = ary[i] - ary[j];
        }
    }
} */

// 归并排序
/* function sort(ary) {
    if(ary.length === 0){
        return [];
    }
    let left = [],right = [],leader = ary[0];
    for(let i = 1; i < ary.length; i++) {
        if(ary[i] < leader){
            left.push(ary[i])
        }else{
            right.push(ary[i])
        }
    }
    return [...sort(left),leader,...sort(right)]
}
 */

// 插入排序

function sort(ary) {
	for (let i = 0; i < ary.length; i++) {
        let index = i;
        let temp = ary[i];
        while(index > 0 && temp < ary[index-1]){
            ary[index] = ary[index-1];
            index--;
        }
        ary[index] = temp;
    }
    return ary;
}

console.log(sort(ary));
