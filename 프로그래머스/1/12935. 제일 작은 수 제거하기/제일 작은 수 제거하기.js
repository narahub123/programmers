function solution(arr) {
    // 가장 작은 수 
    const min = Math.min(...arr);
    
    // 가장 작은 수를 제외한 배열 
    const filtered = arr.filter(a => a !== min);
    console.log("가장 작은 수를 제외한 배열", filtered);
    
    // 필터링된 배열이 배열인 경우에는 -1을 추가 
    
    return filtered.length === 0 ? [-1] : filtered;
}