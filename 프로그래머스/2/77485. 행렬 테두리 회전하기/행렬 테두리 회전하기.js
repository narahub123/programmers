function solution(rows, columns, queries) {
    // 1. 행렬 배열 만들기 
    const matrix = Array.from({length: rows}, (_, i) => Array.from({length: columns}).map((_, j) => i * columns + j+1));
    // console.log("행렬", matrix); 
    
    // 2. 회전 내 최소 숫자를 담아줄 배열
    const minimums = Array(queries.length).fill(Infinity);
    // console.log("회전 내 최소 숫자 배열", minimums);
    
    // 3. 회전 구현 
    const directions = [[-1, 0], [1, 0], [0, -1], [1,0]];
    
    for(let order = 0; order < queries.length; order++){
        const query = queries[order];
        // console.log("회전", query)
        let [x1, y1, x2, y2] = query;
        
        // 1-base에서 0-base로 변경 
        x1--;
        y1--;
        x2--;
        y2--;
        
        let move = matrix[x1][y1];
        // console.log("첫 이동 숫자", move)
        let original = 0; 
        
        // 3.1 오른쪽 이동 
        // x1은 고정 y1 <= j < y2의 숫자 이동 
        for(let j = y1; j < y2; j++){
            
            // 이동할 위치의 숫자 
            original = matrix[x1][j+1];
            
            // 이동할 위치에 이동힌 숫자 삽입 
            matrix[x1][j + 1] = move;
            
            // 최소 배열에 있는 숫자보다 현재 이동한 숫자가 작은 경우 교체
            // console.log("배열 내 숫자", minimums[order], "현재 숫자", move);
            if(move < minimums[order]) minimums[order] = move;
            
            // 이동할 숫자 교체 
            move = original;
            
        }
        
        
        // 3.2 아래 이동 
        // y2는 고정 x1 <= i < x2의 숫자 이동
        for(let i = x1; i < x2; i++){
            
            // 이동할 위치의 숫자 
            original = matrix[i+1][y2];
            
            // 이동할 위치에 이동힌 숫자 삽입 
            matrix[i+1][y2] = move;
            
            // 최소 배열에 있는 숫자보다 현재 이동한 숫자가 작은 경우 교체
            // console.log("배열 내 숫자", minimums[order], "현재 숫자", move);
            if(move < minimums[order]) minimums[order] = move;
            
            // 이동할 숫자 교체 
            move = original;
            
        }
        
        // 3.3 왼쪽 이동 
        // x2는 고정 y1 < j <= y2의 숫자 이동 
        for(let j = y2; j > y1; j--){
            
            // 이동할 위치의 숫자 
            original = matrix[x2][j-1];
            
            // 이동할 위치에 이동힌 숫자 삽입 
            matrix[x2][j-1] = move;
            
            // 최소 배열에 있는 숫자보다 현재 이동한 숫자가 작은 경우 교체
            // console.log("배열 내 숫자", minimums[order], "현재 숫자", move);
            if(move < minimums[order]) minimums[order] = move;
            
            // 이동할 숫자 교체 
            move = original;
            
        }
        // 3.4 위 이동 
        // y1은 고정, x1 < i <= x2의 숫자 이동 
        for(let i = x2; i > x1; i--){
            
            // 이동할 위치의 숫자 
            original = matrix[i-1][y1];
            
            // 이동할 위치에 이동힌 숫자 삽입 
            matrix[i-1][y1] = move;
            
            // 최소 배열에 있는 숫자보다 현재 이동한 숫자가 작은 경우 교체
            // console.log("배열 내 숫자", minimums[order], "현재 숫자", move);
            if(move < minimums[order]) minimums[order] = move;
            
            // 이동할 숫자 교체 
            move = original;
            
        }
    }
    
    // console.log("회전 내 최소 숫자 배열", minimums);
    return minimums
}