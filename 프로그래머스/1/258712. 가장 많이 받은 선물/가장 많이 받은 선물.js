function solution(friends, gifts) {
  // 선물 관계
  const giftRelation = {};
  for (const friend of friends) {
    const obj = { index: 0 };
    const withoutMe = friends.filter(f => f !== friend);
    for (const f of withoutMe) obj[f] = 0;
    giftRelation[friend] = obj;
  }

  // 선물을 주고 받은 관계(쌍대 차와 지수 갱신)
  for (const gift of gifts) {
    const [giver, receiver] = gift.split(' ');
    giftRelation[giver][receiver]++;   // giver → receiver
    giftRelation[giver].index++;       // 지수 +
    giftRelation[receiver][giver]--;   // 반대편 차이 대칭 업데이트
    giftRelation[receiver].index--;    // 지수 -
  }

  // 각 사람의 다음 달 수신 수 계산
  const newArr = friends.map(me => {
    const a = giftRelation[me];
    const myIndex = a.index;
    let gift = 0;

    // 상대 목록: 'index' 키 제외
    const names = Object.keys(a).filter(k => k !== 'index');

    for (const name of names) {
      const diff = a[name];                  // me ↔ name 선물 차
      if (diff > 0) {
        gift += 1;                           // 내가 더 많이 줬으면 1개 받음
      } else if (diff === 0) {
        const otherIndex = giftRelation[name].index;
        if (myIndex > otherIndex) gift += 1; // 비김 + 지수 우위면 1
      }
      // diff < 0 인 경우는 0 (감점 없음)
    }

    return gift;
  });

  const max = Math.max(...newArr);
  return max;
}
