def solution(friends, gifts):
    print("친구", friends)
    print("선물", gifts)
     
    
    friends_dict = {} 
    for friend in friends:
        friends_dict[friend] = {}
        for f in friends:
            if friend == f:
                friends_dict[friend]['index'] = 0
            else:
                friends_dict[friend][f] = 0
    
    print(friends_dict)
    
    for gift in gifts:
        [giver, receiver] = gift.split()
        friends_dict[giver][receiver] += 1
        friends_dict[receiver][giver] -= 1
        
        friends_dict[giver]["index"] += 1
        friends_dict[receiver]["index"] -= 1
        
        
    print(friends_dict)
    max_gifts = 0
    
    for p, d in friends_dict.items():
        index = d['index']
        gift = 0
        for friend in friends:
            if friend != p:
                n = d[friend]
                if n > 0:
                    gift += 1
                elif n == 0:
                    if index > friends_dict[friend]['index']:
                        gift += 1 
                
        if gift > max_gifts:
            max_gifts = gift
    
    return max_gifts