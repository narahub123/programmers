def solution(sides):
    sort = sorted(sides)
    
    return 1 if sort[2] < sort[0] + sort[1] else 2