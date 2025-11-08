function solution(strings, n) {
    
    return strings.sort((a, b) => {
        if(a[n] !== b[n]) return a[n].localeCompare(b[n]);
        else return a.localeCompare(b);
    })
}