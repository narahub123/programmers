def solution(food):
    dict = {}
    
    result = ""
    
    for i, m in enumerate(food):
        divisor = m // 2
        if(divisor != 0):
            dict[i] = str(i) * divisor
    
    for k in dict.keys():
        result += dict[k]
        
    result += '0'    
    
    for k in reversed(dict.keys()):
        result += dict[k]
    
    return result