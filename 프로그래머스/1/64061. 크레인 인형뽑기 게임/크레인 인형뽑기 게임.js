function solution(board, moves) {
    
    const columns = Array.from({length: board.length}).map((_) => []);
    
    // 격자의 순서 변환 
    for(let i = board.length -1; i >= 0; i--){
        const row = board[i];
        for(let j = 0; j < row.length; j++){
            if(row[j] !== 0){
                columns[j].push(row[j]);    
            }
        }
    }
    
    const stack = [];
    
    let count = 0;
    
    for(let i = 0; i < moves.length; i++){
        
        const pick = columns[moves[i] - 1].pop();
        
        if(pick === undefined){
            continue;
        }
        
        if(stack[stack.length - 1] === pick){
            count += 2;
            stack.pop();
            continue;
        }
        stack.push(pick);
    }
    
    // console.log(stack)
    return count
}