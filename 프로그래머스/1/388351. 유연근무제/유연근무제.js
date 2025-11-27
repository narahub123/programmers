function solution(schedules, timelogs, startday) {
  let events = 0;
  const MAX_MINUTES = 11 * 60 + 59; // 11:59을 초과하는 로그는 무시

  for (let i = 0; i < timelogs.length; i++) {
    const schedule = schedules[i];
    // schedule: HHMM 형태라 가정
    let scheduleMinutes = Math.floor(schedule / 100) * 60 + (schedule % 100);
    let cutoffMinutes = scheduleMinutes + 10;
    if (cutoffMinutes > MAX_MINUTES) cutoffMinutes = MAX_MINUTES;

    let ontimeCount = 0;
    const logs = timelogs[i] || [];

    for (let j = 0; j < logs.length; j++) {
      // startday: 1=월요일 ... 7=일요일 이므로, j(0..n) 기준으로 weekday(1..7) 계산
      const weekday = ((startday - 1 + j) % 7) + 1;
      if (weekday === 6 || weekday === 7) continue; // 토(6), 일(7) 제외

      const log = logs[j];
      if (log == null) continue; // 결석/빈값 처리

      const logHour = Math.floor(log / 100);
      const logMinute = log % 100;
      const logTotal = logHour * 60 + logMinute;

      if (logTotal > MAX_MINUTES) continue; // 11:59 이후 무시

      if (logTotal <= cutoffMinutes) ontimeCount++;
    }

    if (ontimeCount >= 5) events++;
  }

  return events;
}
