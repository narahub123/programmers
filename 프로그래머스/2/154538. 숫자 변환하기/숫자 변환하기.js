function solution(x, y, n) {
    const visited = new Set();
    const queue = [[x, 0]];
    let head = 0;
    
    
    while(head < queue.length){
        const node = queue[head];
        
        const [value, count] = node;
        
        if(value > y) {
            head++;
            continue;
        };
        
        if(!visited.has(value)){
            visited.add(value);
            queue.push([value + n, count + 1]);
            queue.push([value * 2, count + 1]);
            queue.push([value * 3, count + 1]);
        }
        
        if(value === y){
            return count;
        }
        
        head++;
        
    }
    
    return -1;
}