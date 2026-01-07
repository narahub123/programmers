function solution(m, n, board) {
    // 문자열 배열을 2차원 배열로 변환
    board = board.map(row => row.split(''));
    
    let count = 0;

    while (true) {
        const set = new Set();

        // 1️⃣ 2x2 블록 찾기
        for (let r = 0; r < m - 1; r++) {
            for (let c = 0; c < n - 1; c++) {
                const block = board[r][c];
                if (
                    block !== " " &&
                    block === board[r][c + 1] &&
                    block === board[r + 1][c] &&
                    block === board[r + 1][c + 1]
                ) {
                    set.add(`${r}-${c}`);
                    set.add(`${r}-${c+1}`);
                    set.add(`${r+1}-${c}`);
                    set.add(`${r+1}-${c+1}`);
                }
            }
        }

        // 2️⃣ 지울 블록이 없으면 종료
        if (set.size === 0) break;

        // 3️⃣ 삭제 처리
        for (let pos of set) {
            const [r, c] = pos.split('-').map(Number);
            board[r][c] = " ";
        }

        count += set.size;

        // 4️⃣ 중력 적용 (열 단위)
        for (let c = 0; c < n; c++) {
            let empty = m - 1; // 아래쪽에서부터 채움
            for (let r = m - 1; r >= 0; r--) {
                if (board[r][c] !== " ") {
                    // 블록을 empty 위치로 이동
                    [board[empty][c], board[r][c]] = [board[r][c], board[empty][c]];
                    empty--;
                }
            }
            // 나머지는 자동으로 " "로 남음
        }
    }

    return count;
}
