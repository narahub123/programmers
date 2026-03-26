def solution(s):
    numOfp = 0
    numOfy = 0 
    
    for char in s:
        if char == 'p' or char == "P":
            numOfp += 1
        elif char == 'y' or char == "Y":
            numOfy += 1
            
    return numOfp == numOfy