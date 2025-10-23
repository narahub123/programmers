function solution(s) {
    let target = s;
    let zeroCount = 0;
    let convertCount = 0;
    
    while(target !== '1'){
        let oneCount = 0;
        
        // 0 추출 및 0 제외 문자열
        for(let i = 0; i < target.length; i++){
            target[i] === '0' ? zeroCount++: oneCount++
        }
        
        // 이진법으로 변경 
        target = convertBinary(oneCount);
        convertCount++;
        oneCount = 0;
        
    }
    
    return [convertCount, zeroCount];
}

const convertBinary = (target) => {
    let binary = [];
    
    if(target < 2){
        return target.toString();
    }
    
    while(target > 1){
        binary.push(target % 2);
        target = Math.floor(target / 2);
    }
    
    binary.push(1);
    
    return binary.sort((a, b) => b - a).join("");
}