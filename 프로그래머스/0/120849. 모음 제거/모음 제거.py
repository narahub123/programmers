def solution(my_string):
    
    for v in ['a', 'e', 'i', 'o', 'u']:
        my_string = my_string.replace(v, "")
    
    return my_string