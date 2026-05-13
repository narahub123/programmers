def solution(survey, choices):
    metric_dict = {
        'RT': 0,
        'CF': 0, 
        'JM': 0,
        'AN': 0
    }
    
    point_dict = {
        1: 3, 
        2: 2,
        3: 1,
        4: 0,
        5: -1,
        6: -2,
        7: -3
    }
    
    for s, c in zip(survey, choices):
        [l, r] = s
        
        dir = 1 if metric_dict.get(s) is not None else -1
        
        metric = s if dir == 1 else r + l
        
        metric_dict[metric] += (point_dict[c] * dir)
    
    result = ""
    
    for m, p in metric_dict.items():
        [l, r] = m
        
        if p >= 0:
            result += l
        else:
            result += r
            
    return result