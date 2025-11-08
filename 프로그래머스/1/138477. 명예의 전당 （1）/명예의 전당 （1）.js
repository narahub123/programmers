function solution(k, score) {
    
    const publication = [];
    
    for(let i = 1; i <= score.length; i++){
        // 매일 순위 목록
        const sort = score.slice(0, i).sort((a, b) => b - a);
        
        publication.push(i < k ? sort[i - 1] : sort[k-1])
    }
    
    return publication;
}