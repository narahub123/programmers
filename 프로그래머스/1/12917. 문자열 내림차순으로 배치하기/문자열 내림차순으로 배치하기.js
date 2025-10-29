function solution(s) {
    // 문자열 분리
   const sp = s.split('');
    
    // 문자열 숫자로 
    const toNum = sp.map((a) => a.charCodeAt(0));
    
    // 문자열 역정렬
    const reverse = toNum.sort((a, b) => b -a);
    
    // 역정렬을 문자로
    const toString = reverse.map(r => String.fromCharCode(r));
    
    // 문자열로 
    const strs = toString.join('');
    
    return strs
}