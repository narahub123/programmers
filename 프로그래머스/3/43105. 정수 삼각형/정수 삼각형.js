function solution(triangle) {
    const sums = [[triangle[0][0]]]; //초기값 
    
    for(let i = 1; i < triangle.length; i++){
        const row = triangle[i];
        
        const newSums = [];
        
        for(let j = 0; j < triangle[i].length; j++){
            const prevSum = j === 0 ? sums[i - 1][0] : j === row.length - 1 ? sums[i - 1][sums[i - 1].length - 1] : Math.max(sums[i - 1][j - 1], sums[i - 1][j])
            const newSum = prevSum + triangle[i][j];
            newSums.push(newSum);
        }
        
        sums.push(newSums);
    }
    
    
    const max = Math.max(...sums[triangle.length - 1]);
    
    return max;
}