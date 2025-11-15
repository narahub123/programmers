function solution(N, stages) {
    
    const stageMap = {}
    
    for(let i = 1; i <= N; i++){
        stageMap[i] = {
            'thru': 0,
            'stuck': 0
        }
    }
    
    stages.forEach(stage => {
        for (let i = 1; i <= Math.min(stage, N); i++) {
            if (i === stage && stage <= N) stageMap[i].stuck++;
              stageMap[i].thru++;
        }
    })
    
    
    const sort = Object.entries(stageMap).map(stage => [stage[0], stage[1].thru === 0 ? 0 : stage[1].stuck / stage[1].thru]).sort((a, b) => b[1] - a[1]).map(i => Number(i[0]));
    
    
    return sort
}