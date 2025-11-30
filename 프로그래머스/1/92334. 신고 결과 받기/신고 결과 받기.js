function solution(id_list, report, k) {
    const idMap = new Map(id_list.map(id => [id, {
        reported: [],
        emails: 0
    }]));
    
    report.forEach(r => {
        const [re, ed] = r.split(" ");
        
        const obj = idMap.get(ed);
        
        const set = new Set(obj.reported);
        
        set.add(re);
        
        idMap.set(ed, {...obj, reported: [...set]});
    })
    
    for(const id of id_list){
        const reports = idMap.get(id)['reported'];
        
        if(reports.length >= k){
            for(const re of reports){
                const obj = idMap.get(re);
                idMap.set(re, {...obj, emails: obj.emails + 1})
            }
        } 
    }
    
    return id_list.map(id => idMap.get(id)['emails']);
}