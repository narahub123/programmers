function solution(fees, records) {
    const [baseTime, baseFee, unitTime, unitFee] = fees;
    // console.log("기본 시간", baseTime, "기본 요금", baseFee, "단위 시간", unitTime, "단위 요금", unitFee);
    
    const map = new Map();
    
    // 기록표 맵 채우기
    for(const record of records){
        const [time, number, detail] = record.split(' ');
        
        if(map.has(number)){
            map.set(number, [...map.get(number), time]);
        } else {
            map.set(number, [time]);    
        }
    }
    
    for(const key of map.keys()){
        const timeline = map.get(key);
        const modified = timeline.length % 2 === 0 ? timeline : [...timeline, '23:59'];
        // console.log("출차시간", modified);
        
        let parkingTime = 0;
        // 시간 계산하기 
        for(let i = 0 ; i < (modified.length / 2); i++){
            const index = 2 * i;
            const [outHour, outMinute] = modified[index + 1].split(':').map(Number);
            const [inHour, inMinute] = modified[index].split(":").map(Number);
            
            const minuteDiff = outMinute - inMinute < 0 ? 60 + (outMinute - inMinute) : outMinute - inMinute;
            const hourDiff = outMinute - inMinute < 0 ? outHour - inHour - 1: outHour - inHour;
            
            const timeDiff = hourDiff * 60 + minuteDiff;
            parkingTime += timeDiff;
        }
        
        // console.log("총 주차시간", parkingTime);
        
        // 가격 계산 
        let totalFee = 0;
        // 기본 시간 이하인 경우 
        if(parkingTime <= baseTime){
            // console.log("총요금", baseFee);
            totalFee = baseFee;
        } else {
            // 기본 시간을 초과한 경우 
            const exceedTime = parkingTime - baseTime;
            // console.log("초과 시간",  exceedTime);
            const totalUnits = Math.ceil(exceedTime / unitTime);
            // console.log("총 단위", totalUnits);
            // console.log("총 요금", baseFee + totalUnits * unitFee);
            totalFee = baseFee + totalUnits * unitFee;
        }
        
        map.set(key, totalFee);
    }
    
    
    // 맵 정렬하기 
    return [...map].sort((a, b ) => a[0] - b[0]).map(fee => fee[1]);
}