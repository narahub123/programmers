function solution(keymap, targets) {
    console.log("각 키에 할당된 문자", keymap);
    
    console.log("작성 문자열", targets);
    
    const keyCountMap = {}
    
    for(const keys of keymap){
        console.log("키조합", keys);
        
        for(let i = 0; i < keys.length; i++){
            const char = keys[i];
            
            // 이미 존재하는 값이 존재한다면 값 비교 
            // 없다면 추가 
            if(keyCountMap[char] && keyCountMap[char] < i + 1){
                continue;
            }
            
            keyCountMap[char] = i + 1;
        }
    }
    
    
     return targets.map(target => {
         const sum = [...target].reduce((acc, cur) => acc + keyCountMap[cur], 0);
         
         
         return Number.isNaN(sum) ? -1 : sum;
     })
}

