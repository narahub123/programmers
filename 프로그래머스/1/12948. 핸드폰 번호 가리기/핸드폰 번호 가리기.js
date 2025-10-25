function solution(phone_number) {
    console.log("핸드폰 번호", phone_number);
    console.log("번호 길이", phone_number.length);
    
    const replaced = phone_number.slice(0, phone_number.length -4).replace(/./g, '*');
    const keep = phone_number.slice(phone_number.length - 4);

    return replaced + keep
}
    