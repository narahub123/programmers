def solution(s1, s2):
    count = 0
    
    for num in s1:
        if num in s2:
            count += 1
    return count