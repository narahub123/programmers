function solution(k, m, score) {
    
    const sort = score.sort((a, b) => b - a);
    
    let prices = 0;
    
    for(let i = 1; i <= Math.floor(score.length / m); i++){
        
        prices += sort[(i) * m - 1] * m
    }
    
    return prices
}