def solution(arr1, arr2):
    result = []
        
    for x, y in zip(arr1, arr2):        
        
        result.append([a + b for a, b in zip(x, y)])
            
    return result