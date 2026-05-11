def solution(ingredient):
    stack = []
    count = 0
    
    for igdt in ingredient:
        
        # stack에 저장된 개수가 3개 이상인 경우에만 분기
        if len(stack) > 2:
            # 현재 재료가 1인 경우
            if igdt == 1:
                # 스택의 마지막 재료가 3인 경우
                last = stack.pop()
                if last == 3:
                    sec_last = stack.pop()
                    if sec_last == 2:
                        third_last = stack.pop()
                        if third_last == 1:
                            count += 1
                            continue
                        else:
                            stack.append(third_last)
                            stack.append(sec_last)
                            stack.append(last)
                    else:
                        stack.append(sec_last)
                        stack.append(last)
                else:
                    stack.append(last)
        
        stack.append(igdt)
        
    # print(stack)
    return count