function solution(today, terms, privacies) {
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    
    const dates = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28
    ];
    
    const [tY, tM, tD] = today.split('.').map(Number);
    
    const map = new Map();
    
    // 계약 이름 및 계약 기간 분리
    for(let term of terms){
        const [t, d] = term.split(' ').map((t, index) => {
            if(index === 1) return Number(t);
            return t; 
        })
        
        map.set(t, d);
    }
    
    console.log(map);
    
    // 개인 정보 파악 및 정리
    const expires = [];
    
    for(let i = 0; i < privacies.length; i++){
        const privacy = privacies[i];
        
        const [startDate, term] = privacy.split(" ").map((p, idx) => {
            if(idx === 0){
                return p.split('.').map(Number);
            }
            
            return p;
        });
        
        // 계약 시작일 
        let [sY, sM, sD] = startDate;
        
        // 게약 기간 
        const duration = map.get(term);
        
        // 계약 시작 달 + 계약 달이 12가 넘는 경우 year + 1
        
        const totalMonth = sM + duration
        if(totalMonth > 12){
           sY += Math.floor((totalMonth - 1)/ 12); 
        }
        
        sM = months[(totalMonth - 1) % 12 ] ;
        
        if(sD - 1 === 0){
            if(sM - 1  === 0){
                sM = 12;
                sY -= 1;
            } else {
                sM -= 1;    
            }
            
        }
        
        sD = dates[(sD - 1) + 28 - 1];
        
        
        if(sY < tY){
            expires.push(i+1)
        } else if(sY === tY && sM < tM){
            expires.push(i+1)
        } else if(sY === tY && sM === tM && sD < tD){
            expires.push(i+1)
        }
    }
    
   return expires
}