function solution(n) {
    let water = "";
    
    for(let i = 0; i < n; i++){
        water += (i % 2 === 0 ? "수" : "박");
    }
    
    return water;
}