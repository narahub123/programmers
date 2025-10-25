function solution(n) {
    // n이 되는 연속된 자연수 조합 
    let count = 0;
    
    const comb = []
    
    let num = 1;
    
    let k = n
    
    while(k > 0){
        k  = (n - (num * (num - 1) / 2)) / num;
        
        if(k < 1){
            break;
        }
        
        console.log("값", k, Number.isInteger(k));
        
        if(Number.isInteger(k)){
            count++;    
        }
        
        num ++;
    }
    
    return count;
}