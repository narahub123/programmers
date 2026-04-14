def solution(n):
    
    if n < 3:
        return n 
    
    # 3진법으로 변환 
    trinary = []
    
    while True:
        trinary.append(str(n % 3))
        
        n = n // 3
        
        if n < 3:
            trinary.append(str(n))
            break
    
    # 10진수로 변환 
    return int("".join(trinary), 3)
    