def solution(arr):
    sum = 0
    
    for n in arr:
        sum += n
        
    return sum / len(arr)