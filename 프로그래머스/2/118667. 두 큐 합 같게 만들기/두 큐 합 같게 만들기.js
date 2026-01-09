function solution(queue1, queue2) {
    const n = queue1.length;
    const arr = queue1.concat(queue2);

    const total = arr.reduce((a, b) => a + b, 0);
    if (total % 2 !== 0) return -1;

    const target = total / 2;
    if (arr.some(v => v > target)) return -1;

    let sum1 = queue1.reduce((a, b) => a + b, 0);

    // 두 큐를 하나의 원형 배열처럼 사용
    let left = 0;        // queue1의 front
    let right = n;       // queue2의 front
    let count = 0;

    const limit = arr.length * 2;

    while (sum1 !== target && count <= limit) {
        if (sum1 > target) {
            sum1 -= arr[left];
            left++;
        } else {
            sum1 += arr[right];
            right++;
        }
        count++;
    }

    return sum1 === target ? count : -1;
}
