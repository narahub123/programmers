function solution(n, k, enemy) {
    const heap = new MaxHeap();
    let round = 0;
    
    for(let soliders of enemy){
        n -= soliders
        
        heap.insert(soliders);
        round++;
        
        if(n < 0 && k > 0) {
            heap.heapifyUp();
            const max = heap.extractMax();
            n += max;
            k--;
            continue;
        }
        
        if(n < 0) {
            round--
            break;
        }
    }
    
    
    return round
}

// 최대 힙 클래스 생성 
class MaxHeap {
    constructor(){
        this.heap = [];
    }
    
    parentIndex(i){
        return Math.floor((i - 1) / 2);
    }
    
    leftChildIndex(i){
        return 2 * i + 1;
    }
    
    rightChildIndex(i){
        return 2 * i + 2;
    }
    
    // 삽입 
    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }
    
    heapifyUp(){
        let index = this.heap.length - 1;
        while(index > 0){
            let parent = this.parentIndex(index);
            if(this.heap[parent] < this.heap[index]){
                [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
                index = parent;
            }  else break;
        }
    }
    
    // 루트 제거 
    extractMax(){
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }
    
    // 
    heapifyDown(index){
        let largest = index;
        const left = this.leftChildIndex(index);
        const right = this.rightChildIndex(index);
        
        if(left < this.heap.length && this.heap[left] > this.heap[largest]) largest = left;
        
        if(right < this.heap.length && this.heap[right] > this.heap[largest]) largest = right;
        
        if(largest !== index){
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.heapifyDown(largest);
        }
    }
    
    // 루트 확인 
    peek() {
        return this.heap[0] || null; 
    }
    
    // 
    list(){
        return this.heap;
    }
    
    print(){
        console.log(this.heap);
    }
} // class end 
