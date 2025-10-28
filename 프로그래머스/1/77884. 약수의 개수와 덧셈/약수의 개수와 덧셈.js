function solution(left, right) {
    let sum = 0;
    
    for(let i = left; i <= right; i++){
        const count = divisorCounter(i);
        sum += count % 2 === 0 ? i : i * -1
    }
   
    return sum;
    
}

const divisorCounter = (num) => {
    // 약수 배열
    let count = 0;
    
    for(let i = 1; i <= Math.floor(Math.sqrt(num)); i++){
        
        if(num % i === 0) {
            count++;
            
            if(i !== num / i) count++;
            
        }
    }
    
    return count;
}