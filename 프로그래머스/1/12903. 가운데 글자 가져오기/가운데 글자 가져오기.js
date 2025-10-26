function solution(s) {
    
    // 문자열의 길이
    const len = s.length;
    
    // 짝수/홀수 구분 
    // 짝수인 경우 
    if(len % 2 === 0){
        const mid = len / 2;
         return s[mid - 1] + s[mid];
    } else {
        // 홀수인 경우
        return s[Math.floor(len / 2)];
    }
    
}