function solution(schedules, timelogs, startday) {
  const toMin = (hhmm) => Math.floor(hhmm / 100) * 60 + (hhmm % 100); // HHMM → 분

  const isWeekdayIndex = (i) => {
    const day = (startday - 1 + i) % 7 + 1; // 1=월 … 7=일
    return day <= 5; // 월~금만
  };

  let reward = 0;

  timelogs.forEach((logs, idx) => {
    const latest = toMin(schedules[idx]) + 10; // 희망시각 + 10분 (분 단위)
    let ok = 0;

    for (let i = 0; i < 7; i++) {
      if (!isWeekdayIndex(i)) continue;     // 주말 제외
      if (toMin(logs[i]) <= latest) ok++;   // 지각 아님
    }

    if (ok === 5) reward++;                 // 평일 5일 모두 인정
  });

  return reward;
}
