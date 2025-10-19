function solution(s) {
    // 공백 기준으로 숫자 구분
    const nums = s.split(" ").map(Number);
    
    // 최소값
    const min = Math.min(...nums);
    
    // 최대값
    const max = Math.max(...nums);
    
    return `${min} ${max}`
}