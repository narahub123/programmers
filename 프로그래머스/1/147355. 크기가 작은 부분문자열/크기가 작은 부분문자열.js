function solution(t, p) {
    // console.log("타겟 문자열", t);
    // console.log("비교 문자열", p);
    
    const len = p.length;
    // console.log("비교 문자열의 길이", len);
    
    let count = 0;
    
    // i의 길이는 i + len 이 t의 길이보다 작을 때까지
    for(let i = 0; i <= t.length - len; i++){
        const slice = t.slice(i, i + len);
        
        // console.log("슬라이스의 값", slice);
        
        if(Number(p) >= Number(slice)){
            count++;
        }
    }
    
    // console.log("조건에 만족하는 슬라이스의 개수", count);
    
    return count;
    
}