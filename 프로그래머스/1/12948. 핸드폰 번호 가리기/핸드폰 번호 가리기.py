def solution(phone_number):
    
    return "".join("*" for num in range(len(phone_number) - 4)) + phone_number[-4:]