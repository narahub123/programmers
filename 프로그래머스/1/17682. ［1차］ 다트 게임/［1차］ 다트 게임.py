def solution(dartResult):
    print(dartResult)
    
    points =[0, 0, 0]
    
    curIdx = 0
    for i in range(len(dartResult)):
        curChar = dartResult[i]
        print("현재 문자", curChar)
        if curChar.isdecimal():
            if i > 0 and not dartResult[i-1].isdecimal():
                curIdx += 1
            
            points[curIdx] = points[curIdx] * 10 + int(curChar)
        else:
            if curChar == "S":
                points[curIdx] = points[curIdx] ** 1
            elif curChar == "D":
                points[curIdx] = points[curIdx] ** 2
            elif curChar == "T":
                points[curIdx] = points[curIdx] ** 3
            elif curChar == "*":
                if curIdx > 0:
                    points[curIdx - 1] = points[curIdx -1] * 2
                points[curIdx] = points[curIdx] * 2
            elif curChar == "#":
                points[curIdx] = points[curIdx] * -1
    return sum(points)