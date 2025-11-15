function solution(citations) {
    
    
    let hIndex = citations.length;
    
    while(hIndex >= 0){
        
        
        const count = citations.filter(c => hIndex <= c).length;
        
        
        if(hIndex <= count) {
            break;
        }
        
        if(hIndex <= 0){
            hIndex = 0;
            break;
        }
        
        hIndex--;
    }
    
    
    
    return hIndex;
}