const numToWord = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
}

const keys = Object.keys(numToWord);
const regex2 = new RegExp(`(${keys.join('|')})`, 'g');

function solution(s) {
    // 숫자와 문자열 분리 
    const regex1 = /[0-9]+|[a-z]+/g
    const split = s.match(regex1);
    const converted = split.map(s => {
        
        if((/[0-9]+/).test(s)) {
            return s;
        }
        else {
            const result = s.match(regex2);
            
            let nums = ''
            for(let i = 0; i < result.length; i++){
                nums += numToWord[result[i]];
            }
            
            return nums
        }
    }).join('')
    
    console.log("변경된 문자열 배열", converted);
    
    return Number(converted)
}