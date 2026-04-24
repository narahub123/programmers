def solution(answers):
    pattern0 = [1, 2, 3, 4, 5]
    pattern1 = [2, 1, 2, 3, 2, 4, 2, 5]
    pattern2 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    points = [0, 0, 0]
    
    for i in range(len(answers)):
        if pattern0[i % 5] == answers[i]:
            points[0] += 1
        
        if pattern1[i % 8] == answers[i]:
            points[1] += 1
            
        if pattern2[i % 10] == answers[i]:
            points[2] += 1
    
    highest = max(points)
    
    return [i + 1 for i in range(3) if points[i] == highest]
    
    
    