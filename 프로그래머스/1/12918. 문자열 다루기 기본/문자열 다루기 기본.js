function solution(s) {
   
    // 정규 표현식을 이용해 숫자만 존재하는지 확인
    const regex = /^\d{4}$|^\d{6}$/
    
    return regex.test(s);
}