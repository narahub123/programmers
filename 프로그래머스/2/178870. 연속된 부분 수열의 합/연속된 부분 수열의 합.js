function solution(sequence, k) {
    
    const result = [-Infinity, Infinity];
    let sum = sequence[0]; // 합 
    let end = 0; // 인덱스 
    
    for(let head = 0; head < sequence.length; head++){
        const first = sequence[head];
        // 합이 k 보다 큰 경우 다음 헤드로 이동 
        if(sum > k){
            sum -= first;
            continue;
        } else if(sum === k){
            // 현재 수열의 길이 
            const curLen = end - head;
            // 부분 수열의 길이 
            const len = result[1] - result[0];
            
            if(curLen < len){
                result[0] = head;
                result[1] = end;
            } else if (curLen === len){
                if(head < result[0]){
                    result[0] = head;
                    result[1] = end;
                }
            }
            
            sum -= first;
            continue;
        }
        
        outer: for(let tail = end; tail < sequence.length; tail++){
            
            if(head < tail && end < tail){
                sum += sequence[tail]
            }
            
            if(sum === k){
                const curLen = tail - head;
                // 부분 수열의 길이 
                const len = result[1] - result[0];
                
                if(curLen < len){
                    result[0] = head;
                    result[1] = tail;
                } else if (curLen === len){
                    if(head < result[0]){
                        result[0] = head;
                        result[1] = tail;
                    }
                }
                
                sum -= first;
                end = tail;
                break outer;
            } else if (sum > k){
                sum -= first;
                end = tail;
                break outer; 
            }
        }
    }
    
    
    return result;
}