function solution(n,a,b)
{
    let count = 1;

    let newA = a;
    let newB = b;
    
    while(n > 1){
        
        if((newA % 2 === 0 && newA - 1 === newB) || (newA % 2 !== 0 && newA + 1 === newB) ){
            break;
        }
        
        n /= 2;
        
        newA = Math.ceil(newA / 2);
        newB = Math.ceil(newB / 2);
        count++;
    }
    
    return count;
}