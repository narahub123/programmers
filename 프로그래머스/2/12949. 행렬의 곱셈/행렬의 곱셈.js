function solution(arr1, arr2) {
    const result = [];
    
    for(let i = 0; i < arr1.length; i++){
        // 행 
        const row = arr1[i];
        
        const rows = [];
        
        for(let j = 0; j < arr2[0].length; j++){
            // 열
            const col  = arr2.map(ele => ele[j]);    
            
            let sum = 0;
            
            for(let k = 0; k < row.length; k++){
                const rowElem = row[k];
                const colElem = col[k];
                
                sum += (rowElem * colElem)
            }
            
            
            rows.push(sum);
        }
        
        result.push(rows);
    }
    
    return result;
    
}