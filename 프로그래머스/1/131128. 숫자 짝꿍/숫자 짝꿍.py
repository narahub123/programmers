def solution(X, Y):
    x_dict = {}
    y_dict = {}
    
    for x in str(X):
        if x_dict.get(x):
            x_dict[x] += 1
        else:
            x_dict[x] = 1
    for y in str(Y):
        if y_dict.get(y):
            y_dict[y] += 1
        else:
            y_dict[y] = 1
            
    
    common = []
    
    [less_list, larger_list] = [x_dict, y_dict] if len(x_dict) < len(y_dict) else [y_dict, x_dict]
    
    for key in less_list.keys():
        if larger_list.get(key):
            for i in range(min(less_list[key], larger_list[key])):
                common.append(key)
    
    if len(common) == 0:
        return "-1"
    
    if any(c != '0' for c in common):
        return "".join(sorted(common, reverse=True))
    else:
        return "0"