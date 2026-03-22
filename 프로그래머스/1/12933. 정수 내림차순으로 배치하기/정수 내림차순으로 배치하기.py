def solution(n):
    digits = []
    
    for c in range(len(str(n)) - 1, -1, -1):
    
        r = n // (10 ** c)
        
        n = n - r * (10 ** c) 
        
        digits.append(str(r))
    
    return int("".join(sorted(digits, reverse= True)))