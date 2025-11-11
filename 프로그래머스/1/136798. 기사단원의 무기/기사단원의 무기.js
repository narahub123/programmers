function solution(number, limit, power) {   
    console.log("기사단", number)
    
    console.log("제한", limit)
    
    console.log("공격력", power)
    
    const knights = [];
    
    // 약수의 개수 
    for(let i = 1; i <= number; i++){
        let divisors =0;
        
        for(let j = 1; j <= Math.floor(Math.sqrt(i)); j++){
           if(i % j === 0) {
               if(i / j ===  j) divisors++
               else divisors += 2;
                   
           }
        }
        
        knights.push(divisors)
    }
    
    const sum = knights.reduce((acc, cur) => {
        if(cur > limit) return acc + power;
        else return acc + cur
    }, 0)
    
    return sum;
}