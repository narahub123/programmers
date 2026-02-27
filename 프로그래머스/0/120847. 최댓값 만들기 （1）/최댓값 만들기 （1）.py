def solution(numbers):
    newList = sorted(numbers)
    newList.reverse()
    
    return newList[0] * newList[1]