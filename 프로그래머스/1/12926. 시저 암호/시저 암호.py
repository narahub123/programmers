def solution(s, n):
    answer = ""
    for char in s:
        ascii = ord(char)
        move = ascii + n
        
        if 65 <= ascii and ascii <= 90:
            if move > 90:
                answer += chr(move - 90 + 65 - 1)
            else:
                answer += chr(move)
        elif 97 <= ascii and ascii <= 122:
            if move > 122:
                answer += chr(move - 122 + 97 - 1)
            else:
                answer += chr(move)
        else:
            answer += char
            
    return answer
            