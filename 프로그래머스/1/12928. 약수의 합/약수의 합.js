function solution(n) {
    // 약수 구하기 
    const remainer = [n];
    
    let x = 1;
    
    while(x < n){
        if(n % x === 0){
            remainer.push(x);
        }
        
        x++;
    }
    
    return remainer.reduce((acc, cur) => acc + cur);
}