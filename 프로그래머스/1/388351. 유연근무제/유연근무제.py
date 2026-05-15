def solution(schedules, timelogs, startday):
    count = 0
    # 희망 출근 시간과 실제 출근 시간 배열과 매칭 
    for s, t in zip(schedules, timelogs):
        # 희망 출근 시간 이전에 출근 여부 확인 
        logs = [False, False, False, False, False]
        for i, d in enumerate(t):
            # 토요일 일요일은 확인 범위에서 제외 
            if (i + startday) % 7 == 6 or (i + startday) % 7 == 0:
                continue
                
            # 출근 예상 시간 구하기 
            expect = s + 10
            hour = expect // 100
            minute = expect % 100
            if minute >= 60:
                minute = minute % 60
                hour += 1
                expect = hour * 100 + minute
            
            # 희망 출근 시간 이전에 출근한 경우 확인 
            if d <= expect:
                logs[((i + startday) % 7) - 1] = True
        
        if all(logs):
            count += 1
    return count