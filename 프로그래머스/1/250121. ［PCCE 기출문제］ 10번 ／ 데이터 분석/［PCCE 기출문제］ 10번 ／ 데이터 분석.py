def solution(data, ext, val_ext, sort_by):
    # ext의 해시맵
    key_dict = {
        'code': 0,
        'date': 1,
        'maximum': 2,
        'remain': 3
    }
    
    # 필터링 
    result = [row for row in data if row[key_dict[ext]] < val_ext]
    
    #정렬 
    result.sort(key=lambda x: (x[key_dict[sort_by]]))
    
    return result
    
    