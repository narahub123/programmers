function solution(record) {
    
    const msg = {
        'Enter': "님이 들어왔습니다.",
        "Leave": "님이 나갔습니다."
    }
    
    const map = new Map();
    
    const results = [];
    
    for(const log of record){
        // 문자열 파싱 
        const [event, userId, nickname] = log.split(' ');
        
        if(event === "Enter"){
            map.set(userId, nickname);
            results.push([userId, event]);            
        } else if (event === "Leave"){
            results.push([userId, event]);
        } else if (event === "Change"){
            map.set(userId, nickname);
        }
    }
    
    return results.map(result => {
        const [userId, event] = result;
        const nickname = map.get(userId);
        const comment = msg[event];
        return `${nickname}${comment}`;
    })
}