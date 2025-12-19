function solution(priorities, location) {
    
    let order = 0;
    
    while(priorities.length > 0){
        const first = priorities.shift();
        
        // 우선 순위가 있는 확인
        const isPrior = priorities.findIndex(p => p > first);
        
        // 우선 순위가 있는 경우 
        if(isPrior !== -1){
            // 큐의 마지막에 추가 
            priorities.push(first);
            
            // 추출한 큐가 조사하는 위치인 경우 
            if(location === 0) {
                location = priorities.length - 1;
            }else {
                location -= 1;
            } 
            
            continue;
        }
        
        // 우선 순위가 없는 경우 
        order++;
        
        if(0 === location){
            break;
        }
        
        location -= 1;
    }
    
    
    return order;
}