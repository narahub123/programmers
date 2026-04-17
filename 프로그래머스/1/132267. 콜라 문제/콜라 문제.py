def solution(a, b, n):
    # 빈 병 총 개수
    count = 0
    # 현재 빈 병의 개수
    cur_bottles = n
    
    # 현재 빈 병의 개수가 a보다 크거나 같은 경우에만 반복
    while cur_bottles >= a:
        # 빈 병을 제출하고 반환 받는 병의 개수
        gets = (cur_bottles // a) * b
        
        # 총 빈 병의 개수에 반환 받는 병의 개수 추가 
        count += gets
        
        # 현재 빈 병의 개수를 돌려 받은 빈 병의 개수와 남은 빈 병의 개수의 합으로 변경 
        cur_bottles = (gets + (cur_bottles % a))
        
        
        
    return count