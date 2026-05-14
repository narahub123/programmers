import re

def solution(new_id):
    
    newId = new_id
    
    # 소문자 치환
    newId = newId.lower()
    # print("소문자로 치환", newId)
    
    # 사용 문자 제외 다른 문자 제거 
    regex = r'[^a-z0-9\_\-\.]'
    newId = re.sub(regex, "", newId)
    # print("불필요한 문자열 치환", newId)
    
    # 연속된 마침표를 마침표 하나로 치환 
    dot_regex = r'\.{2,}'
    newId = re.sub(dot_regex, ".", newId)
    # print('연속된 마침표 제거', newId)
    
    # 시작과 끝의 마침표 제거
    if newId.startswith('.'):
        newId = newId[1:]
    elif newId.endswith("."):
        newId = newId[:-1]
    # print("처음과 끝의 마침표 제거", newId)
    
    # 빈문자열인 경우 a 추가 
    if len(newId) == 0:
        newId = "aaa"
    # print("빈문자열", newId)
    
    # 첫 15문자열만 사용 
    newId = newId[:15]
    print("첫 15문자만 사용", newId)
    if newId.endswith("."):
        newId = newId[:-1]
    # print("마지막 마침표 제거", newId)
    
    # 길이가 2자 이하인 경우 마지막 문자 반복
    while(len(newId) < 3):
        newId += newId[-1]
    # print("마지막 문자열 반복", newId)
        
    return newId
    
    