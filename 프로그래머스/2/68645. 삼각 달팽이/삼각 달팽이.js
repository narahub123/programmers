function solution(n) {
    // 1. 삼각형 배열 생성
    const triangle = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));

    // 2. 방향 정의: 아래 → 오른쪽 → 대각선 위
    const directions = [
        [1, 0],   // 아래
        [0, 1],   // 오른쪽
        [-1, -1]  // 대각선 위
    ];

    let row = 0, col = 0, dir = 0; // 시작 위치, 방향
    for (let num = 1; num <= (n * (n + 1)) / 2; num++) {
        triangle[row][col] = num;  // 숫자 채우기

        // 다음 위치 계산
        let nextRow = row + directions[dir][0];
        let nextCol = col + directions[dir][1];

        // 범위 벗어나거나 이미 숫자가 있으면 방향 전환
        if (
            nextRow < 0 || nextRow >= n ||
            nextCol < 0 || nextCol > nextRow ||  // 삼각형 범위 체크
            triangle[nextRow][nextCol] !== 0
        ) {
            dir = (dir + 1) % 3;  // 방향 바꾸기
            nextRow = row + directions[dir][0];
            nextCol = col + directions[dir][1];
        }

        row = nextRow;
        col = nextCol;
    }

    // 3. 1차원 배열로 flatten
    return triangle.flat();
}
