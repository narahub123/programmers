function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;

    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const dist = Array.from({ length: rows }, () => Array(cols).fill(0));

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const queueX = [0];
    const queueY = [0];
    let head = 0;

    visited[0][0] = true;
    dist[0][0] = 1;

    while (head < queueX.length) {
        const x = queueX[head];
        const y = queueY[head++];

        if (x === rows - 1 && y === cols - 1) {
            return dist[x][y];
        }

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (
                nx >= 0 && ny >= 0 &&
                nx < rows && ny < cols &&
                !visited[nx][ny] &&
                maps[nx][ny] === 1
            ) {
                visited[nx][ny] = true;
                dist[nx][ny] = dist[x][y] + 1;
                queueX.push(nx);
                queueY.push(ny);
            }
        }
    }

    return -1;
}
