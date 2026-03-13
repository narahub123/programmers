import re

def solution(my_string):
    return sum(int(s.group()) for s in re.finditer(r"\d", my_string))
        
        
        
        
        
        