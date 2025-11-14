const prouns = ['aya', 'ye', 'woo', 'ma'];

function solution(babbling) {
  console.log(babbling);
    
    const filtered = babbling.filter(b => {
        if(/^(?:aya|ye|woo|ma)+$/.test(b)){
            
            if(!(/ayaaya|yeye|woowoo|mama/).test(b)){
                return true;    
            } else {
                return false
            }
        } else {
            return false;
        }
    })
    
    console.log(filtered.length)
    
    return filtered.length;
}
