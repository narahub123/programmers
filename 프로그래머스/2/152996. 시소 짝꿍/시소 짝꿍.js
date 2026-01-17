function solution(weights) {
    const map = new Map();
    let answer = 0;

    for (const w of weights) {
        map.set(w, (map.get(w) || 0) + 1);
    }

    // 1 : 1
    for (const [w, cnt] of map) {
        if (cnt >= 2) {
            answer += cnt * (cnt - 1) / 2;
        }
    }

    // 나머지 비율
    const ratios = [2, 3/2, 4/3];

    for (const [w, cnt] of map) {
        for (const r of ratios) {
            const target = w * r;
            if (map.has(target) && w < target) {
                answer += cnt * map.get(target);
            }
        }
    }

    return answer;
}
