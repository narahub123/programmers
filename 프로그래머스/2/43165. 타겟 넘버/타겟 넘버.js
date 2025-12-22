function solution(numbers, target) {
    let count = 0; // 타겟과 같은 경우의 수

    function dfs(index, sum) {
        // 모든 숫자를 다 사용했을 때
        if (index === numbers.length) {
            if (sum === target) count++;
            return;
        }

        // 현재 숫자를 더하는 경우
        dfs(index + 1, sum + numbers[index]);
        // 현재 숫자를 빼는 경우
        dfs(index + 1, sum - numbers[index]);
    }

    // 0번째 인덱스부터 합 0으로 시작
    dfs(0, 0);

    return count;
}

