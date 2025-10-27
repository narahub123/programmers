function solution(a, b) {
    if(a.length !== b.length) return 0;
    
    return a.reduce((acc, cur, index) => acc += cur * b[index], 0)
    
}