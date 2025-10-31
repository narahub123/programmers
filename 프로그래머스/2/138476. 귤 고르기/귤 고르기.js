function solution(k, tangerine) {
    const sort = tangerine.sort((a, b) => a - b);
    
    console.log("정렬", sort);
    
    const counts = [];
    
    for(let i = 0; i < sort.length; i++){
        let count = counts[sort[i] -1] ?? 0;
        
        counts[sort[i] -1] = count + 1;
    }
    
    console.log("개수들", counts);
    
    const resorted = counts.sort((a, b) => b - a);
    
    console.log("개수들 내림차순", resorted);
    
    let count = 0;
    
    let sum = 0;
    
    for(let i = 0; i < resorted.length; i++){
        if(sum >= k) break;
        
        const num = resorted[i];
        
        sum += num;
        count++;
        
    }
    
    return count;
}