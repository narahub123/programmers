def solution(my_string, letter):
    result = ''
    
    result += ''.join(i for i in my_string if i != letter)
    
    return result