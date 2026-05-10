def solution(lottos, win_nums):
    
    prize = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
    }
    
    
    lottos_set = set(lottos)
    win_nums_set = set(win_nums)
    
    num_of_zero = lottos.count(0)
    
    intersection = len(lottos_set & win_nums_set)
    
    def getPrize (num):
        return prize.get(num) if prize.get(num) else 6
    
    return [getPrize(intersection + num_of_zero), getPrize(intersection)]

    
    
    
