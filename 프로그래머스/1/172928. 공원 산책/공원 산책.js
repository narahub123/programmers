function solution(park, routes) {
    console.log("공원 너비", park[0].length);
    const w = park[0].length;
    console.log("공원 높이", park.length);
    const h = park.length;
    
    const pos = {y: 0, x: 0}
    
    // 시작 위치 구하기 
    for(let y = 0; y < h; y++){
        for(let x = 0; x < w; x++){
            if(park[y][x] === "S"){
                pos.y = y;
                pos.x = x;
            }
        }    
    }
    
    
    for (const route of routes){
        // 경로 분해
        const [dir, dis] = route.split(" ");
        const distance = Number(dis);
        console.log("거리", distance);
        const isObstacle = (s, e, isHorizontal) => {
            // 장애물을 만나는지 확인
            for(let i = s; i <= e; i++){
                
                if(isHorizontal){
                    if(park[pos.y][i] === "X") {
                        return true;    
                    }
                } else {
                    if(park[i][pos.x] === "X") {
                        return true;
                    }
                }
            }
            return false
        }
        
        if(dir === "E"){
            // 경로를 벗어나는지 확인
            if(pos.x + distance > w - 1) continue;
            
            // 경로에 장애물 존재 여부
            if(isObstacle(pos.x, pos.x+distance, true)) continue;
            
            
            pos.x = pos.x + distance;
        } else if(dir === "W"){
            if(pos.x - distance < 0) continue;
            
            // 경로에 장애물 존재 여부
            if(isObstacle(pos.x - distance, pos.x, true)) continue;
            
            pos.x = pos.x - distance;
            
            
        } else if(dir === "N"){
            if(pos.y - distance < 0) continue;
            
            // 경로에 장애물 존재 여부
            if(isObstacle(pos.y - distance, pos.y, false)) continue;
            
            pos.y = pos.y - distance;
        } else if(dir === "S"){
            if(pos.y + distance > h - 1) continue;
            
            // 경로에 장애물 존재 여부
            if(isObstacle(pos.y, pos.y + distance, false)) continue;
            
            pos.y = pos.y + distance;
        }
    }
    
    
    return [pos.y, pos.x];
}

