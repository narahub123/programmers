function solution(x) {
    // 자리수 분리 
    const posNums = x.toString().split('').map(Number);
    console.log(posNums);
    // 자리 수의 합 
    const sum = posNums.reduce((acc, cur) => acc + cur);
    console.log(sum);
    // 나누어지는 여부 확인 
    return x % sum === 0;
}