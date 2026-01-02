function solution(skill, skill_trees) {
    console.log('선행 스킬', skill);
    
    console.log("스킬 트리 배열", skill_trees);
    
    let count = 0;
    
    
    
    for(let i = 0; i < skill_trees.length; i++){
        
        let stage = 0;
        outer: for(let j = 0; j < skill_trees[i].length; j++){
            const curSkill = skill_trees[i][j];
            
            if(skill.includes(curSkill)){
                if(skill.indexOf(curSkill) !== stage){
                    break outer;         
                } else {
                    stage++;
                }
            }
            
            if(j === skill_trees[i].length - 1){
                // console.log("카운트 함")
                count++;
            }
        }  
    }
    console.log(count)
    return count;
}