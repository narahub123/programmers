function solution(arr) {
    // console.log(arr);
    let lcm = 1;
    
    for(let i=0; i< arr.length; i++){
        // 최대 공배수 구하기 
         lcm = getLCM(lcm, arr[i]);    
    }
    
    
    return lcm;
}

// 최대 공배수 구하기 
const getLCM = (n, m) => {
    const gcd = getGCD(n, m);
    
    console.log("최대공약수", gcd);
    return n * m / gcd
    
}

// 최대 공약수 구하기 
const getGCD = (n, m) => {
        
    while (m !==0){
        [n, m] = [m, n % m]
    } 
    
    return n
}