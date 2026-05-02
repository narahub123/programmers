def solution(N, stages):
    stage_dict = []
    num_of_players = len(stages)
    
    for i in range(N + 1):
        stage_dict.append(0)
        
    for s in stages:
        stage_dict[s - 1] += 1
    
    failure = []
    reach = 0
    for i in range(N + 1, 0, -1):
        if i == N + 1:
            reach = stage_dict[i - 1]
            continue
        else:
            reach += stage_dict[i - 1]
            
            if reach == 0:
                failure.append(0)
            else:
                failure.append(stage_dict[i - 1] / reach)
        
    failure.reverse()
    
    # (스테이지 번호, 실패율)
    result = [(i + 1, failure[i]) for i in range(N)]

    # 실패율 기준 내림차순 정렬 (값 기준)
    result.sort(key=lambda x: x[1], reverse=True)

    # 스테이지만 추출
    return [stage for stage, _ in result]
        