function solution(n) {
    // 이진법으로 변환 
    const binaryStr = n.toString(2);
    
    // 01이 마지막으로 나오는 인덱스 
    const index = binaryStr.lastIndexOf('01');
    
    let newStr = "";
    // 01이 없는 경우 => 1로만 이루어진 경우 + 1로 시작하고 0으로 이루어진 경우 
    // 첫 1을 10으로 변경하면됨 
    if(index === -1){
        const ones = [...binaryStr].filter(ch => ch === '1').length;
    
        const zeros = binaryStr.length - ones;
    
        newStr = '10' + '0'.repeat(zeros) + '1'.repeat(ones - 1);
        
        
    } else {
        // 01이 존재하는 경우 
        const before = binaryStr.slice(0, index);
        const after = binaryStr.slice(index + 2);
        
        // after의 길이
        const afterLen = after.length;
       
        // after에 1의 개수 
        const countOne = [...after].filter(a => a === '1').length;
        
        // after와 동일 길이에서 가장 작은 2진수 
        const newAfter = "1".repeat(countOne).padStart(afterLen, "0");
        
        newStr = before + "10" + newAfter
        
    }
    
    return parseInt(newStr, 2);
    
}