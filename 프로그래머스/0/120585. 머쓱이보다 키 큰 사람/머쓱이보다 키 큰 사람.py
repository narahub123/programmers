def solution(array, height):
    count = 0
    num = len(array)
    
    for p in array:
        if p > height: 
            count+=1
    
    return count