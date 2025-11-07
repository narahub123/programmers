function solution(want, number, discount) {
    let count = 0;
    let curIndex = 0;
    
    while(curIndex !== -1){
        const slice = discount.slice(curIndex, curIndex + 10);
        if(slice.length < 10) break;
        
        let countTen = {};
        
        want.forEach(good => countTen[good] = 0);
        
        for(let i = 0; i < 10; i++){
            if(want.includes(slice[i]) === -1) break;
            countTen[slice[i]]++;
        }
        
        const filtered = (Object.values(countTen)).filter((c, idx) => c !== number[idx])
        if(filtered.length === 0) count++;
        curIndex++;
    }
    
    return count;
}