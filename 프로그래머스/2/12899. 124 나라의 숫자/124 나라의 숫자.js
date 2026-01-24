function solution(n) {
    const nums = [];
    
    function divider(n){
        const remainder = n % 3;
        
        if(remainder === 1) nums.push(1);
        else if(remainder === 2) nums.push(2);
        else nums.push(4);
        
        if(n / 3 >= 1){
            const share = remainder === 0 ? Math.floor((n / 3) - 1) : Math.floor(n / 3)
        
            if(share  >= 1) divider(share);    
        }
        
    }
    
    divider(n);
    
    
    return nums.reverse().join("");
}