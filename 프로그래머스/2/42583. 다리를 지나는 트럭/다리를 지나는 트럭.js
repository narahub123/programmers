function solution(bridge_length, weight, truck_weights) {
    // 시간
    let time = 0;
    // 다리 위의 트럭 배열 (빠져나갈 시간)
    let queue = [];
    // 다리 위의 트럭 총 무게 
    let total = 0;
    
    while(truck_weights.length > 0 || total > 0){
        
        // 트럭 삭제 
        // 첫 트럭의 시간이 현재 시간과 동일한 경우 
        if(queue.length > 0 && queue[0][1] === time){
            // queue에서 삭제
            const [curWeight, outTime] = queue.shift();
            // 무게 빼기 
            total -= curWeight;
        }
        
        // 트럭 추가 
        if(truck_weights.length > 0 && total + truck_weights[0] <= weight){
            // 대기 배열에서 삭제 
            const curWeight = truck_weights.shift()
            // 다리 위의 트럭 배열 
            queue.push([curWeight, time + bridge_length]);
            // 총 무게 추가 
            total += curWeight;
        }
        
        
        
        // 시간 추가
        time++;
    }
    return time;
}