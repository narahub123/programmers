function solution(maps) {
    
    const numOfRows = maps.length;
    const numOfCols = maps[0].length;
    
    const visited = Array.from({length: numOfRows}, () => Array(numOfCols).fill(false));
    
    const startValue = maps[0][0] === "X" ? 0 : Number(maps[0][0]);
    
    const islands = new Map();
    
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for(let row = 0; row < numOfRows; row++){
        for(let col = 0; col < numOfCols; col++){
            if(visited[row][col]) continue;
            
            if(maps[row][col] === "X") {
                visited[row][col] = true;
                continue;
            }
            
            dfs(row, col, `${row}-${col}`);
        }
    }
    
    console.log("방문 여부", visited);
    
    console.log(islands);
    
    function dfs (y, x, start){
        console.log(y,x,start);
        // 방문한적이 있다면 건너뛰기
        if(visited[y][x]) return;

        // 방문한 적 없음, 값이 X인 경우 
        if(maps[y][x] === "X"){
            // 방문 체크 
            visited[y][x] = true;
            return
        }
        
        // 방문 체크
        visited[y][x] = true;
        
        if(!islands.has(start)) islands.set(start, 0); 
        islands.set(start, islands.get(start) + Number(maps[y][x]))
        
        // 상하좌우 확인 
        for(const dir of directions){
            const [dy, dx] = dir;
            
            const ny = y + dy;
            const nx = x + dx;
            
            if(ny < 0 || nx < 0 || ny >= numOfRows || nx >= numOfCols) continue
            
            if(visited[ny][nx]) continue;
            
            if(maps[ny][nx] === "X") {
                visited[ny][nx] = true;
                continue;
            }
            
            dfs(ny, nx, start);
        }
    }
    
    
    return islands.size === 0 ? [-1] : Array.from(islands.values()).sort((a, b) => a - b)
}