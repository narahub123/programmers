function solution(s) {
    const words = s.match(/\w+|\s+/g);
    
    return words.map(word => {
        return [...word].map((w, i) => {
            if(i % 2 === 0) return w.toUpperCase();
            else return w.toLowerCase()
        }).join('');
    }).join('');
    
    
}