import math

def solution(number, limit, power):
    total = 0
    
    for num in range(1, number +1):
        curPow = countDivisors(num)
        
        if curPow > limit:
            total += power
        else:
            total += curPow
    
    return total
        
def countDivisors (number):
        if number == 1:
            return 1
        
        counts = 0
        for i in range(1, math.isqrt(number) + 1):
            if number % i == 0:
                if number // i == i:
                    counts += 1
                else:
                    counts += 2
        return counts