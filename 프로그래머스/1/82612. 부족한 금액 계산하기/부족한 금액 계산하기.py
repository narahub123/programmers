def solution(price, money, count):
    totalPrice = count * (count + 1) // 2 * price
    
    lack = totalPrice - money 
    
    return lack if lack > 0 else 0