function solution(bandage, health, attacks) {
    
    let cont = 0;
    let stamina = health; 
    
    const last = attacks[attacks.length - 1][0];
    
    const map = new Map(attacks);
    
    for(let i = 0; i <= last; i++){
        if(map.get(i)){
            cont = 0;
            stamina -= map.get(i);
            
            if(stamina <= 0) return -1;
        } else {
            ++cont;
            if(stamina + bandage[1] >= health){
                stamina = health;
            } else {
                stamina += bandage[1];    
            }
            
            if(cont >= bandage[0]){
                if(stamina + bandage[2] >= health){
                    stamina = health;
                } else {
                    stamina += bandage[2];    
                }
                
                cont = 0;
            }
        }
    }
    
    return stamina
}