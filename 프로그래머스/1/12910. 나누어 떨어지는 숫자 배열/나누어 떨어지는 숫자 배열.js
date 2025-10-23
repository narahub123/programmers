function solution(arr, divisor) {
    let multiple = [];
    
    // 배수 찾기 
    for(const el of arr){
        if(el % divisor === 0){
            multiple.push(el);
        }
    }
    
    // 정렬하기 
    const sorted = multiple.sort((a, b) => a - b);
    
    return sorted.length === 0 ? [-1] : sorted;
}