def solution(s, skip, index):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    result = []
    
    for char in s:
        # 알파벳에서의 위치 
        curIdx = alphabet.index(char)
        
        # 이동횟수
        count = 0
        
        while(count < index):
            
            curIdx += 1
            
            if alphabet[curIdx % 26] not in skip:
                count += 1
                
        result.append(alphabet[curIdx % 26])
        
    return "".join(result)
    