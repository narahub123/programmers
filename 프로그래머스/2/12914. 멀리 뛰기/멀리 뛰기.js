function solution(n) {
    
    const MOD = 1234567;
    
    if(n < 2) return 1;
    
    let a = 1, b = 1;
    
    for(let i = 2; i <= n; i++){
        const c = (a + b) % MOD;
        
        a = b;
        b = c;
    }
    
    return b;
    
}



