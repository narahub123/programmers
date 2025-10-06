function solution(players, callings) {
    
    const order = Object.fromEntries(players.map((p, i) => [p, i]));
    
    
    for(const calling of callings){
        // 해당 선수의 순서 
        const curIndex = order[calling];
        const prevIndex = curIndex - 1;
        
        order[calling] = prevIndex;
        players[curIndex] = players[prevIndex];
        order[players[prevIndex]] = curIndex;
        players[prevIndex] = calling;
        
    }
    
    return players;
}