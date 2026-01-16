function solution(storey) {
    
    const digits = ("0" + storey).split("").map(Number).reverse();
    // console.log("자리수", digits);
    let count = 0;
    
    for(let pos = 0; pos < digits.length ; pos++){
        const digit = digits[pos];
        // 자리수가 5 미만일 때 
        if(digit < 5){
          count += digit;  
        } else if(digit === 5){
            // 자리수가 5일 때 
            if(digits[pos + 1] >= 5){
                count += (10 - digit);
                digits[pos + 1] += 1;    
            } else {
                count += digit;  
            }
        } else {
            // 자리수가 6 이상일 때
            count += (10 - digit);
            digits[pos + 1] += 1;
        }
    }
    
    return count;
}