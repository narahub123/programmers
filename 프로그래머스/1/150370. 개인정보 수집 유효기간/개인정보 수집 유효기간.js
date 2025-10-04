function solution(today, terms, privacies) {
    
    // 약관별 추가
    // 배열을 object로 변경하기 
    const plus = {};
    terms.forEach(term => {
        const p = term.split(" ");
        plus[p[0]] = Number(p[1]);
    });
    
    
    // 만료일 구하기 
    const expires = privacies.map(privacy => {
        const div = privacy.split(" ");
        const term = div[1];
        
        // 추가해야 하는 달 
        const add = plus[term];
        
        // 수집일자
        const start = div[0];
        
        // 년, 달
        let [year, month, date] = start.split('.').map(Number);
        
        if(month + add > 12){
            year += Math.floor((month + add-1) / 12);
            month = (month + add) % 12 === 0 ? 12 : (month + add) % 12;
        } else {
            month += add;
        }
        
        date -= 1;
        if (date === 0) {
          date = 28;
          month -= 1;
          if (month === 0) {
            month = 12;
            year -= 1;
          }
        }

        
        return [year, month, date]
    })
    
    const expired = [];
    
    expires.forEach((expire, index) => {
        const dist = today.split('.').map(Number);
        if(expire[0] < dist[0]){
            expired.push(index + 1);
        } else if(expire[0] === dist[0] && expire[1] < dist[1]){
            expired.push(index + 1);
        } else if (expire[0] === dist[0] && expire[1] === dist[1] && expire[2] < dist[2]){
            expired.push(index + 1);
        }
    })
    
    console.log(expired);
    return expired;
}