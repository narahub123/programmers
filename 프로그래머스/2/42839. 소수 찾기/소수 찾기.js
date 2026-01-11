function solution(numbers) {
    const digits = numbers.split('');
    const visited = new Set();
    let count = 0;
    
    // 숫자 조합 
createNumber(0, digits, 1)
        
    
    function createNumber (root, availables, size) {
                            
        for(let i = 0; i < availables.length; i++){
            
            const usables = [...availables];
            const num = availables[i]
            const newNum = Number(root + num);
            usables.splice(i, 1);
            
            if(visited.has(newNum)) {
                if(size + 1 <= numbers.length){
                    createNumber(newNum, usables, size+1);    
                }
                continue;
            }
           
            visited.add(newNum);
            
            if(isPN(newNum)) count++;
        
            if(size + 1 <= numbers.length){
                createNumber(newNum, usables, size+1);    
            }
            
        }
    }
    
    function isPN (number) {
        
        if(number <= 1) return false;
        if(number === 2) return true;
        for(let i = 2; i * i <= number; i++){
            if(number % i === 0) return false;
        }
        return true;
    }
    
    return count
} 