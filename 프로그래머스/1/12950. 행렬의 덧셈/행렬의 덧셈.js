function solution(arr1, arr2) {
    if(arr1.length !== arr2.length) return;
  
    const result = [];
    
    for(let i = 0; i < arr1.length; i++){
        const resultRow = [];
        
        for(let j = 0; j < arr1[0].length; j++){
            resultRow.push(arr1[i][j] + arr2[i][j]);
        }
        
        result.push(resultRow);
    }
    
    return result;
}