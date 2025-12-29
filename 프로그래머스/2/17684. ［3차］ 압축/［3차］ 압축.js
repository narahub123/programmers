function solution(msg) {
    // 사전 맵
    const dictMap = new Map();
    
    // 사전 초기화 정보 입력
    for(let i = 65; i <= 90; i++){
        dictMap.set(String.fromCharCode(i), i - 64); 
    }
   
    // 결과 
    const result = [];
    // 현재 문자의 위치 
    let curIndex = 0;
    // 다음 문자의 위치 
    let nextIndex = curIndex + 1;
    
    while(curIndex < msg.length){
        // 현재 문자
        const curChar = msg[curIndex];
        
        // 현재 문자열
        let curStr = curChar;
        
        // 현재
        while(dictMap.get(curStr)){
            // 다음 문자
            const nextChar = msg[nextIndex] ?? " ";
            
            // str에 다음 문자 추가
            curStr += nextChar;
            
            // 다음 문자의 인덱스 + 1;
            nextIndex++;
        }
        
        
        // 가장 긴 문자열
        const longest = curStr.slice(0, -1);
        
        // 다음 확인할 문자를 위한 위치 조정
        const add = longest.length - 1;
        curIndex += add;
        
        // 가장 긴 문자열의 색인 번호
        const index = dictMap.get(longest);
        
        // 색인 번호 추가(출력);
        result.push(index);
        
        // 다음 문자가 있는 경우
        if(msg[nextIndex]){
            // 새로운 단어 사전에 추가 
            dictMap.set(curStr, dictMap.size + 1);
        }
        
        curIndex++;
    }
    
    return result;
}