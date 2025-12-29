function solution(phone_book) {
    // 정렬 
    phone_book.sort((a, b) => a.localeCompare(b));
    
    let result = true;
    
    for(let i = 0; i < phone_book.length - 1; i++){
        if(phone_book[i+1].startsWith(phone_book[i])) {
            result = false;
            break;
        }
    }
    
    return result;
}
