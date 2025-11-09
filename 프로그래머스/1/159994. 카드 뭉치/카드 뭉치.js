function solution(cards1, cards2, goal) {
    console.log("카드 1", cards1)   
   console.log("카드 2", cards2)   
    console.log("목표", goal)   
    
    for(let i = 0; i < goal.length; i++){
        const word = goal[i];
        
        if(cards1[0] === word){
            cards1.shift()
        } else if(cards2[0] === word){
            cards2.shift()
        } else {
            return "No";
        }
    }
    
    return "Yes";
}