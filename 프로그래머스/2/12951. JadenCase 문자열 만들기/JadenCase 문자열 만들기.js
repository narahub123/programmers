function solution(s) {
    
    const str = s.toLowerCase();
    
    const arr = [...str];
    
    console.log("소문자로 변경", str);
    
    // 변경된 소문자에서 문자열의 시작을 찾아서 대문자로 변경 
    const regex = /(?<=\s|^)[0-9a-z]/g
    const firsts = [...str.matchAll(regex)]
    
    for(const first of firsts){
        console.log(arr[first.index].toUpperCase());
        arr[first.index] = arr[first.index].toUpperCase()
    }
    
    console.log("변경값", arr.join(''))
    
    return arr.join('')
}