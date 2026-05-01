import math

def solution(nums):
    length = len(nums)
    count = 0
    for i in range(length -2):
        for j in range(i+1, length - 1):
            for k in range(j+1, length):
                if isPrime(nums[i]+nums[j]+nums[k]):
                    count += 1
    return count

def isPrime(num):
    for n in range(2, math.isqrt(num) + 1):
        
        if num % n == 0:
            return False
        
    return True