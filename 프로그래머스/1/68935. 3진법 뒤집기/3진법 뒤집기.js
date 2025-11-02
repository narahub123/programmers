function solution(n) {
    const three = n.toString(3);
    
    // console.log("3진법으로 변경", three);
    
    let reverse = '';
    
    for(let i = three.length - 1; i >= 0; i--){
        // console.log(`${i + 1}번째 문자`, three[i]);
        
        reverse += three[i];
    }
    
    // console.log("뒤집힌 삼진법", reverse);
    
    // console.log('10진법', parseInt(reverse, 3));
    
    return parseInt(reverse, 3)
}