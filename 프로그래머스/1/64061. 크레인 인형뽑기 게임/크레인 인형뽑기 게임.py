def solution(board, moves):
    
    stack = []
    
    disappered = 0
    
    for move in moves:
        col = move - 1
        
        for idx, row in enumerate(board):
            # 칸의 값이 0이 아닌 경우 
            if row[col] != 0:
                # 스택의 마지막 값이 칸과 같은 경우 
                if len(stack) > 0 and stack[len(stack) - 1] == row[col]:
                    # 스택의 마지막 원소 삭제
                    stack.pop()
                    disappered += 2
                else:
                    # 해당 칸의 값을 stack에 추가함 
                    stack.append(row[col])
                
                # 해당 칸의 값을 0으로 변경 
                board[idx][col] = 0
                
                # 이후 칸은 col의 값은 더 이상 확인하지 않음 
                break
                
    return disappered
            