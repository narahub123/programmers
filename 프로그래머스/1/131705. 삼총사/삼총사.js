function solution(numbers) {
    let count = 0;
    
    // 첫번째 수 
    for(let i = 0; i < numbers.length; i++){
        
        // 두번째 수 
        for(let j = i + 1; j < numbers.length; j++){
            
            // 세번째 수
            for(let k = j + 1; k < numbers.length; k++){
                
                if(numbers[i] + numbers[j] + numbers[k] === 0) count++;
            }
        }
    }
    
    console.log("삼총사", count);
    
    return count;
}