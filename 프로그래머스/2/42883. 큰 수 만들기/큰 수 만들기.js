function solution(number, k) {
    const numbers = number.split('').map(Number);
    
    const stack = [];
    
    for(let i = 0; i < numbers.length; i++){
        const curNum = numbers[i];
        
        if(stack.length === 0) {
            stack.push(curNum);
            continue;
        }
        
        while(stack.length > 0 && curNum > stack[stack.length - 1] && k > 0){
            stack.pop();
            k--;
        }
        
        stack.push(curNum);
    
    }
    
    if(k > 0) stack.splice(stack.length - k, k);
    
    return stack.join("");
}