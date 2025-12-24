function solution(str1, str2) {
    const str1Lower = str1.toLowerCase();
    const str2Lower = str2.toLowerCase();
    
    // 두 글자 다중 집합 만들기 
    const mulStr1 = [];
    const mulStr2 = [];
    
    const regex = /^[a-z]*$/;
    
    for(let i = 0; i < str1Lower.length - 1; i++){
        const cut = str1Lower.slice(i, i + 2);
        
        // 영문자열로만 이루어진 문자열인지 확인
        if(!regex.test(cut)) continue;
        
        
        mulStr1.push(cut);
    }
    for(let i = 0; i < str2Lower.length - 1; i++){
        const cut = str2Lower.slice(i, i + 2);
        
        // 영문자열로만 이루어진 문자열인지 확인
        if(!regex.test(cut)) continue;
        
        mulStr2.push(cut);
    }
    
    // 교집합, 합집합 구하기 
    const intersaction = [];
    const union = [...mulStr1];
    const newStr1 = [...mulStr1];
    
    for(let i = 0; i < mulStr2.length; i++){
        const elem = mulStr2[i];
        
        // 두글자 다중 집합에 포함된 문자열인 경우
        const index = newStr1.findIndex(el => el === elem);
        
        if(index !== -1){ // 교집합
            intersaction.push(elem);
            newStr1.splice(index, 1);
        } else {
            union.push(elem);
        }
    }
    
    // console.log("교집합", intersaction);
    // console.log("합집합", union);
    
    if(union.length === 0) return 65536;
    
    const zakad = Math.floor(intersaction.length / union.length * 65536);
    // console.log("자카드 유사성", zakad);
    
    return zakad;
}