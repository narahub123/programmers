function solution(food) {
    console.log("준비한 음식", food);
    const center = "0";
    let left = "";
    let right = "";
    
    for(let i = 1; i < food.length; i++){
        const num = Math.floor(food[i] / 2)
        if(num > 0){
            const f = i.toString().repeat(num)
            left += f;
            right = f + right
        }
    }
    
    const result = left + center + right;
    
    console.log(result);
    
    return result;
    
}