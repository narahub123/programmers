function solution(numbers) {
    const strs = numbers.map(number => number.toString());
    
    // 정렬 
    const reverse = strs.sort((a, b) => (b+a).localeCompare(a+b));

    const answer = reverse.join("");
    return answer[0] === "0" ? "0" : answer;
}