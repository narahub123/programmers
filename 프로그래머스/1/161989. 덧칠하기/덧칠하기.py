import math

def solution(n, m, section):
    sectEnd = 0
    count = 0
    
    for s in section:
        if s > sectEnd:
            sectEnd = s + m - 1
            count += 1
            
    return count
            