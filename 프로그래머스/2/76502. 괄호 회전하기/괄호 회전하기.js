function solution(s) {
    
    let count = 0;
    
    for(let i = 0; i < s.length; i++){
        // 회전했을 때의 문자열
        const removed = s.slice(0, i);
        
        const rotated = s.replace(removed, "") + removed;
        
        if(checkValid(rotated)){
            count++;
        }    
    }
    
    return count;
}

// 유효한 괄호 문자열인지 확인
const checkValid = (str) => {
    const stack = [];
    
    for(let i = 0; i < str.length; i++){
        
        const char = str[i];
        
        if(char === "}"){
            if(stack[stack.length - 1] === "{"){
                stack.pop();
            } else {
                stack.push(char)
            }
        }
        else if(char === "]"){
            if(stack[stack.length - 1] === "["){
                stack.pop();
            } else {
                stack.push(char)
            }
        }
        else if(char === ")"){
            if(stack[stack.length - 1] === "("){
                stack.pop();
            } else {
                stack.push(char)
            }
        }
        else {
            stack.push(char)
        }
    }
    
    return stack.length === 0;
}