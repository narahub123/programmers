def solution(participant, completion):
    part = {}
    for p in participant:
        existing = part.get(p)
        if existing:
            part[p] = existing + 1
        else:
            part[p] = 1
    
    for c in completion:
        part[c] -= 1
        
        if part[c] == 0:
            del part[c]
        
    return list(part.keys())[0]
    
    
        