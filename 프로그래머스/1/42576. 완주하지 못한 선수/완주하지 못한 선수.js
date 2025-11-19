function solution(participant, completion) {
    
    const map = new Map();
    
    for(let i = 0; i < completion.length; i++){
        const value = map.get(completion[i]);
        if(value){
            map.set(completion[i], value + 1);
        } else {
            map.set(completion[i], 1);
        }
        
    }
    
    
    for(let i = 0; i < participant.length; i++){
        const candidate = participant[i];
        
        const isCompleted = map.get(candidate);
        
        if(isCompleted){
            map.set(candidate, isCompleted - 1);
        } else {
            return candidate;
        }
    }
}