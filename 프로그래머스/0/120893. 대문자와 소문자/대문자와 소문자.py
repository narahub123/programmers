def solution(my_string):
    result = []
    for s in my_string:
        # 대문자 여부 확인 
        if s.isupper():
            # 소문자로 변환해서 배열에 추가 
            result.append(s.lower())
        # 소문자인 경우
        else:
            # 대문자로 변환해서 배열에 추가 
            result.append(s.upper())
    return "".join(result)