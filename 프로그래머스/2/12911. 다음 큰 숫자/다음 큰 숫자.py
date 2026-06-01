def solution(n):
    b = format(n, 'b')
    
    length = len(b)
    
    nextBin = list("0" * length)
    hasChecked = False
    one = 0
    
    for i, bin in enumerate(b):
        if i == 0:
            continue
        elif i == 1:
            if bin == "1":
                nextBin[0] = "10"
                nextBin[1] = "1"
                hasChecked = True
            else:
                nextBin[0] = "1"
                nextBin[1] = "0"
            continue
        if bin == "1":
            if hasChecked:
                one += 1
            else:
                nextBin[i-1] = "1"
                nextBin[i] = "0"
                hasChecked = True
    
    
    for i in range(-1, -1*one - 1, -1):
        nextBin[i] = "1"
    
    fBin = "".join(nextBin)
    
    return int(fBin, 2)