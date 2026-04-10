def solution(arr):
    return [arr[i] for i in range(len(arr)) if i == 0 or arr[i-1] != arr[i]]