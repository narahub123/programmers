function solution(clothes) {
  if (!Array.isArray(clothes) || clothes.length === 0) return 0;

  // 종류별 개수 집계
  const counts = clothes.reduce((acc, [name, kind]) => {
    if (!name || !kind) return acc; // 방어 코드
    acc[kind] = (acc[kind] || 0) + 1;
    return acc;
  }, {});

  // 곱 연산: (count + 1) 곱한 뒤 -1
  const result = Object.values(counts).reduce((prod, c) => prod * (c + 1), 1) - 1;

  return result;
}
