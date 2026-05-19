def solution(id_list, report, k):
    report_dict = {id: set() for id in id_list}
    reported_dict = {id: 0 for id in id_list}
    
    for r in report:
        [report_id, reported_id] = r.split()
        
        # 신고 여부
        has_reported = reported_id in report_dict[report_id]
        if has_reported == False:
            report_dict[report_id].add(reported_id)
            reported_dict[reported_id] += 1
    
    
    result = []
    for id in id_list:
        count = 0
        for reported_id in report_dict[id]:
            if reported_dict[reported_id] >= k:
                count += 1
        result.append(count)
        
    return result