function solution(friends, gifts) {
  const n = friends.length;
  const idxByName = new Map();
  for (let i = 0; i < n; i++) idxByName.set(friends[i], i);

  // table[i][j] = i가 j에게 준 횟수
  const table = Array.from({ length: n }, () => Array(n).fill(0));
  // giftIndex[i] = (i가 준 총개수) - (i가 받은 총개수)
  const giftIndex = Array(n).fill(0);

  // 입력 처리
  for (const g of gifts) {
    const parts = g.trim().split(/\s+/);
    if (parts.length < 2) continue;
    const giver = parts[0], receiver = parts[1];
    if (!idxByName.has(giver) || !idxByName.has(receiver)) continue; // 안전장치
    const gi = idxByName.get(giver), ri = idxByName.get(receiver);
    table[gi][ri] += 1;
    giftIndex[gi] += 1;
    giftIndex[ri] -= 1;
  }

  // 다음 달 받을 예상 수
  const nextReceive = Array(n).fill(0);

  // 각 서로 다른 쌍(i, j) 에 대해 한 번만 판단 (i < j)
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const aToB = table[i][j];
      const bToA = table[j][i];
      if (aToB > bToA) {
        // i가 더 많이 줬으므로 i가 다음 달에 1개 받음
        nextReceive[i] += 1;
      } else if (aToB < bToA) {
        // j가 더 많이 줬으므로 j가 다음 달에 1개 받음
        nextReceive[j] += 1;
      } else {
        // 주고받은 수가 같거나 둘 다 0이면 giftIndex 비교
        if (giftIndex[i] > giftIndex[j]) nextReceive[i] += 1;
        else if (giftIndex[i] < giftIndex[j]) nextReceive[j] += 1;
        // 같으면 아무 변화 없음
      }
    }
  }

  // 가장 많이 받을 개수 반환
  return Math.max(...nextReceive);
}
