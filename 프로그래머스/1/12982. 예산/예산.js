function solution(d, budget) {
    const sorted = d.sort((a, b) => a -b);
    
    console.log("예산", budget);
    
    let counter = 0;
    let sum = 0;
    let i = 0;
    
    while(sum < budget && i < d.length){
        sum += sorted[i];
        
        if(sum > budget) break;
        
        counter++;
        i++;    
    }
    
    return counter;
}