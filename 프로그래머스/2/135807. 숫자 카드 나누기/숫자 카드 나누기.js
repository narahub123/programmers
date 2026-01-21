function solution(arrayA, arrayB) {
    // 양 조합의 최대 공약수 구하기 
    let aGCD = arrayA[0];
    for(let i = 1; i < arrayA.length; i++){
        
        aGCD = gcd(aGCD, arrayA[i])
    }
    
    let bGCD = arrayB[0];
    for(let i = 1; i < arrayB.length; i++){
        bGCD = gcd(bGCD, arrayB[i])
    }
    
    // console.log("최대 공약수", aGCD, bGCD);
    
    // 각 최대 공약수들로 서로의 요소를 나눌 수 있는지 확인 
    let aDiv = false;
    for(let i = 0; i < arrayA.length; i++){
        if(bGCD === 1) break;
        
        if(arrayA[i] % bGCD === 0){
            aDiv = true;
            break; 
        }
    }
    
    let bDiv = false; 
    for(let i = 0; i < arrayB.length; i++){
        if(aGCD === 1) break;
        
        // 상대의 최대 공약수로 나누어지는 수가 있다면 
        if(arrayB[i] % aGCD === 0){
            bDiv = true;
            break;
        }
    }
    
    // console.log(aDiv, bDiv);
    
    // 서로의 최대 공약수로 나누었을 때 나누어진다면 0 반환 
    if(aDiv && bDiv){
        return 0
    } else {
        if(aDiv){
            return aGCD === 1 ? 0 : aGCD
        } else if(bDiv){
            return bGCD === 1 ? 0 : bGCD
        }
        // 나누어지지 않는다면 최대값 사용 
        const max = Math.max(aGCD, bGCD)
        return  max === 1 ? 0 : max;
    }
}

function gcd (a, b){
    while(b !== 0){
        [a, b] = [b, a % b]
    }
    
    return a;
}