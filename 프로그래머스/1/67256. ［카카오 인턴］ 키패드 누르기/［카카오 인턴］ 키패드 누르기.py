def solution(numbers, hand):
    print("숫자 열", numbers)
    print("손 잡이", hand)
    
    keypad_dict = {
        1:(1, 1),
        2: (1, 2),
        3: (1, 3),
        4:(2, 1),
        5: (2, 2),
        6: (2, 3),
        7:(3, 1),
        8: (3, 2),
        9: (3, 3),
        "*":(4, 1),
        0: (4, 2),
        "#": (4, 3),
    }
    
    l_keys = {1, 4, 7}
    r_keys = {3, 6, 9}
    
    cur_l = '*'
    cur_r = "#"
    
    result = ""
    
    for num in numbers:
        if num in l_keys:
            result += "L"
            cur_l = num
        elif num in r_keys:
            result += "R"
            cur_r = num
        else:
            [nh, nw] = keypad_dict[num]
            [lh, lw] = keypad_dict[cur_l]
            [rh, rw] = keypad_dict[cur_r]
            l_dist = abs(nh - lh) + abs(nw - lw)
            r_dist = abs(nh - rh) + abs(nw - rw)
            
            if l_dist < r_dist:
                result += "L"
                cur_l = num
            elif l_dist > r_dist:
                result += "R"
                cur_r = num
            else:
                if hand == "left":
                    result += "L"
                    cur_l = num
                else:
                    result += "R"
                    cur_r = num
            
    return result