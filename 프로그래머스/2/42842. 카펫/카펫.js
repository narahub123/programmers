function solution(brown, yellow) {
    // 전체 개수 
    const total = brown + yellow;
    
    console.log("전체 격자 수", total);
    
    for(let i = 1; i <= Math.floor(Math.sqrt(total)); i++){
        
        if(total % i ===  0){
            const w = total / i; // 가로 
            const h = i; // 세로 
            
            if(brown === (2 * w + 2 * h - 4 )&& yellow === ((w - 2) * (h - 2))){
                
                console.log(w, h);
                return [w, h];
            }
        }
    }
    
    
}