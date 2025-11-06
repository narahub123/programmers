function solution(elements) {
    
    const sums = [];
    
    const length = elements.length;

    // 기준 값
    for(let i = 0; i < length; i++){
        
        // 길이 : 수열 위치가 이동될수록 길이가 줄어듬 주의 
        for(let len = 1; len <= length; len++){
            
            let sum = 0;
            
            for(let n = 0; n < len; n++){
                // 
                const next = i + n > length - 1 ? (i + n) % length: i + n;
                
                sum += elements[next];
            }
            sums.push(sum);
        }
    }
    
    return (new Set(sums).size)
}