function solution(num) {
    if(num === 1) return 0;
    // 반복 횟수 
    let count = 0;
    
    let target = num;
    
    while(target !== 1){
        // 반복 횟수가 500을 넘은 경우
        if(count === 500){
            return -1;
        }
        
        // 짝수인 경우 
        if(target % 2 === 0){
            // 2로 나누기
            target /= 2;
            
        } else {
            // 홀수인 경우
            // 3을 곱하고 1을 더함
            target = target * 3 + 1;
            
        }
        
        // 작업 횟수 추가
        count++;
    }
    
    
    
    return count;
}