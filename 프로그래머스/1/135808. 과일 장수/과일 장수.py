def solution(k, m, score):
    order = sorted(score, reverse=True)
    
    numOfBox = len(score) // m
    
    price = 0
    
    for i in range(numOfBox):
        
        price += (order[(i + 1) * m - 1] * m)
        
    return price