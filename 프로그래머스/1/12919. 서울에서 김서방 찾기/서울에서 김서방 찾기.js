function solution(seoul) {
    console.log("seoul", seoul);
    const index = seoul.findIndex(s => s === "Kim");
    console.log("Kim의 위치", index);
    
    return `김서방은 ${index}에 있다`
}