

function solution(s, skip, index) {
    
    const aToz = 'abcdefghijklmnopqrstuvwxyz';
    
    const regex = new RegExp(skip.split('').join('|'), 'g');
    
    const glance = aToz.replace(regex, '');
    
    const converted = [...s].map(str => {
        const pos = glance.indexOf(str);
        
        const moved = pos + index > glance.length - 1 ? (pos + index) % glance.length : pos + index ;
        
        return glance[moved]
    }).join('');
    
    return converted;
}
