function solution(nums) {
    const sorted = [...new Set(nums)];
    
    return sorted.length >= Math.floor(nums.length / 2) ? Math.floor(nums.length / 2) : sorted.length
    
}