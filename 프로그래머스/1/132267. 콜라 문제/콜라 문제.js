function solution(a, b, n) {
    
    let bottles = 0;
    
    // 남은 빈 병의 개수가 a보다 큰거나 같은 경우에만 계산
    while(n >= a){
        // 돌려받는 빈 병의 개수 
        const returned = Math.floor(n / a) * b;
        
        bottles += returned;
        
        // 남은 빈병 
        const remained = n % a;
        
        n = (returned + remained);
    }
    
    
    return bottles;
}