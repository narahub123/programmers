function solution(word) {
    const vowls = ["A", "E", "I", "O", "U"];
    
    // 문자열 분해하기 
    const splited = word.split("").map(c => vowls.findIndex(v => v === c) + 1);
    
    const position = (splited) => {
        const first = splited[0] + (splited[0] - 1) * 780;
        const second = splited[1] ? splited[1] + (splited[1] - 1) * 155 : 0;
        const third = splited[2] ? splited[2] + (splited[2] - 1) * 30: 0;
        const fourth = splited[3] ? splited[3] + (splited[3] -1) * 5 : 0;
        const fifth = splited[4] ? splited[4] : 0;
        const total = first + second + third + fourth + fifth;
        return total;
    }
    
    return position(splited)
}