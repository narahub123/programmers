function solution(picks, minerals) {
    // 5개로 나눈 구간의 개수 
    const numOfIntervals = Math.ceil(minerals.length / 5);
    // 곡괭이의 총 개수 
    const numOfPicks = picks.reduce((acc, cur) => acc += cur);
    
    const min = Math.min(numOfIntervals, numOfPicks)
    
    // 광물을 캘 수 있는 구간 
    const mined = minerals.slice(0, 5 * min);
    
    const intervals = []
    for(let i = 0; i < min; i++){
        intervals.push(minerals.slice(5 * i, 5 * (i+1)));
    }
    
    // 정렬을 위한 가중치 계산 
    const map = {
        diamond: 25,
        iron: 5,
        stone: 1
    }
    
    // 정렬
    intervals.sort((a, b) => {
        const sumA = a.reduce((acc, cur) => acc += map[cur], 0);
        const sumB = b.reduce((acc, cur) => acc += map[cur], 0);
        return sumB - sumA;
    });
    
    // 곡괭이 순서대로 스태미나 계산하기 
    let stamina  = 0;
    const pickMap = {
        1: {
            diamond: 1,
            iron: 1,
            stone: 1
        },
        2: {
            diamond: 5,
            iron: 1,
            stone: 1
        },
        3: {
            diamond: 25,
            iron: 5,
            stone: 1
        },
    }
    
    let head = 0;
    
    for(let j = 0; j < intervals.length; j++){
        while(head < 3 && picks[head] === 0) {
            head++;
        }
        
        if(head >= 3) break;
        
        let sum = 0;
        
        for(let i = 0; i < intervals[j].length; i++){
            sum += pickMap[head+1][intervals[j][i]];
        }
        
        stamina += sum;
        picks[head]--;
    }
    
    return stamina;
}