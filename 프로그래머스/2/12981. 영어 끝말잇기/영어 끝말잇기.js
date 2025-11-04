function solution(n, words) {
    console.log("참여자 수", n);
    console.log("사용단어 배열", words);
    
    let index = 0;
    
    // 탈락 찾기
    for(let i = 1; i < words.length; i++){
        // 동일 단어 찾기 
        const word = words[i];
        
        
        // 이전 배열에서 공통 단어가 존재하는지 확인하기 
        if(words.slice(0, i).includes(word)){
            index = i;
            break;
        }
        
        const prev = words[i-1];
        // 이전 단어의 끝 문자와 현재 단어의 첫 문자와 동일한지 확인
        if(prev[prev.length - 1] !== word[0]){
            index = i;
            break;
        }
    }
    
    if(index === 0) return [0, 0];
    
    const person = (index + 1) % n === 0 ? n : (index + 1) % n;
    const round = Math.ceil((index + 1) / n);
    
    return [person, round];
}