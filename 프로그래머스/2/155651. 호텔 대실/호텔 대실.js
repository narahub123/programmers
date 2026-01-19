function solution(book_time) {
    const rooms = [];
    
    // 정렬 
    const sort = book_time.map(book => {
        const [enter, leave] = book;
        const [eHour, eMinute] = enter.split(":");
        const numEnter = Number(eHour + eMinute);
        const [lHour, lMinute] = leave.split(":").map(Number);
        
        const mMinute = lMinute + 10 >= 60 ? (((lMinute + 10) - 60) + "").padStart(2, '0') : lMinute + 10;
        
        const mHour = lMinute + 10 >= 60 ? lHour + 1 : lHour;
        
        const numLeave = Number(mHour.toString() + mMinute);
        
        return [numEnter, numLeave];
        
    }).sort((a, b) => a[0]-b[0]);
    
    
    
    for(let i = 0; i < sort.length; i++){
        const [enter, leave] = sort[i];
        
        // 방의 순서 
        let index = 0;
        // 입실 여부 
        let isEntered = false;
        
        // 입실 가능한 방이 있는지 찾기 
        while(index < sort.length){
            // 방의 퇴실 시간이 예약 입실 시간보다 작거나 같다면 입실 가능 
            if(rooms[index] <= enter){
                // 방의 퇴실 시간을 현재 예약의 퇴실 시간으로 대체 
                rooms[index] = leave;
                isEntered = true;
                break;
            }
            
            index++;
        }
        
        // 입실하지 못한 경우 방을 하나 더 추가 
        if(!isEntered){
            rooms.push(leave);
        }
    }
    
    return rooms.length;
}