def solution(s):
    newS = list(s)
    
    curIndex = 0
    
    for i in range(len(s)):
        # 현재 문자열이 빈 문자열인 경우 curIndex 초기화 
        if newS[i] == " ":
            curIndex = 0
        else:
        # 현재 문자열이 문자인 경우 
            # curIndex 이 짝수인 경우 
            if (curIndex %  2) == 0:
                newS[i] = newS[i].upper()
            else:
                newS[i] = newS[i].lower()
            curIndex += 1
    
    return "".join(newS)