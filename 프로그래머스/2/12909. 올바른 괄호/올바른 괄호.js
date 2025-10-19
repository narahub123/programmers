function solution(s){
    console.log("문자열", s);
    const stack = [];
    
    //괄호 배열
    const parentheses = s.split("");
    
    console.log("괄호 배열", parentheses);
    
    let result = true;
    
    parentheses.forEach(p => {
        if(p === "("){
            stack.push(p);
        } else {
            const isStartExisting = stack.pop();
            
            // 맞는 짝이 존재하지 않는 경우 
            if(!isStartExisting){
                result = false;    
            }
        }
    })
    
    // 스택이 0보다 크면 false
    // 스택이 0인 경우 result의 값 반환
    return stack.length > 0 ? false : result;
}