import math

def solution(left, right):
    
    sum = 0
    
    for num in range(left, right + 1):
        
        if((numOfDivisors(num) % 2) == 0):
            sum += num
        else:
            sum -= num
        
    return sum
    
def numOfDivisors(num):
        count = 0
        
        sqrt = math.isqrt(num)
        
        for i in range(1, sqrt + 1):
            
            if(num % i) == 0:
                if((num // i) != sqrt):
                    count += 2
                else:
                    count += 1
                    
        return count