import re

def solution(s):
    return re.sub(r'\b\w+\b', lambda x: x.group().capitalize(), s)
    
        