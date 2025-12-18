function solution(s) {
    
    // 1. 바깥 {} 제거
    const inner = s.slice(1, -1);

    // 2. 안쪽 {} 문자열 추출
    const groups = [...inner.matchAll(/\{([^}]+)\}/g)].map(m => m[1]);

    // 3. 숫자 배열로 변환 + 중복 제거 + 정렬
    const result = groups.map(g =>
      [...new Set(g.split(",").map(Number))]
    );

    // 4. 배열 개수 기준 정렬 (적은 → 많은)
    result.sort((a, b) => a.length - b.length);
    
    
    const tuple = new Set();
    
    for(let i = 0; i < result.length; i++){
        const element = result[i];
        
        for(const elem of element){
            tuple.add(elem);
        }
    }
    
    return [...tuple];
}