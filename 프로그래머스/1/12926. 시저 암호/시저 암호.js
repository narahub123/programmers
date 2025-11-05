function solution(s, n) {
   const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
   const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    const regLower = /[a-z]/;
    const regUpper = /[A-Z]/;
    const regSpace = /[\s]/;
    
    console.log("문자열", s);
    console.log('거리', n);
    
    let result = "";
    
    for(let i =0; i < s.length; i++){
        const char = s[i];
        console.log("문자", char);
        if(regLower.test(char)){
            const index = LOWERCASE.indexOf(char);
            const moved = (index + n) % 26;
            result += LOWERCASE[moved]
        } else if(regUpper.test(char)){
            const index = UPPERCASE.indexOf(char);
            const moved = (index + n) % 26;
            result += UPPERCASE[moved];
        } else {
            result += char;
        }
    }
    
    return result;
}