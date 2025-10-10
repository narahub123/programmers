function solution(video_len, pos, op_start, op_end, commands) {
    console.log("현재 시간", pos);
    
    
    let [min, sec] = convertTime(pos);
    
    // 현재 시간이 오프닝 시간에 포함되는지 여부 확인
    if(checkIsWithinOpening([min, sec], op_start, op_end)){
        // 오프닝 시간에 포함되는 경우 오프닝의 완료 시간으로 이동 
        const [endMin, endSec] = convertTime(op_end);
        
        min = endMin;
        sec = endSec;
    }
    
    console.log('시간', min, sec);
    
    for(const command of commands){
        if(command === "prev"){
            const [newMin, newSec] = moveTo10SecsBefore([min, sec]);
            
            console.log("오프닝?", checkIsWithinOpening( [newMin, newSec], op_start, op_end))
            
            if(checkIsWithinOpening( [newMin, newSec], op_start, op_end)){
                // 오프닝 시간에 포함되는 경우 오프닝의 완료 시간으로 이동 
                const [endMin, endSec] = convertTime(op_end);
                

                min = endMin;
                sec = endSec;
            } else {
                 min = newMin;
                 sec = newSec;
            }
            
           
        } else {
            const [newMin, newSec] = moveTo10SecsAfter([min, sec], video_len);
            
            if(checkIsWithinOpening( [newMin, newSec], op_start, op_end)){
                // 오프닝 시간에 포함되는 경우 오프닝의 완료 시간으로 이동 
                const [endMin, endSec] = convertTime(op_end);

                min = endMin;
                sec = endSec;
            } else {
                 min = newMin;
                 sec = newSec;
            }
        }
    }
    
     console.log('시간', min, sec);
    var answer = `${min.toString().padStart(2, 0)}:${sec.toString().padStart(2, 0)}`;
    return answer;
}

// 시간을 숫자 배열로 변환
const convertTime = (time) => {
    return time.split(':').map(Number);
}

// 오프닝 안의 시간 여부 확인 
const checkIsWithinOpening = (curTime, op_start, op_end) => {
    const [min, sec] = curTime;
    const [startMin, startSec] = convertTime(op_start);
    const [endMin, endSec] = convertTime(op_end);
    
    if(startMin <= min && min <= endMin){
        if(startMin === endMin){
            if(startSec <= sec && sec <= endSec){
                return true;    
            }
            return false;
        } else if(startMin !== endMin){
            if(startMin === min){
                if(startSec <= sec){
                    return true;
                }
                return false
            } else if(min === endMin) {
                if(sec <= endSec){
                    return true;
                }
                return false;
            } 
            return true;
        } 
    }
    
    return false;
}

// 10초 미만 여부 확인
const moveTo10SecsBefore = (curTime) => {
    let [min, sec] = curTime;
    
    if(min === 0 && sec <10){
        return [0, 0];
    }
    
    if(sec - 10 < 0){
        min--;
        sec = 50 + sec;
    } else {
        sec -= 10;
    }
    
    return [min, sec];
}

// 완료 10초 미만 여부 확인
const moveTo10SecsAfter = (curTime, length) => {
  const [min, sec] = curTime;
  const [lenMin, lenSec] = convertTime(length);

  const curTotal = min * 60 + sec;
  const lenTotal = lenMin * 60 + lenSec;

  const next = Math.min(curTotal + 10, lenTotal);

  return [Math.floor(next / 60), next % 60];
};