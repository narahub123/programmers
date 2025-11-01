function solution(n)
{
    let count = 0;
    
    let cur = n;
    
    while(cur > 0){
        if(cur % 2 === 0){
            cur /=  2
        } else {
            count++;
            cur--;
        }
    }
    
    return count
}