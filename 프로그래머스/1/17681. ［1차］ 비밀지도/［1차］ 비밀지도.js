function solution(n, arr1, arr2) {
    
    // 이진수로 변경 
    const map1 = arr1.map(a => a.toString(2).padStart(n, '0'))
    const map2 = arr2.map(a => a.toString(2).padStart(n, '0'))
    
   
    // 규칙에 따라 같은 위치를 더함 
    const combination = map1.map((m, i) => {
        return [...m].map((c, j) => {
            if(c === '1' || map2[i][j] === '1') return "#";
            else return " "
        }).join("")
        
    })
    
    return combination
}