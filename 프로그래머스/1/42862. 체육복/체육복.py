def solution(n, lost, reserve):
    print("도난 학생", lost)
    print("여벌 학생", reserve)
    
    pure_reserve = set(reserve) - set(lost)
    pure_lost = set(lost) - set(reserve)
    print("순수 여벌", pure_reserve)
    print("순수 도난", pure_lost)
    
    for r in pure_reserve:
        if r - 1 in pure_lost:
            pure_lost.remove(r - 1)
        elif r + 1 in pure_lost:
            pure_lost.remove(r + 1)
        
    attendences = n - len(pure_lost)
    
    print("참석 학생 수", attendences)
    
    return attendences