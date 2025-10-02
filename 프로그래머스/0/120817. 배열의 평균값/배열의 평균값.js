function solution(numbers) {
    const length = numbers.length;
    
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    
    const avg = sum / length;
    
    console.log(avg);
    
    return avg
}