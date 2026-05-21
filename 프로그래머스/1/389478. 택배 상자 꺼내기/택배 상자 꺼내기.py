def solution(n, w, num):
    print("상자의 총 개수", n)
    print("한 줄의 상자의 개수", w)
    print("꺼내려는 상자 번호", num)
    
    box_pos = []
    
    box_col_dict = {}
    
    # 상자의 위치 
    for i in range(n):
        # 줄의 위치 
        row = i // w
        
        col = i % w if row % 2 == 0 else w - i % w - 1
        
        if box_col_dict.get(col):
            box_col_dict[col].append(i)
        else:
            box_col_dict[col] = [i]
        if i == num - 1:
            box_pos = [col, row]
    
    return len(box_col_dict[box_pos[0]]) - (box_pos[1])