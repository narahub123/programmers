function solution(n, w, num) {
    
    const boxes = Array.from({length: n}).map((_, index) => index + 1);
    
    const cols = Array.from({length: w}).map((_) => []);
    
    const numPos = [];
    
    for(let i = 0; i < boxes.length; i++){
        
        const rowIndex = Math.floor(i / w);
        
        let colIndex = 0;
        
        if(rowIndex % 2 === 0){
            colIndex = i % w;
            
        } else {
            colIndex = (w - 1) - (i % w);
            
        }
        
        const curNum = i + 1;
        
        if(curNum === num){
            numPos.push(colIndex);
            numPos.push(rowIndex);
        }
        
        cols[colIndex].push(i + 1);
    }
    
    return cols[numPos[0]].length - numPos[1];
}