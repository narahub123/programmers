function solution(X, Y) {
    const map = new Map();
    
    for(let i = 0 ; i < X.length; i++){
        const x = X[i];
        
        const value = map.get(x);
        
        if(value){
            map.set(x, value + 1);
        } else {
            map.set(x, 1);
        }
    }
    
    const intersection = [];
    
    for(let i = 0; i < Y.length; i++){
        const y = Y[i];
        
        const value = map.get(y)
        if(value){
            intersection.push(y);
            map.set(y, value - 1);
        }
    }
    
    if(intersection.length === 0) return "-1";
    
    if(intersection.filter(i => i !== "0").length === 0) return "0";
    
    return intersection.sort((a, b) => b - a).join('');
    
}