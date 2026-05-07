def solution(board, h, w):
    # 위치 
    directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    
    count = 0
    
    color = board[h][w]
    
    height = len(board)
    width = len(board[0])
    
    for dh, dw in directions:
        print(dh, dw)
        h_check = h + dh 
        w_check = w + dw
        
        if h_check < 0 or h_check > height - 1 or w_check < 0 or w_check > width - 1:
            continue
        
        if board[h_check][w_check] == color:
            count += 1
    
    return count