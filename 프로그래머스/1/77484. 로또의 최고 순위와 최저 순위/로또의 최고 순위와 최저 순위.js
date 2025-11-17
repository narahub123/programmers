function solution(lottos, win_nums) {
   // console.log("로또 번호", lottos.sort((a, b) => a - b));
   // console.log("당첨 번호", win_nums.sort((a, b) => a - b));
   
    let countZeros = 0;
    let wins = 0;
    
    lottos.forEach(lotto => {
        // console.log("각 번호", lotto)
        
        // 0 여부 
        if(lotto === 0){
            countZeros++;
        } else {
            // 당첨 여부 
            // console.log("당첨 여부", win_nums.includes(lotto))
            
            if(win_nums.includes(lotto)){
                wins++;
            }
        }
    })
    
    console.log("제로 개수", countZeros);
    console.log("당첨 개수", wins);
    console.log("최저 순위", wins <= 1 ? 6 - wins : 7 - wins);
    console.log("최고 순위", wins + countZeros <= 1 ? 6 : 7 - (wins + countZeros));
    
    const lowest = wins <= 1 ? 6 : 7 - wins;
    const highest = wins + countZeros <= 1 ? 6 : 7 - (wins + countZeros);
    
    return [highest, lowest];
}