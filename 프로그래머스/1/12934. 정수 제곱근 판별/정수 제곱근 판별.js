function solution(n) {
    
    if(n == 1) return 4;
    
    for(let i = 1; i <= (n/2); i++){
        if(n === i * i){
            return Math.pow(i+1, 2);
        }
    }
    
    return -1;
}