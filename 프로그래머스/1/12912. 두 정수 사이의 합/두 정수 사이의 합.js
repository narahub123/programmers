function solution(a, b) {
    
    if(a === b){
        return a
    } else {
        // a, b 사이의 정수 배열 
        // 절대값 구하기 (두 수의 차이)
        const length = Math.abs(a - b) + 1;
        
        // 작은 수 
        const min = Math.min(a, b);
        
        // 두 수 사이의 정수 배열
        const nums = Array.from({length}).map((_, idx) => min + idx);
        
        
        // 두 수 사이의 정수 합
        const sum = nums.reduce((acc, cur) => acc + cur, 0);
        
        return sum;
    }
}