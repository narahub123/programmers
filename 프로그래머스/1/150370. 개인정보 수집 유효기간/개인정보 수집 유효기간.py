from datetime import datetime
from dateutil.relativedelta import relativedelta


def solution(today, terms, privacies):
    current_date = convertStrToDate(today)
    
    terms_dict = {}
    
    for term in terms:
        [sort, duration] = term.split()
        terms_dict[sort] = duration
    
    result = []
    
    for num, privacy in enumerate(privacies):
        [start_date, sort] = privacy.split()
        
        # 종료 날짜 계산하기
        end_date = convertStrToDate(start_date) + relativedelta(months=int(terms_dict[sort]), days= -1)
        
        if end_date < current_date:
            result.append(num + 1)
    
    return result

def convertStrToDate (target_date):
    [year, month, date] = list(map(int, target_date.split(".")))
    
    return datetime(year, month, date)