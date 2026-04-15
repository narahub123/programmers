def solution(sizes):
    
    for size in sizes:
        size.sort()
    
    answer = 1
    for z in zip(*sizes):
        answer *= max(z)
        
    return answer
        
    
    