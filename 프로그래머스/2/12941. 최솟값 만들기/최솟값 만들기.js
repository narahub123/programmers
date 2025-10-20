function solution(A,B){
    
    const cres = A.sort((a, b) => a - b);
    const decres = B.sort((a, b) => b - a);
    
    let sum = 0;
    
    for(let i = 0; i < A.length; i++){
        sum += cres[i] * decres[i];
    }
    
    
    return sum;
}