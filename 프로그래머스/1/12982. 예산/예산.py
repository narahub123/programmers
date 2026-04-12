def solution(d, budget):
    
    count = len(d) 
    total = sum(d)
    arr = sorted(d)
    
    while total > budget:
        
        count -= 1
        
        total -= arr.pop()
        
    return count