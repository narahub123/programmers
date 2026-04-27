def solution(wallet, bill):
    # 지갑의 가로(큰 값) 
    ww = max(wallet)
    # 지갑의 세로(작은 값)
    wh = min(wallet)
    # 지폐의 가로 
    bw = max(bill)
    # 지폐의 세로  
    bh = min(bill)
    
    # 접기 횟수
    count = 0
    
    # 지갑의 가로 세로 길이 각각이 지폐의 가로 세로 길이보다 큰 경우 반복
    while ww < bw or wh < bh:
        # 지폐의 가로가 지갑의 가로 보다 큰 경우
        if ww < bw:
            # 접기
            nw = bw // 2
            # 접기 횟수 증가
            count += 1
            
            # 변수값 교체
            # 새 가로가 세로보다 크거나 같은 경우 
            if nw >= bh:
                bw = nw
            # 새 가로가 세로보다 작은 경우 
            else:
                bw = bh
                bh = nw
        # 지폐의 세로가 지갑의 세로보다 큰 경우 
        elif wh < bh:
            # 접기
            nw = bw // 2
            # 접기 횟수 증가 
            count += 1
            # 변수 값 교체 
            # 변수값 교체
            # 새 가로가 세로보다 크거나 같은 경우 
            if nw >= bh:
                bw = nw
            # 새 가로가 세로보다 작은 경우 
            else:
                bw = bh
                bh = nw
            
    return count
            
            