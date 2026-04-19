def solution(k, score):
    hallOfFame = []
    for i in range(len(score)):
        print(i)
        # 인덱스가 k 보다 작은 경우
        if i < k:
            lowest = min(score[0:i+1])
            hallOfFame.append(lowest)
        else:
            sortedArr = sorted(score[0:i+1], reverse=True)
            lowest = sortedArr[k-1]
            hallOfFame.append(lowest)
            
    
    return hallOfFame
    