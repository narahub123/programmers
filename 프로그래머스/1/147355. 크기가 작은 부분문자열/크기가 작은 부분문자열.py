def solution(t, p):
    count = 0
    
    length = len(p)
    print(length)
    
    for n in range(len(t) - length + 1):
        sub = t[n:n+length]
        print(sub)
        if sub <= p:
            count += 1
        else:
            continue
            
    print(count)
    
    return count