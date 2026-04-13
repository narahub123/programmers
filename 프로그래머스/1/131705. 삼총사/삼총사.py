def solution(number):
    count = 0
    length = len(number)
    for x in range(length):
        for y in range(x+1, length):
            for z in range(y+1, length):
                if number[x]+number[y]+number[z] == 0:
                    count += 1
                    
    return count