function printMatrix(matrix)
{
    let top = 0,
        bottom = matrix.length-1,
        left = 0,
        right = matrix[0].length- 1;
    const res = [];
    while(top<=bottom&&left<=right){
        for(let i=left;i<=right;i++){
            res.push(matrix[top][i])
        }
        for(let i=top+1;i<bottom;i++){
            res.push(matrix[i][right])
        }
        if(top<bottom){//当top===bottom时防止重复打印
            for(let i=right;i>=left;i--){
                res.push(matrix[bottom][i])
            }
        }
        if(left<right){//当left===right时防止重复打印
            for(let i=bottom-1;i>top;i--){
                res.push(matrix[i][left])
            }
        }
        top++;
        bottom--;
        left++;
        right--;
    }
    return res
}