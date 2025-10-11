function solution(n, w, num) {
  // num의 행/열
  const r = Math.floor((num - 1) / w);      // 0-based 행
  const p = (num - 1) % w;                  // 행 내 위치(0..w-1)
  const c = (r % 2 === 0) ? p : (w - 1 - p); // 지그재그 열 인덱스

  // 최상단 행 정보
  const top = Math.floor((n - 1) / w);      // 최상단 행 인덱스
  const rem = n % w;                         // 최상단 행의 칸 수(부분 행이면 1..w-1, 가득 차면 0)
  const topIsFull = (rem === 0);
  const lastLen = topIsFull ? w : rem;       // 최상단 행의 실제 칸 수

  // 위쪽에 있는 '가득 찬 행' 개수
  let fullAbove = 0;
  if (top > r) {
    fullAbove = topIsFull ? (top - r) : (top - r - 1);
    if (fullAbove < 0) fullAbove = 0;
  }

  // 최상단이 '부분 행'이면 그 행에서 같은 열 c에 박스가 있는지(있으면 +1)
  let partial = 0;
  if (!topIsFull && top > r) {
    if (top % 2 === 0) {
      // 왼→오 채움: 0..lastLen-1
      if (c < lastLen) partial = 1;
    } else {
      // 오→왼 채움: w-lastLen..w-1
      if (c >= w - lastLen) partial = 1;
    }
  }

  // 자기 자신(1) + 위의 가득 찬 행 수 + (부분 행에서 같은 열이면 +1)
  return 1 + fullAbove + partial;
}
