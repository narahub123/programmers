function solution(park, routes) {
    const startPos = [0, 0]; // 세로(row), 가로(col)
    const endPos = [park.length - 1, park[0].length - 1]; // 세로, 가로

    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[i].length; j++) {
            if (park[i][j] === "S") {
                startPos[0] = i;
                startPos[1] = j;
            }
        }
    }

    for (let i = 0; i < routes.length; i++) {
        // 파싱을 더 명확히
        const [op, s] = routes[i].split(' ');
        const n = Number(s);

        if (op === "E") {
            const x = startPos[1] + n;
            if (x > endPos[1]) continue;
            if (park[startPos[0]].slice(startPos[1] + 1, x + 1).includes("X")) continue;
            startPos[1] = x;
        } else if (op === "W") {
            const x = startPos[1] - n;
            if (x < 0) continue;
            if (park[startPos[0]].slice(x, startPos[1]).includes("X")) continue;
            startPos[1] = x;
        } else if (op === "N") {
            const y = startPos[0] - n;
            if (y < 0) continue;
            // 수정된 부분: y 부터 출발 바로 위(startPos[0]-1)까지 검사(출발 칸 제외, 목적지 포함)
            const columns = [];
            for (let k = y; k <= startPos[0] - 1; k++) {
                columns.push(park[k][startPos[1]]);
            }
            if (columns.includes("X")) continue;
            startPos[0] = y;
        } else if (op === "S") {
            const y = startPos[0] + n;
            if (y > endPos[0]) continue;
            const columns = [];
            for (let k = startPos[0] + 1; k <= y; k++) {
                columns.push(park[k][startPos[1]]);
            }
            if (columns.includes("X")) continue;
            startPos[0] = y;
        }
    }

    return startPos;
}
