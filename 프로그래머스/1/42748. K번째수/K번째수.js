function solution(array, commands) {
    
    const picks = [];
    
    for(const command of commands){
        console.log(command);
        const [i, j, k] = command
        // 자르기
        const cut = array.slice(i-1, j);
        
        // 정렬 
        const sort = cut.sort((a, b) => a - b);
        
        // 뽑기
        const pick = sort[k-1];
        
        picks.push(pick);
    }
    
    return picks;
}