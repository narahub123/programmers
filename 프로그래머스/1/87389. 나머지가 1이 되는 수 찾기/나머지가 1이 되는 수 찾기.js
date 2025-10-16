function solution(n) {
    let min = 0;
    
    let x = 1;
    
    while(n % x !== 1){
        ++x;
        
        if(n % x === 1){
            min = x;
            break;
        }
    }
    
    return x;
}