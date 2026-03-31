def solution(arr, divisor):
    arr = [elem for elem in arr if elem % divisor == 0]
    
    return [-1] if len(arr) == 0 else sorted(arr, reverse=False)