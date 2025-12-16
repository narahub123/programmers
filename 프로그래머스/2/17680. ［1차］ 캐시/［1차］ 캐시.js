function solution(cacheSize, cities) {
    const lru = new LRUCache(cacheSize);
    
    let duration = 0;
    for (const city of cities) {
        const cityKey = city.toLowerCase();
        
        // get으로 hit/miss 판정
        if (lru.has(cityKey)) {
            // Cache Hit: 1초
            duration += 1;
            lru.use(cityKey); // 최근 사용으로 갱신
        } else {
            // Cache Miss: 5초
            duration += 5;
            lru.put(cityKey); // 캐시에 추가
        }
    }
    
    return duration;
}

// Map 기반 간단 LRU
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    // 캐시에 존재 여부 확인
    has(key) {
        return this.cache.has(key);
    }

    // 최근 사용으로 갱신
    use(key) {
        if (!this.cache.has(key)) return;
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value); // Map에서 마지막에 삽입 → 최신
    }

    // 캐시에 추가 + 용량 초과 시 LRU 제거
    put(key) {
        if (this.capacity === 0) return;

        if (this.cache.has(key)) {
            this.cache.delete(key);
        }

        this.cache.set(key, key);

        if (this.cache.size > this.capacity) {
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
        }
    }
}
