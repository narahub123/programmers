function solution(players, callings) {
    
    const idxMap = new Map(players.map((p, i) => [p, i])); 
    
    for(const calling of callings){
        
        
        // 인덱스 조회 O(1)
        const idx = idxMap.get(calling);
        
        const before = players[idx - 1];
        
        players[idx - 1] = calling;
        players[idx] = before;
        
        idxMap.set(calling, idx-1);
        idxMap.set(before, idx);
        
    }
    
    return players;
}