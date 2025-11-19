function solution(n, lost, reserve) {
    
    let rest = lost.sort((a, b) => a - b);
    // 분실했는데 여분의 체육복이 있는 학생 제외 
    rest = lost.filter(l => {
        if(reserve.includes(l)){
            const index = reserve.indexOf(l);
            reserve.splice(index, 1);
            
            return false;
        } else return true;
    });
    
    // 빌려야 할 학생이 없는 경우
    if(rest.length === 0) return n;
    
    
    // 빌려야 할 학생이 있는 경우
    rest = rest.filter(r => {
        if(reserve.includes(r - 1) ){
            const index = reserve.indexOf(r - 1);
            
            reserve.splice(index, 1)
            
            return false;
        }  else if (reserve.includes(r + 1)) {
            const index = reserve.indexOf(r + 1);
            
            reserve.splice(index, 1)
        } else {
            return true;
        }
    })
    
    if(rest.length === 0) return n;
    else return n - rest.length;
    console.log("실제 빌려야 하는 학생", rest);
    
}