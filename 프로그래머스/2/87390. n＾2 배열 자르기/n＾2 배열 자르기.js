function solution(n, left, right) {
  const result = [];
  // 행 r: 0 ~ n-1
  for (let r = 0; r < n; r++) {
    const rowStart = r * n;
    const rowEnd = r * n + (n - 1);

    // 이 행이 범위의 오른쪽보다 왼쪽에 있으면 건너뜀
    if (rowStart > right) break;       // 이후 행들은 더 커지므로 종료 가능
    if (rowEnd < left) continue;      // 이 행은 왼쪽 밖이면 다음 행으로

    // 이 행에서 실제로 필요한 컬럼 범위(0-based 컬럼 인덱스)
    const startCol = Math.max(left, rowStart) - rowStart;
    const endCol = Math.min(right, rowEnd) - rowStart;

    for (let c = startCol; c <= endCol; c++) {
      // 문제의 값 규칙: (r,c) 위치 값은 Math.max(r+1, c+1)
      result.push(Math.max(r + 1, c + 1));
    }
  }
  return result;
}
