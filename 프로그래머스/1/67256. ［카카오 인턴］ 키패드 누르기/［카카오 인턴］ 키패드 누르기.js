function solution(numbers, hand) {
    console.log('손잡이', hand);
    const Ls = ["*", 7, 4, 1];
    const Rs = ["#", 9, 6, 3 ];
    const Ns = [0, 8, 5, 2];
    
    let lPos = "*";
    let rPos = "#";
    
    const hands =  numbers.map(num => {
        if(Ls.includes(num)){
            lPos = num;
            return "L";
        } else if(Rs.includes(num)){
            rPos = num;
            return "R";
        } else {
            // 현재 손가락의 위치에서 num까지의 거리를 구해야 함 
            console.log("숫자", num, "왼쪽", lPos, "오른쪽", rPos);
            
            const numIndex = Ns.indexOf(num);
            const leftIndex = Ls.indexOf(lPos) === -1 ? Ns.indexOf(lPos) : Ls.indexOf(lPos);
            const rightIndex = Rs.indexOf(rPos) === -1 ? Ns.indexOf(rPos) : Rs.indexOf(rPos);
            
            console.log(leftIndex, rightIndex)
            
            const leftDist = Ls.indexOf(lPos) === -1 ? Math.abs(Ns.indexOf(num) - Ns.indexOf(lPos)) : Math.abs(numIndex - leftIndex) + 1
            const rightDist = Rs.indexOf(rPos) === -1 ? Math.abs(Ns.indexOf(num) - Ns.indexOf(rPos)) : Math.abs(numIndex - rightIndex) + 1
            
            console.log(leftDist, rightDist)
            
            if(leftDist > rightDist){
                rPos = num;
                return "R"
            } else if (leftDist < rightDist){
                lPos = num;
                return "L"
            } else {
                if(hand === "left") {
                    lPos = num;
                    return "L";
                }
                else {
                    rPos = num;
                    return "R";
                }
            }
        }
    }).join("")
    
    console.log(hands)
    
    return hands;
}

