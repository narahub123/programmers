function solution(x, n) {
    return Array.from({length: n}).map((_, idx) => x * (idx + 1));
}