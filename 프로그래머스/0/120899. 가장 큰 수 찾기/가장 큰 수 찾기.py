def solution(array):
    maxNum = max(array)
    return [maxNum, array.index(maxNum)]