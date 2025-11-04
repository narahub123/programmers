function solution(sizes) {
    
    let wMax = 0;
    let hMax = 0;
    
    for(let i = 0; i < sizes.length; i++){
        const pair = sizes[i].sort((a, b) => b - a);
        
        if(wMax < pair[0]) wMax = pair[0];
        
        if(hMax < pair[1]) hMax = pair[1];
    }
    
    
    return wMax * hMax;
}