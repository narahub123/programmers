function solution(data, col, row_begin, row_end) {
    // console.log("테이블의 데이터", data);
    // console.log("기준 컬럼 값", col); // col - 1 임을 유의할 것 
    
    // 1. 정렬 
    // data[i][col - 1] 값을 기준으로 오름차순하되, 
    // data[i][col - 1] 값이 동일하면 data[i][0]을 기준으로 내림차순 정렬
    const sorted = data.sort((a, b) => {
        if(a[col -1] !== b[col-1]) return a[col-1] - b[col-1];
        else return b[0] - a[0];
    })
    
    // console.log("정렬된 데이터", sorted);
    
    // 2. S_i 계산 
    // 정렬된 데이터에서 row_begin-1 행부터 row_end-1행 사이의 행들에 대해
    // 각 행들의 요소들을 i+1 값으로 나눈 나머지들의 합을 계산
    let S_is = 0;
    for(let i = 0; i < data.length; i++){
        if(i < row_begin-1 || i > row_end-1) continue;
        
        let S_i = 0;
        
        for(let j = 0; j < data[i].length; j++){
            // console.log("각 행의 요소 값", data[i][j])
            S_i += (data[i][j] % (i+1))
        }
        
        // 3. bitwise XOR 
        // 각 요소를 순차적으로 XOR 해주는 것 같음
        S_is ^= S_i;
    }
    
    // console.log("S_i들을 XOR한 값", S_is);
    return S_is;
}