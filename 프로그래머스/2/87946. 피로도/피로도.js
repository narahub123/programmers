function solution(k, dungeons) {
    console.log("현재 피로도", k);
    console.log("던전별 피로도", dungeons);    
    
    const n = dungeons.length;
    let maxCount = 0;
    const visited = new Array(n).fill(false);
    
    const dfs = (currK, count) => {
        if(count > maxCount) maxCount = count;
        
        for(let i = 0; i < n; i++){
            if(!visited[i]){
                const [minReq, cost] = dungeons[i];
                
                if(minReq <= currK){
                    visited[i] = true;
                    dfs(currK - cost, count + 1);
                    visited[i] = false;
                }
            }
        }
    }
    
    dfs(k, 0);
    
    return maxCount;
}


