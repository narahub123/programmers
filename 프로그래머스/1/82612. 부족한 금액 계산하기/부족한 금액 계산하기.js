function solution(price, money, count) {
    const sum = price * (count * (count + 1) / 2);
    
    console.log("총 요금", sum);
    
    const lack = sum - money;
    
    console.log("부족 금액", lack);
    
    return lack < 0 ? 0 : lack
}