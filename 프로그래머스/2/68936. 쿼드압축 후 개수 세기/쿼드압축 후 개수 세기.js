function solution(arr) {
    const numOfRow = arr.length;
    let count = [0, 0];
    
    dfs(0, 0, numOfRow);
    
    
    function dfs (y, x, size){
        const base = arr[y][x];
        
        for(let row = y; row < y + size; row++){
            for(let col = x; col < x+size; col++){
                if(base !== arr[row][col]){
                    const half = size/2;
                    dfs(y, x, half);
                    dfs(y, x+half, half);
                    dfs(y+half, x, half);
                    dfs(y+half, x+half, half);
                    
                    return;
                }
            }
        }
        
        if(base === 0) count[0] += 1;
        else count[1] +=1;
    }
    
    return count;
}
