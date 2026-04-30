import math

def isPrime (n):
    if n == 2:
        return True
    for i in range(2, math.isqrt(n) + 1):
        if n % i == 0:
            return False
    return True

def solution(n):
    
    return sum(1 for i in range(2, n + 1) if isPrime(i))
        

