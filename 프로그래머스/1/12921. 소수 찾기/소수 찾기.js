function solution(n) {
    let primes = 0;
    
    for(let i = 2; i <= n; i++){
        
        if(!checkPN(i)) {
            primes++
        }
    }
    
    console.log(primes)
    return primes;
}

const checkPN = (num) => {
    let isDivided = false;
    
    for(let p = 2; p <= Math.floor(Math.sqrt(num)); p++){
        if(num % p === 0) {
            isDivided = true;    
            break;
        }
    }
    
    return isDivided
}