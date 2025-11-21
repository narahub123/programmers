function solution(survey, choices) {
    console.log("지표", survey);
    console.log("선택지", choices);
    
    const data = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0,
    }
    
    const points = [ 3, 2, 1, 0, 1, 2, 3 ];
    
    if(survey.length !== choices.length){
        return "RCJA";
    }
    
    for(let i = 0; i < survey.length; i++){
        const [first, second] = survey[i].split('');
        
        const pick = choices[i] - 1;
        
        if(0 <= pick && pick <= 2){
            data[first] += points[pick];
        }
        if(4 <= pick && pick <= 6){
            data[second] += points[pick];
        }
    }
    
    let test = "";
    
    if(data['R'] >= data['T']){
        test += "R"
    } else {
        test += 'T'
    }
    if(data['C'] >= data['F']){
        test += "C"
    } else {
        test += 'F'
    }
    if(data['J'] >= data['M']){
        test += "J"
    } else {
        test += 'M'
    }
    if(data['A'] >= data['N']){
        test += "A"
    } else {
        test += 'N'
    }
    
    
    return test;
}