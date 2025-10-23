function solution(numbers) {
    // 0부터 9까지의 합
    const sumToTen = 9 * (9 + 1) / 2;
    
    
    // 숫자 배열 더하기
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    
    return sumToTen - sum;
}