function solution(scoville, K) {
    const pq = new MinHeap();
    let count = 0;

    scoville.forEach(v => pq.push(v));

    while(pq.peek() < K) {
        if(pq.size() < 2) return -1; // 섞을 수 없으면 -1

        const a = pq.pop();
        const b = pq.pop();
        pq.push(a + 2 * b);
        count++;
    }

    return count;
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(value) {
        this.heap.push(value);
        this._bubbleUp(this.size() - 1);
    }

    pop() {
        if(this.size() === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown(0);
        return root;
    }

    _bubbleUp(index) {
        const value = this.heap[index];
        while(index > 0) {
            const parentIndex = (index - 1) >> 1;
            if(this.heap[parentIndex] <= value) break;
            // swap
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    _bubbleDown(index) {
        const length = this.size();
        const value = this.heap[index];

        while(true) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let smallest = index;

            if(left < length && this.heap[left] < this.heap[smallest]) smallest = left;
            if(right < length && this.heap[right] < this.heap[smallest]) smallest = right;

            if(smallest === index) break;
            // swap
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}
