function solution(n, k) {
    // 1. 후보 숫자들
    let arr = Array.from({ length: n }, (_, i) => i + 1);

    // 2. k를 0-based로 변환 (딱 한 번)
    k--;

    const result = [];

    // 3. 앞자리부터 결정
    while (n > 0) {
        const divisor = factorial(n - 1);

        const index = Math.floor(k / divisor);
        k = k % divisor;

        result.push(arr[index]);
        arr.splice(index, 1); // 인덱스로 제거

        n--;
    }

    return result;
}

// 팩토리얼
function factorial(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}
