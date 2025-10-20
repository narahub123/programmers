function solution(s){
    
    
    const ps = [...s.matchAll(/p/ig)];
    const ys = [...s.matchAll(/y/ig)];
    
    // p와 y 둘 다 없는 경우 
    if(ps === null && ys === null) return true;
    
    // p와 y의 개수가 같은 경우
    if(ps.length === ys.length){
        return true;
    }
    
    return false;
    
}