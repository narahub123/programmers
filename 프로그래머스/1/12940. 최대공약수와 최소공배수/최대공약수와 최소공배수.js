function solution(n, m) {
    // 약수 구하기 
    const nDs = getDivisors(n);
    const mDs = getDivisors(m);
    
    console.log("약수", nDs, mDs)
    
    // 최대 공약수 구하기 
    const GCD = getGCD(nDs, mDs);
    
    console.log("최대 공약수", GCD);
    
    // 최소 공배수 구하기 
    const LCM = getLCM(nDs, mDs);
    
    console.log("최소 공배수", LCM);
    
    return [GCD, LCM]
}

// 최대 공배수 구하기 
const getLCM = (nds, mds) => {
    const gcd = getGCD(nds, mds);
    
    const nO = nds[0] / gcd;
    const mO = mds[0] / gcd;
    
    return nO * mO * gcd;
}

// 최대 공약수 구하기 
const getGCD = (nDs, mDs) => {
    
    let gcd = 1;
    
    for(let i = 0; i < nDs.length; i++){
        const num = nDs[i];
        
        if(mDs.includes(num)){
            gcd = num;
            break;
        }
    }
    
    return gcd;
}

// 약수 구하기 
const getDivisors = (num) => {
    const divisors = [];
    
    for(let i = 1;i <= Math.floor(Math.sqrt(num)); i++){
        if(num % i === 0) {
            divisors.push(i);
            
            if(i !== (num / i)){
                divisors.push(num / i);    
            }
            
        }
    }
    
    return divisors.sort((a, b) => b - a);
}