function solution(s)
{
    let stack = [];
    
    for(let i = 0; i < s.length; i++){
        const len = stack.length;
        const char = s[i];
        
        // 마지막 스택과 문자가 같은 경우
        if(stack[len - 1] === char){
            // 마지막 스택 제거 
            stack.pop();
            continue;
        }
        
        stack.push(char);   
    }
    
    

    return stack.length === 0 ? 1 : 0
}