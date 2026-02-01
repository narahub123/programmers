function solution(expression) {
    // 1. 토큰 추출하기 
    const tokens = expression.match(/[*+-]|[0-9]+/g).map(t=> isNaN(Number(t))?t:Number(t));
    
    // console.log("토큰들", tokens);
    
    // 2. 연산자만 중복 없이 추출하기 
    const operators = [];
    
    for(const token of tokens){
        if(!operators.includes("+") && token === "+"){
            operators.push("+");
        } else if(!operators.includes("-") && token === "-"){
            operators.push("-");
        } else if(!operators.includes("*") && token === "*"){
            operators.push("*");
        }
    }

    // console.log("연산자", operators);
    
    // 3. 경우의 수 구하기 
    const priorities = [];
    
    for(let i = 0; i < operators.length; i++){
        const first = operators[i];
        
        if(operators.length === 1) {
            priorities.push([first]);
            continue;
        }
        const rest = operators.filter(o => o !== first);
        for(let j = 0; j < rest.length; j++){
            const second = rest[j];
            
            if(operators.length === 2){
                priorities.push([first, second]);
                continue;
            }
            
            const last = rest.filter(r => r !== second)[0]
            priorities.push([first, second, last]);
        }
    } // 경우의 수 구하기 
    
    // console.log("경우의 수", priorities);
    
    
    // 5. 계산 
    // 우선 순위 순으로 계산하고 cluster에 없애고 앞뒤의 요소에 계산된 값 넣이 
    let max = -Infinity;
    
    for(const priority of priorities){
        
        let result = 0;
        let clusters = getClusters(tokens);
        
        for(const operator of priority){
            while(true){
                const index = clusters.findIndex(c => c.op === operator);
                if(index === -1) break;
                let sum = calc(clusters[index]);
                
                result = sum;
                const newClusters = clusters.map((c, i) => {
                    if(i === index - 1){
                        
                        return {
                            ...c,
                            operands: [c.operands[0], sum ]
                        }
                    } else if(i === index + 1){
                        
                        return {
                            ...c,
                            operands: [sum, c.operands[1]] 
                        }
                    } else return c
                });
                
                clusters = newClusters.filter((c, i) => i !== index)
            } // while 끝
            
        } // for 끝
        
        result = Math.abs(result);
        if(result > max){
            max = result;
        }
    }
    
    // console.log(max);
    return max;
}

// 5.1 연산하기 
function calc(cluster){
    const {op, operands} = cluster;
    const [before, after] = operands;
    let sum = before;
    
    switch(op){
        case "+":
            sum += after;
            break;
        case "-":
            sum -= after;
            break;
        case "*":
            sum *= after;
            break;
    }
    
    // console.log(`${before}${op}${after}=${sum}`);
    return sum;
}

// 4. 계산을 위한 토큰 변경 
function getClusters (tokens){
    const clusters = [];
    
    for(let i = 0; i < tokens.length; i++){
        const token = tokens[i];
        
        if(typeof token === "string"){
            clusters.push({
                op: token,
                operands: [tokens[i-1], tokens[i+1]]
            })
        }
    }
    
    // console.log("묶음", clusters)
    return clusters
}