function solution(N, road, K) {
    // 그래프 생성 (인접 리스트)
    const graph = new Map();
    for (const [from, to, time] of road) {
        if (!graph.has(from)) graph.set(from, []);
        if (!graph.has(to)) graph.set(to, []);
        graph.get(from).push([to, time]);
        graph.get(to).push([from, time]); // 무방향
    }

    // 마을별 최소 이동 시간
    const minTime = Array(N + 1).fill(Infinity);
    minTime[1] = 0; // 시작 마을

    // 배달 가능한 마을
    const deliverable = new Set();

    function dfs(current, time) {
        if (time > K) return;          // 시간 초과 시 가지치기
        deliverable.add(current);      // 배달 가능 마을 추가

        for (const [next, t] of graph.get(current)) {
            const newTime = time + t;
            // 이미 더 빨리 도달한 마을이면 탐색하지 않음
            if (newTime < minTime[next]) {
                minTime[next] = newTime;
                dfs(next, newTime);
            }
        }
    }

    dfs(1, 0);
    return deliverable.size;
}
