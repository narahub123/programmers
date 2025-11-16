function solution(s) {
    
    const stack = [];
    
    let count = 0;
    
    for(let i = 0; i < s.length; i++){
        const char = s[i];
        
        // 스택의 마지막 문자과 문자가 동일하면 stack에서 제외 
        // 동일하면 stack에 추가 
        if(stack[stack.length - 1] && stack[stack.length - 1] !== char){
            stack.pop();
        } else {
            stack.push(char);
        }
        
        if(stack.length === 0 || (stack.length > 0 && i === s.length - 1)){
            count++;
        }
    }
    
    
    return count;
}