function solution(k, ranges) {
    // 우박 수열 구하기 
    var answer = [k];
    
    while(k !== 1){
        if(k % 2 === 0){
            k = k / 2;
        } else {
            k = k * 3 + 1;
        }
        
        answer.push(k)
    }
    
    const areas = [];
    
    // 계산 범위 구하기 
    for(const range of ranges){
        const [a, b] = [range[0], answer.length- 1 + range[1]];
        
        // 너비 구하기 
        if(a < b){
            let area = 0;
            for(let h = a+1; h <=b; h++){
                const high = Math.max(answer[h-1], answer[h]);
                const lower = Math.min(answer[h-1], answer[h]);
                const gap = high - lower;
                area += lower + gap / 2;
                
            }
            areas.push(area);
        } else if(b < a){
            areas.push(-1);
        } else {
            areas.push(0);
        }
    }
    
    return areas;
}