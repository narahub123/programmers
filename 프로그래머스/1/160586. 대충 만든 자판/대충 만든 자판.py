def solution(keymap, targets):
    key_dict = {}
    
    for key in keymap:
        for i, k in enumerate(key):
            if key_dict.get(k):
                if key_dict.get(k) > i + 1:
                    key_dict[k] = i + 1 
            else:
                key_dict[k] = i + 1
    
    result = []
    
    for target in targets:
        count = 0
        for char in target:
            index = key_dict.get(char)
            if index == None:
                count = -1
                break
            else:
                count += index
                
        result.append(count)
    
    return result