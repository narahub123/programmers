function solution(name, yearning, photo) {
    
    const pointMap = {}
   
    name.forEach((n, i) => {
        pointMap[n] = yearning[i]
    })
    
    return photo.map(p => p.reduce((acc, cur) => acc + (pointMap[cur] ?? 0), 0))
}