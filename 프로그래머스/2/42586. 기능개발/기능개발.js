function solution(progresses, speeds) {
    console.log(progresses);
    console.log(speeds);
    
    const stack = new Array(speeds.length).fill(false);
    
    let curIndex = 0;
    
    const hostings = [];
    
    // 전부 100이면 중단
    while(curIndex < stack.length){
                                                            let filtered = 0;
        
        for(let i = curIndex; i < speeds.length;i++){
            if(stack[i]) {
                filtered++;
                curIndex++;
            }
            else break;
        }
        
        if(filtered > 0){
            hostings.push(filtered);
        }
        
        
        for(let i = 0; i < speeds.length; i++){
            
            const progress = progresses[i];
            
            if(progress >= 100) continue;
            
            const speed = speeds[i];
            
            progresses[i] = progress + speed;
            
            if(progresses[i] >= 100){
                stack[i] = true;
            }
            
        }
    }
    
    console.log(hostings);
    
    return hostings;
}