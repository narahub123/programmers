function solution(p) {
    
    let result = ""

    result = recursion(p, result);
    
    console.log(result);
    
    return result;
}

// 3 재귀함수 
function recursion (str, result){
    if(!str) {
        
    }
    // 문자열이 올바른 문자열인 경우 
    else if(isRightParentThesis(str)){
        result += str;
    } else {
        
        const [u, v] = splitUV(str);
        
        
        // u가 올바른 괄호 문자열 
        if(isRightParentThesis(u)){
            result += u;
            
            result += recursion(v, "");
        } else {
            
            let newStr = "(";
            
            if(v){
                newStr += recursion(v, "");    
            }
            
            newStr += ")";
            const borderless = u.slice(1, u.length-1);
            
            const newU = [...borderless].map(p => p === "(" ? ")" : p === ")" ? "(" : "").join("");
            
            result += (newStr + newU);
        }
        
    }
    
    return result;
}

// 2-1 u와 v로 분리하기 
function splitUV (str){
    let u = "";
    let left = 0;
    let right = 0;
    
    for(const token of str){
        
        if(token === "("){
            ++left;
        } else {
            ++right;
        }
        
        u += token;
        if(left === right) break;
    }
    
    const v = str.slice(left+right);
    
    return [u, v];
}

// 1. 올바른 괄호 문자열 여부를 확인하는 함수 
// 괄호의 순서도 중요함 주의할 것 
function isRightParentThesis (str){
    // 1. 올바른 문자열 여부 확인하기 
    const stack = [];
    
    for(const parenthesis of str){
        // stack에 요소가 있는 경우 
        if(stack.length){
            const last = stack[stack.length-1];
            
            // 스택의 마지막 요소와 현재 요소가 비교
            // 같지 않은 경우 : 스택의 마지막 요소 삭제 
            if(last === "(" && parenthesis === ")"){ 
                stack.pop();
            } else {
                // 같은 경우 현재 요소 스택에 추가 
                stack.push(parenthesis)
            }
        } else {
            // 스택에 요소가 없는 경우 
            // 현재 요소를 스택에 추가 
            stack.push(parenthesis);
        }
    } // for ends
    
    return !Boolean(stack.length)
}