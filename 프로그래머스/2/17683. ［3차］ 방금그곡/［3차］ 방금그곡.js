function solution(m, musicinfos) {
    // 음악정보를 map 형식으로 정리하기 
    const musicInfos = new Map();
    
    for(let i = 0; i < musicinfos.length; i++){
        const music = musicinfos[i];
        const [start, end, name, melody] = music.split(",");
        
        musicInfos.set(name, {
            "melody": melody,
            "playtime": calcPlayTime(start, end),
            "order": i
        })
    }
    
    console.log("음악맵", musicInfos);
    
    const keys = [];
    
    // 재생된 음을 문자열로 바꾸기 
    for(const music of musicInfos.entries()){
        const [name, info] = music;
        const {melody, playtime, starttime, order} = info;
        // console.log(melody, playtime, starttime);
        
        // 라디오에서 실제로 재생된 음악 문자열 
        const playedMelody = calcPlayedMelody(melody, playtime, m);
        console.log("실제 재생된 문자열", playedMelody);
        // 기억된 멜로디와 재생된 음의 포함관계 확인하기   
        // 뒤에 #이 오는 것을 제외하기 위해서는 후방탐색 추가
        // 멜로디가 #으로 끝나는 경우에는 문제가 생길 수 있음 : 잘못된 생각으로 판명됨 정리할 것 
        const regex = new RegExp(`${m}(?!#)`);
        
        const isIncluded = regex.test(playedMelody);
        if(isIncluded) keys.push(name);
    }
    
    // 정렬
    if(keys.length > 1){
        // 재생 시간이 가장 긴순서대로, 재생시간이 같다면 먼저 삽입된 정보부터 내림차순
        keys.sort((a, b) => {
            const {melody: melodyA, playtime: playtimeA, order: orderA} = musicInfos.get(a);
            const {melody: melodyB, playtime: playtimeB, order: orderB} = musicInfos.get(b);
            
            // console.log(playtimeA, playtimeB);
            // console.log(starttimeA, starttimeB);
            if(playtimeA !== playtimeB) {
                return playtimeB - playtimeA;
            } else {
                return orderA - orderB
            }
        })    
    }
    
    if(keys.length === 0) return "(None)";
    console.log(keys)
    return keys[0];
    
}

// 시작 시각, 종료 시각으로 재생 시간을 계산하는 함수
// 음이 재생되는 기간이 분이기 때문에 분 단위로 반환 
function calcPlayTime (start, end){
    const [stH, stM] = start.split(":").map(Number);
    const [etH, etM] = end.split(":").map(Number);
    
    // 시작 시각의 분이 종료 시각의 분보다 큰 경우 
    // 즉 빼기시 음수가 나오는 경우 
    const ptM = stM > etM ? etM + 60 - stM : etM - stM;
    const ptH = stM > etM ? etH - 1 - stH : etH - stH;
    
    // 분 단위로 반환
    return ptH * 60 + ptM
}

// 문자열 시간을 숫자 시간으로 변환하는 함수 
function convertStrToNum (time){
    const [hour, min] = time.split(":").map(Number);
    
    return hour * 100 + min;
}

// 실제로 재생된 음의 문자열을 계산하는 함수 
function calcPlayedMelody (melody, playtime, memory){ // 악보, 재생기간, 기억하는 멜로디 
    const newMelody = melody.match(/[A-Z]#?/g);
    const newMemory = memory.match(/[A-Z]#?/g);
    console.log(newMelody, newMemory);
    
    // 음의 길이
    const lenOfMelody = newMelody.length;
    
    // 기억하는 멜로디의 길이
    const lenOfMemory = newMemory.length;
    
    // 기억하는 멜로디의 길이가 재생시간보다 길다면 빈문자열 반환 
    // 일치여부를 찾을 때 일치하는 부분이 없다는 것을 강조하기 위해 빈문자열을 반환함 
    if(lenOfMemory > playtime) return "";
    
    
    let played = "";
    
    // 재생시간에 맞춰서 멜로디를 순서대로 반복해서 반환
    for(let i = 0; i < playtime; i++){
        played += newMelody[i % lenOfMelody]
    }
    
    return played;
}