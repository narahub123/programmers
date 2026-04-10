def solution(n, m):
    g = 1

    for i in range(2, min(n, m) + 1):
        if (n % i == 0) and (m % i ==0):
            g = i 
    
    return [g, n * m /g]
