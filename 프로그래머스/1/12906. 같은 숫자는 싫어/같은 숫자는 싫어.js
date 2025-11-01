function solution(arr){
    let stack = -1;
    
    return arr.filter(a => {
        if(a === stack) return false;
        else {
            stack = a;
            return true;
        }
    })
}