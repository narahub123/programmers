def solution(s):
    count = 0
    
    curIndex = 0
    same = 0
    diff = 0
    for i in range(len(s)):
        if curIndex != i:
            if s[curIndex] == s[i]:
                same += 1
            else:
                diff += 1
                
            if same == diff:
                curIndex = i + 1
                count += 1
                same = 0
                diff = 0
        else:
            same += 1
    
    if same != 0 or diff != 0:
        count += 1

    return count
        
        
                