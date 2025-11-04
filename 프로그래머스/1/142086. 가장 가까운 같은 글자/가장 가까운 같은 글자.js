function solution(s) {
    const result = [];
    
    for(let i = 0; i < s.length; i++){
        const char = s[i];
        
        // console.log("현재 문자", char);
        
        const beforeText = s.slice(0, i);
        
        // console.log("이전 문자열", beforeText);
        
        const index = beforeText.lastIndexOf(char);
        
//         console.log("이전 문자의 위치", index);
        
//         console.log("현재 문자와 이전 문자의 거리", index === -1 ? -1 : i - index);
        
        result.push(index === -1 ? -1 : i - index);
    }
    
    
    
    return result
}