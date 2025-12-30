function solution(land) {
    
    let maxes = land[0];

    for (let i = 1; i < land.length; i++) {
        const row = land[i];
        const newMaxes = [];
        for (let j = 0; j < row.length; j++) {
            const maxPrev = Math.max(...maxes.filter((_, idx) => idx !== j));
            newMaxes[j] = row[j] + maxPrev;
        }
        maxes = newMaxes;
    }

    return Math.max(...maxes);

    
}