def solution(n):
    b = format(n, 'b')
    one = 0
    
    for d in b:
        if d == "1":
            one += 1
            
    print("1의 개수", one)
    
    next = n + 1
    while True:
        newB = format(next, 'b')
        
        newOne = 0
        
        for d in newB:
            if d == "1":
                newOne += 1
                
        if newOne == one:
            break
        next += 1
    
    return next