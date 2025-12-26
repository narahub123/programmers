function solution(prices) {
    const results = Array(prices.length).fill(0);
    
    const stack = [];
    
    for(let i = 0; i < prices.length; i++){
        while(stack.length && prices[stack[stack.length - 1]] > prices[i]){
            const idx = stack.pop();
            results[idx] += 1;
        }
        
        
        for(const idx of stack){
            results[idx] += 1;
        }
        stack.push(i);    
    }
    
    return results
}