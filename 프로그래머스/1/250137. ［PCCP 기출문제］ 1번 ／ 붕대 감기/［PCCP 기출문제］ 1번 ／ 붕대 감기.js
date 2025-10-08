function solution(bandage, health, attacks) {
    // 연속 시간
    let duration = 0;
    // 현재 체력
    let stamina = health;
    // 최대 연속 시간
    const time = bandage[0];
    // 초 당 회복량 
    const hPS = bandage[1];
    // 추가 회복량 
    const bonus = bandage[2];
    // 종료 시간 
    const attackObj = Object.fromEntries(attacks);
    const attackTimes = Object.keys(attackObj).map(Number);
    const last = attackTimes[attackTimes.length -1];
    
    for(let i = 1; i <= last; i++){
        
        if(stamina <= 0){
            break;
        }
        
        // 공격 시간이 경우
        if(attackTimes.includes(i)){
            // 연속 시간 초기화
            duration = 0;
            // 체력 감소
            stamina -= attackObj[i.toString()];
            
            continue;
        } else {
            // 공격이 아닌 경우
            // 연속 시간 추가
            duration++;
            
            if(duration === bandage[0]){
                // 연속 시간 초기화
                duration = 0;
                // 추가 체력
                // 현재 체력이 최대체력을 넘어가는 경우
                if(stamina + bandage[2] >= health){
                    stamina = health;
                    continue;
                }
                stamina += bandage[2];
                
            }
            
            // 체력 추가 
            if(stamina + bandage[1] >= health){
                stamina = health;
                continue;
            }
            
            stamina += bandage[1];
        }
        
    }
    
    return stamina > 0 ? stamina : -1;
}