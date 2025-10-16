function solution(n) {
    // 약수 구하기 
    const remainers = [];
    
    let x = 1;
    
    while(x <= n){
        if(n % x === 0){
            remainers.push(x);
        }
        
        x++;
    }
    
    return remainers.reduce((acc, cur) => acc + cur, 0);
}