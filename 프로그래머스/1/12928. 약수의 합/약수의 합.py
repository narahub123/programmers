import math

def solution(n):
    remainders = []
    for r in range(1, math.floor(math.sqrt(n)) + 1):
        if(n % r) == 0:
            if(n // r) != r:
                remainders.append(r)
                remainders.append(n // r)
            else:
                remainders.append(r)
        
    return sum(remainders)