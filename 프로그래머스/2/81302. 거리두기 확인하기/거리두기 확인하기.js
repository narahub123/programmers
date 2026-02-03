function solution(places) {

    const direct = [[-1,0],[1,0],[0,-1],[0,1]];
    const jump = [[-2,0],[2,0],[0,-2],[0,2]];
    const diagonal = [[-1,-1],[-1,1],[1,-1],[1,1]];
    
    const inRange = (r,c) => r>=0 && c>=0 && r<5 && c<5;
    
    const result = [];
    
    for(let place of places){
        
        let valid = 1;
        
        outer:
        for(let row=0; row<5; row++){
            for(let col=0; col<5; col++){
                
                if(place[row][col] !== "P") continue;
                
                // 거리 1
                for(let [r,c] of direct){
                    const nr = row+r;
                    const nc = col+c;
                    
                    if(inRange(nr,nc) && place[nr][nc] === "P"){
                        valid = 0;
                        break outer;
                    }
                }
                
                // 거리 2 직선
                for(let [r,c] of jump){
                    const nr = row+r;
                    const nc = col+c;
                    
                    if(!inRange(nr,nc)) continue;
                    
                    const mr = (row+nr)/2;
                    const mc = (col+nc)/2;
                    
                    if(place[nr][nc] === "P" && place[mr][mc] !== "X"){
                        valid = 0;
                        break outer;
                    }
                }
                
                // 대각선
                for(let [r,c] of diagonal){
                    const nr = row+r;
                    const nc = col+c;
                    
                    if(!inRange(nr,nc)) continue;
                    
                    if(
                        place[nr][nc] === "P" &&
                        (place[row][nc] !== "X" || place[nr][col] !== "X")
                    ){
                        valid = 0;
                        break outer;
                    }
                }
            }
        }
        
        result.push(valid);
    }
    
    return result;
}
