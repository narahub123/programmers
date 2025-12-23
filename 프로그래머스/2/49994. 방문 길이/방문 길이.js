function solution(dirs) {
    const visited = new Set();
    
    // 새로운 길 개수
    let count = 0;
    
    let curPos = [0, 0];
    // [가로, 세로]     
    
    for(const direction of dirs){
        const prevPos = curPos;
        
        if(direction === "R"){
            if(curPos[0] + 1 > 5) continue;
            curPos = [curPos[0] + 1, curPos[1]];
        } else if(direction === "L"){
            if(curPos[0] - 1 < -5) continue;
            curPos = [curPos[0] - 1, curPos[1]];
        } else if(direction === "U"){
            if(curPos[1] + 1 > 5) continue;
            curPos = [curPos[0], curPos[1] + 1];
        } else if(direction === "D"){
            if(curPos[1] - 1 < -5) continue;
            curPos = [curPos[0], curPos[1] - 1];
        }
        
        const road = [prevPos, curPos].sort((a, b) => {
          if (a[0] !== b[0]) return a[0] - b[0];
          return a[1] - b[1];
        }).map(p => p.join(',')).join("|");
        
        visited.add(road);
    }
    
    return visited.size
}