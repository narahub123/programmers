function solution(video_len, pos, op_start, op_end, commands) {
    const [vm, vs] = video_len.split(":").map(Number);
    video_len = vm * 100 + vs;
    let [pm, ps] = pos.split(":").map(Number);
    pos = pm * 100 + ps;
    const [sm, ss] = op_start.split(":").map(Number);
    op_start = sm * 100 + ss;
    const [em, es] = op_end.split(":").map(Number);
    op_end = em * 100 + es;
    
    // 초기 위치가 오프닝 이전인 경우 
    if(op_start <= pos && pos <= op_end){
        pm = em;
        ps = es;
        
        pos = pm * 100 + ps;
    }
    
    for(const command of commands){
        if(command === "prev"){
            const subTen = ps - 10;
            
            if(subTen < 0){
                pm -= 1;
                ps = 60 + subTen;
            } else {
                ps = subTen;
            }
            
            if(pm < 0){
                pm = 0;
                ps = 0;
            }
            
            pos = pm * 100 + ps;
        }
        
        if(command === "next"){
            const addTen = ps + 10;
            
            if(addTen >= 60){
                pm +=1;
                ps = addTen % 60;
            } else {
                ps = addTen;
            }
            
            if(pm >= vm && ps >=vs){
                pm = vm;
                ps = vs;
            }
            
            pos = pm * 100 + ps;
        }
        
        if(op_start <= pos && pos <= op_end){
            pm = em;
            ps = es;
            pos = pm * 100 + ps;
        }
    }
   
    if(op_start <= pos && pos <= op_end){
        pm = em;
        ps = es;
        pos = pm * 100 + ps;
    }
    
    return `${pm.toString().padStart(2, '0')}:${ps.toString().padStart(2, '0')}`
}

