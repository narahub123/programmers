function solution(id_list, report, k) {
    
    // 사용자 신고 목록을 위한 object
    const user = {};
    // key 생성 
    id_list.forEach((key) => user[key] = {
        reports: new Set(),
        reportedBys: new Set(),
        emails: 0,
    });
    
    // 각 키에 값 추가 
    report.forEach(r => {
        const [k, v] = r.split(" ");
        
        user[k].reports.add(v);
        
        user[v].reportedBys.add(k);
        
    })
    
    Object.values(user).forEach(userObj => {
        if(userObj.reportedBys.size >= k){
            const reported = [...(userObj.reportedBys)];        
            for(const u of reported){
                user[u].emails++;    
            }
        }
    })
    
    
    var answer = Object.values(user).map(u => u.emails);
    return answer;
}