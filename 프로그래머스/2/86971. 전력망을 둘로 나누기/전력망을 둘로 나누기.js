function solution(n, wires) {
    // 인접 리스트 만들기 
    const map = new Map();
    
    for(let i = 1; i <= n; i++){
        map.set(i, []);
    }
    
    
    for(let [v1, v2] of wires){
        map.get(v1).push(v2);
        map.get(v2).push(v1);
    }
    
    
    let sub = Infinity;
    
    // 모든 간선을 하나씩 선택해 dfs 
    for(const [v1, v2] of wires){
        const visited = Array.from({length: n}, () => false);
        let count = 0;
        
        function dfs (current, blockA, blockB){
            if(visited[current - 1]) return;
            visited[current - 1] = true;
            count++;

            const nexts = map.get(current);

            for(const next of nexts){
                if(current === blockA && next === blockB) continue;
                if(current === blockB && next === blockA) continue;
                if(visited[next - 1]) continue;

                dfs(next, blockA, blockB)
            }
            
        }
        
        dfs(v1, v1, v2);
        
        if(Math.abs(n - 2 * count) < sub){
            sub = Math.abs(n - 2 * count)
        }
    }
    
    
    return sub;
    
}

