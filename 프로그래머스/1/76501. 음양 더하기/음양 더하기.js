function solution(absolutes, signs) {
    let sum = 0;
    
    for(let i = 0; i < signs.length; i++){
        sum += (signs[i] ? 1 : -1) * absolutes[i];
        
    }
    
    return sum;
}