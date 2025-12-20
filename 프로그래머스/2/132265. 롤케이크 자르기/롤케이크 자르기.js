function solution(topping) {
    let count = 0;
    
    // 토핑 개수 
    const toppings = new Set(topping).size;
    
    const left = new Set();
    const right = new Map();
    
    for(const top of topping){
        if(right.get(top)){
            
            right.set(top, right.get(top) + 1);
            
            continue;
        }
        
        right.set(top, 1);
    }
    
    for(let i = 0; i < topping.length; i++){
        // 이동할 토핑 
        const moved = topping[i];
        
        // left에 토핑 추가
        left.add(moved);
        
        // right에 토핑 삭제 
        if(right.get(moved) === 1){
            right.delete(moved);
        } else {
            right.set(moved, right.get(moved) - 1);
        }
        
        // 좌우 토핑 비교 
        if(left.size === right.size){
            count++;
        }
    }
    
    return count;
}