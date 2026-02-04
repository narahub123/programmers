function solution(board) {

    let max = 0;

    for(let r = 0; r < board.length; r++){
        for(let c = 0; c < board[0].length; c++){

            if(board[r][c] === 1 && r > 0 && c > 0){

                board[r][c] =
                    Math.min(
                        board[r-1][c],
                        board[r][c-1],
                        board[r-1][c-1]
                    ) + 1;
            }

            max = Math.max(max, board[r][c]);
        }
    }

    return max * max;
}
