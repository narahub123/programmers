import math

def solution(n):
    count = 0
    
    for a in range(math.floor(n**(1/2))):
        if n % (a+1) == 0:
            
            if n / (a + 1) == a+1:
                count += 1
            else:
                count += 2
            
            
    return count