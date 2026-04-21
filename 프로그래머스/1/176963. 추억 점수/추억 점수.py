def solution(name, yearning, photo):
    dict = {n: y for n, y in zip(name, yearning)}
    
    return [sum(dict.get(p, 0) for p in ph) for ph in photo]
        
            
        
    
    