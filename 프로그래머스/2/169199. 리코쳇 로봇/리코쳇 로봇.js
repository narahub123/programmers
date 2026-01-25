function solution(board) {
    // 시작 지점과 도착 지점 찾기
    let start = [0, 0];
    let end = [0, 0];
    
    const directions = [
        [-1, 0], // 상 
        [1, 0], // 하 
        [0, -1], // 좌
        [0, 1], // 우 
    ];
    
    const rowLen = board.length;
    const colLen = board[0].length;
    // 시작 지점과 도착 지점 찾기 
    for(let row = 0 ; row < rowLen ; row++){
        for(let col = 0; col < colLen; col++){
            const cell = board[row][col];
            if(cell === "R"){
                start = [row, col];
            } else if (cell === "G"){
                end = [row, col];
            }
        }
    }
    
    
    function bfs (start){
        const [y, x] = start;
        const visited = Array.from({length: rowLen}, () => Array(colLen).fill(false));
        const queue = [[y, x, 0]]; // 댜음 처리할 경로 
        
        
        while(queue.length){
            let [y, x, count] = queue.shift();
        
            if(visited[y][x]) continue;
            visited[y][x] = true; // 방문 처리 
            
            if(board[y][x] === "G"){
                return count;
            }
            
            
            for(const dir of directions){
                const [dy, dx] = dir;
                
                let ny = y;
                let nx = x;
                
                if(dy){
                    // 이전 셀을 구하는 방법 : 정리할 것 
                    while(true){
                        const next = ny + dy 
                        
                        if(next < 0 || rowLen <= next) {
                            if(!visited[ny][x]) {
                                queue.push([ny, x, count+1]);
                            }
                            break;
                        }
                        
                        if(board[next][x] === "D") {
                            if(!visited[ny][x]){
                                queue.push([ny, x, count+1]);
                                
                            }
                            
                            break;
                        }
                        
                        ny = next;
                    }
                    
                } 
                
                if(dx) {
                    while(true){
                        const next = nx + dx;
                        
                        if(next < 0 || colLen <= next) {
                            if(!visited[y][nx]){
                                queue.push([y, nx, count+1]);
                            }
                            
                            break;
                        }
                        
                        
                        if(board[y][next] === "D") {
                            if(!visited[y][nx]){
                                queue.push([y, nx, count+1]);
                            }
                            
                            break;
                        }
                        
                        nx = next;
                    }
                }
                
            }
            
        }
        return -1;
    }
    
    return bfs(start);
    
}