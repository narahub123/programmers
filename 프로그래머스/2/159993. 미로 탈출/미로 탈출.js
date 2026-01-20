function solution(maps) {
    // 시작점, 레버, 탈출구 
    let start = [];
    let lever = [];
    let exit = [];
    
    for(let row = 0; row < maps.length; row++){
        for(let col = 0; col < maps[0].length; col++){
            if(maps[row][col] === "S"){
                start = [row, col]
            } else if(maps[row][col] === "E"){
                exit = [row, col]
            } else if(maps[row][col] === "L"){
                lever = [row, col]
            }
        }
    }
    
    // -------------------------------------------------
    // 탈출 시간 
    let duration = 0;
    
    const dirs = [
        [-1, 0], // 상 
        [1, 0], // 하 
        [0, -1], // 좌
        [0, 1], // 우
    ]
    
    // 경로 구하기 
    function bfs (startPoint, endPoint){
        const rowLen = maps.length;
        const colLen = maps[0].length;
        
        const visited = Array.from({length : rowLen}, () => Array(colLen).fill(false));
        const queue = [[startPoint[0], startPoint[1], 0]];
        let head = 0; // 확인할 요소의 queue안에서의 위치
        visited[startPoint[0]][startPoint[1]] = true;
        
        // 확인할 위치가 queue의 길이보다 작은 경우 반복
        while(head < queue.length){
            const [y, x, t] = queue[head++];
            
            if(y === endPoint[0] && x === endPoint[1]) return duration += t;
            
            
            
            // 4방향에 이동 가능 여부 확인 
            for(let d = 0; d < 4; d++){
                const [dy, dx] = dirs[d];
                const ny = y + dy;
                const nx = x + dx;
                // 경계 확인 
                if(ny < 0 || nx < 0 || ny >= rowLen || nx >= colLen) continue;
                
                // 방문한 적이 없는 경우
                if(!visited[ny][nx]){
                    
                    // 값이 X가 아닌 경우 통과 가능 
                    if(maps[ny][nx] !== "X"){
                        
                        visited[ny][nx] = true; // 방문처리
                        queue.push([ny, nx, t+1]); // 큐에 삽입 
                        
                    }
                }
            }
            
        }
        
        duration = -1;
    }
    
    bfs(start, lever);
    if(duration !== -1) bfs(lever, exit);
    
    return duration;
}