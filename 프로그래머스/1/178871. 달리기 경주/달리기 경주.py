def solution(players, callings):
    result = players
    
    players_dict = {p: i for i, p in enumerate(players)}
    
    for calling in callings:
        cur_rank = players_dict[calling]
        prev_rank = cur_rank - 1
        prev_player = result[prev_rank]
        result[prev_rank] = calling
        result[cur_rank] = prev_player
        
        players_dict[calling] = prev_rank
        players_dict[prev_player] = cur_rank
    
    return result