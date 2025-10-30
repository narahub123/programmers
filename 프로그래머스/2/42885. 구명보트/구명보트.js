function solution(people, limit) {
    
    let count = 0;
    
    const sort = people.sort((a, b) => b - a);
    
    let curPt = sort.length - 1;
    
    
    for(let i = 0; i < sort.length; i++){
        
        if(i > curPt) break;
        
        if(i === curPt) {
            count++;
            break;
        }
        
        const max = sort[i];
        const min = sort[curPt];
        
        if(min + max <= limit){
            curPt--;
        }
        
        count++;
    }
    
    
    return count;
}