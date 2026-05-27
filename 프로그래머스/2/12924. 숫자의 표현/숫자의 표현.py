def solution(n):
    count = 1
    
    i = 1
    prefix = 0
    while True:
        prefix += i
        if (n - prefix) / (i+1) < 1:
            break
        if (n-prefix) % (i+1) == 0:
            count += 1
        
        i += 1
    
    
    return count