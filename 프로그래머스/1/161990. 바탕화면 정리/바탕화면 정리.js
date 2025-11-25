function solution(wallpaper) {
    console.log("바탕화면 상태", wallpaper);
    let minX = Infinity
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    
    for(let i = 0; i < wallpaper.length; i++){
        for(let j = 0; j < wallpaper[0].length; j++){
            if(wallpaper[i][j] === "#"){
                console.log("y좌표", i);
                console.log("x좌표", j);
                
                if(j < minX) minX = j;
                if(maxX < j) maxX = j;
                
                if(i < minY) minY = i;
                if(maxY < i) maxY = i;
            }
        }
    }
    
    return [minY, minX, maxY + 1, maxX + 1];
}