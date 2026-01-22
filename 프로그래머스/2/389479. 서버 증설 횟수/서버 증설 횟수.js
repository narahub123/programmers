function solution(players, m, k) {
    // console.log("시간대별 사용자 수", players);
    // 전체 증설 횟수 
    let total = 0;
    // 현재 서버의 개수 
    let current = 0; 
    // 증설 서버의 개수 및 종료 시간 배열 
    const queue = []; 
    let head = 0
    
    for(let time = 0; time < players.length; time++){
        // console.log("시간대", `${time}~${time + 1}`);
        // console.log("현재 시간대의 이용자 수", players[time]);
        const neccessity = Math.floor(players[time] / m)
        // console.log("현재 시간대에 필요한 서버의 수", neccessity);
        
        // 서버 반납 여부 확인
        // 현재 시간이 종료 시간과 같거나 큰 경우 
        if(queue[head] && time >= queue[head][0]){
            // 서버 개수 감소 
            current -= queue[head][1];
            // 큐에서 삭제 : 다음 헤드로 이동 
            head++;
        }
        
        // 현재 증설이 필요한 경우
        // 필요한 서버의 수와 현재 서버의 수의 차만큼 증설 
        if(neccessity > current){
            const sub = neccessity - current;
            
            // 총 증설 변수에 증설 서버 개수 추가 
            total += sub;
            // 현재 서버 개수 갱신 
            current += sub;
            // 큐에 증설된 서버 추가: [종료시간, 증설된 서버의 개수]
            queue.push([time+k, sub])
        }
    }
    
    // console.log("총 증설 횟수", total);
    return total; 
}