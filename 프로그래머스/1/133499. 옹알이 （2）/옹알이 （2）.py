import re

def solution(babbling):
    prounce = ['aya', 'ye', 'woo', 'ma']
    p_pipe = "|".join(prounce)
    
    regex = rf"^(?!.*({p_pipe})(?=\1))(?:{p_pipe})+$"
    
    return sum(1 for b in babbling if re.match(regex, b))
        