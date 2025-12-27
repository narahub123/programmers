function solution(n, k) {
    // 양의 정수 n을 k진법으로 변경
    const kBase = n.toString(k);
    // 숫자 분리 
    const numbers = kBase.split(/0+/).map(Number);
    
    // 소수 판별 
    const primes = numbers.filter(n => isPrime(n));
    
    return primes.length;
}

const isPrime = (n) => {
    if(n < 2) return false;
    
    for(let p = 2; p * p <= n; p++){
        if(n % p === 0) return false;
    }
    
    return true;
}