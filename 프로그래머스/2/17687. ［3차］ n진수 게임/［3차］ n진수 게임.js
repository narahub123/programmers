function solution(n, t, m, p) {
    let result = "";
    let idx = 0;
    let curReminder = 0;
    
    
    while(result.length < t){
        const converted = idx.toString(n);
        
        let curPos = 0;
        
        while(curPos < converted.length){
            
            if((curReminder + curPos) % m === p - 1){
                if(result.length < t){
                    result += converted[curPos];    
                }
            }
            
            curPos++;
        }
        
        curReminder = (curReminder + converted.length) % m
        idx++;
    }
    
    
    return result.toUpperCase();
}