const regex = /\d+\D+/g;

function solution(dartResult) {
    
    const stages = dartResult.match(regex);
    
    const points = [];
    
    for(let i = 0; i < stages.length; i++){
        const stage = stages[i];
        
        const regexNum = /\d+/
        
        let point = stage.match(regexNum)[0];
    
        const rest = stage.replace(regexNum, "");
        
        for(let j = 0; j < rest.length; j++){
            const char = rest[j];
            
            // 숫자 이면 무시 
            if((/[0-9]/).test(char)){
                point = Number(char);
            } else if(char === "S"){
                point = Math.pow(point, 1)
            } else if (char === "D"){
                point = Math.pow(point, 2)
            } else if (char === "T"){
                point = Math.pow(point, 3)
            } else if (char === "*"){
                point *= 2;
                if(points[i - 1]){
                    points[i - 1] *= 2;
                }
                
            } else if (char === "#"){
                point *= (-1)
            }
        }
        points.push(point);
    }
    
    
    return points.reduce((acc, cur) => acc + cur, 0)
}

