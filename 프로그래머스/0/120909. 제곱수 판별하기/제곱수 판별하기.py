import math

def solution(n):
    
    for i in range(1, math.floor(math.sqrt(n)) + 1):
        if (n / i) == i:
            return 1
    return 2
    
        