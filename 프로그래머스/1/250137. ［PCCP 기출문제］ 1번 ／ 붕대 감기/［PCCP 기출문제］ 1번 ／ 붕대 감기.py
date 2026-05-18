def solution(bandage, health, attacks):
    [duration, recovery, extra_recovery] = bandage
    # print("시전 시간", duration, "초당 회복량", recovery,"추가 회복량", extra_recovery)
    
    stamina = health
    # print("체력", stamina)
    
    skill_start = 0
    
    for attack in attacks:
        [attack_time, damage] = attack
        # print("공격 시간", attack_time, "피해량", damage)
        
        # 체력 충전 계산 
        # 시킬 시전 시간 : 스킬 시전 시간이 duration보다 길다면 초기화 후 다시 시작해야 함 
        skill_count = (attack_time - skill_start - 1) // duration
        print("스킬 시전 횟수", skill_count)
        
        skill_duration = min((attack_time - skill_start - 1) % duration, duration)
        # print("시킬 시전 시간", skill_duration)
        
        # 회복된 체력
        recovered_stamina = skill_count * (duration * recovery + extra_recovery) + (attack_time - skill_start - 1) % duration * recovery
        print("회복된 체력", recovered_stamina)
        # 체력 회복
        stamina = min(stamina + recovered_stamina, health)
        
        # 스킬 시작 시간 갱신
        skill_start = attack_time
        
        # print("체력", stamina, "피해량", damage)
        
        # 피해량 계산 
        cur_stamina = stamina - damage
        # print("현재 체력", cur_stamina)
        if cur_stamina <= 0:
            return -1
        stamina = cur_stamina
    
    return stamina
            
        
        
        