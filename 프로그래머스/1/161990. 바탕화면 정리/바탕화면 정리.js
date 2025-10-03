function solution(wallpaper) {
    
    const xs = [];
    const ys = [];
    
    // 어떻게 좌표를 추출해야 하는가?
    for(let y = 0; y < wallpaper.length; y++){
        const row = wallpaper[y];
        
        for(let x = 0; x < row.length; x++){
            // 좌표 
            const coord = row[x];
            
            // 좌표가 빈칸인 경우 넘어가기 
            if(coord === ".") continue;
        
            // 좌표에 파일 있는 경우 
            ys.push(y);
            xs.push(x);
        }
    }
    
    // 좌표 모음
    console.log(ys, xs);
    
    // 각 좌표의 최소, 최대값 
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    
    console.log(minY, minX);
    console.log(maxY + 1, maxX + 1);
    
    var answer = [minY, minX, maxY + 1, maxX + 1];
    
    return answer;
}