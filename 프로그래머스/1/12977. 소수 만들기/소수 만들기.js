function solution(nums) {
    
    // 숫자 조합
    let primes = 0;
    
    for(let i = 0; i < nums.length; i++){
        
        for(let j = i + 1; j < nums.length; j++){
            
            
            for(let k = j + 1; k < nums.length; k++){
                
                const sum = nums[i] + nums[j] + nums[k];
                
                let isDivided = false;
                // 소수 판별 
                for(let p = 2; p <= Math.floor(Math.sqrt(sum)); p++){
                    
                    if((sum % p) === 0) isDivided = true;
                }
                
                if(!isDivided){
                    primes++
                }
                
                
            }
        }
    }
    
    console.log(primes)
    
    return primes;
}
