function solution(order) {
    const stack = [];
    let count = 0;
    let idx = 0;             

    for (let box = 1; box <= order.length; box++) {
        stack.push(box);

        while (stack.length && stack.at(-1) === order[idx]) {
            stack.pop();
            idx++;
            count++;
        }
    }

    return count;
}
