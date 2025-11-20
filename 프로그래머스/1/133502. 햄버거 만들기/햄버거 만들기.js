function solution(ingredient) {
    
    let count = 0;
    
    let hamberger = [];
    
    for(let i = 0; i < ingredient.length; i++){
        const source = ingredient[i];
        
        if(source === 1){
            // 마지막 요소가 3인 경우 개수 추가 
            if(hamberger[hamberger.length - 3] === 1 && hamberger[hamberger.length - 2] === 2 && hamberger[hamberger.length - 1] === 3){
                count++;
                // 기존 1, 2, 3 지우기 
                hamberger.pop();
                hamberger.pop();
                hamberger.pop();
            } else {
                hamberger.push(source);
            }
        } else {
            hamberger.push(source);
        }
    }
    return count;
}